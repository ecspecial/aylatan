import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const imageRoot = path.join(root, "public", "images");
const supportedExtensions = new Set([".webp", ".png"]);

async function getImageFiles(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.join(directory, entry.name);
      if (entry.isDirectory()) return getImageFiles(entryPath);
      return supportedExtensions.has(path.extname(entry.name).toLowerCase())
        ? [entryPath]
        : [];
    }),
  );

  return nested.flat();
}

function maxWidthFor(filePath) {
  return path.basename(filePath) === "osnovnoe.webp" ? 2400 : 1800;
}

async function writeFileWithRetry(filePath, output) {
  for (let attempt = 1; attempt <= 5; attempt += 1) {
    try {
      await fs.chmod(filePath, 0o666);
      await fs.writeFile(filePath, output);
      return true;
    } catch (error) {
      if (error.code !== "EPERM" || attempt === 5) {
        console.warn(`Skipped ${path.relative(root, filePath)}: ${error.code}`);
        return false;
      }

      await new Promise((resolve) => setTimeout(resolve, attempt * 300));
    }
  }

  return false;
}

const imageFiles = await getImageFiles(imageRoot);
let originalBytes = 0;
let compressedBytes = 0;

for (const filePath of imageFiles) {
  const original = await fs.readFile(filePath);
  const input = sharp(original, { failOn: "none" }).rotate();
  const metadata = await input.metadata();
  const targetWidth = Math.min(metadata.width ?? maxWidthFor(filePath), maxWidthFor(filePath));
  const extension = path.extname(filePath).toLowerCase();

  if (
    original.length <= 512 * 1024 &&
    (metadata.width ?? targetWidth) <= targetWidth
  ) {
    originalBytes += original.length;
    compressedBytes += original.length;
    continue;
  }

  const output =
    extension === ".webp"
      ? await input
          .resize({ width: targetWidth, withoutEnlargement: true })
          .webp({ quality: 78, effort: 6, smartSubsample: true })
          .toBuffer()
      : await input
          .resize({ width: targetWidth, withoutEnlargement: true })
          .png({ compressionLevel: 9, adaptiveFiltering: true })
          .toBuffer();

  let finalBytes = original.length;

  if (output.length < original.length) {
    const written = await writeFileWithRetry(filePath, output);
    if (written) finalBytes = output.length;
  }

  originalBytes += original.length;
  compressedBytes += finalBytes;

  console.log(
    `${path.relative(root, filePath)}: ${(original.length / 1024).toFixed(0)} KB -> ${(finalBytes / 1024).toFixed(0)} KB`,
  );
}

console.log(
  `Compressed ${(originalBytes / 1024 / 1024).toFixed(1)} MB -> ${(compressedBytes / 1024 / 1024).toFixed(1)} MB`,
);
