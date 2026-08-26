import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const photos = path.join(root, "photos");
const outDir = path.join(root, "public", "images");

fs.mkdirSync(outDir, { recursive: true });
fs.mkdirSync(path.join(root, "src", "data"), { recursive: true });

const jobs = [
  { file: "main_1.png", name: "hero", width: 2400, quality: 82 },
  { file: "main_kimono_1.png", name: "kimono-1", width: 2400, quality: 82 },
  { file: "main_kimono_2.png", name: "kimono-2", width: 2400, quality: 82 },
  { file: "main_kaftan.PNG", name: "kaftan-banner", width: 2400, quality: 82 },
  { file: "designer.png", name: "designer", width: 1600, quality: 84 },
  { file: "logo.png", name: "logo", width: 900, quality: 90, format: "png" },
  { file: "main_four_1.JPG", name: "product-1", width: 1400, quality: 84 },
  { file: "main_four_2.JPG", name: "product-2", width: 1400, quality: 84 },
  { file: "main_four_3.JPG", name: "product-3", width: 1400, quality: 84 },
  { file: "main_four_4.JPG", name: "product-4", width: 1400, quality: 84 },
];

const meta = {};

for (const job of jobs) {
  const input = path.join(photos, job.file);
  if (!fs.existsSync(input)) {
    console.warn("missing", job.file);
    continue;
  }

  const image = sharp(input, { failOn: "none" }).rotate();
  const info = await image.metadata();
  const targetW = Math.min(job.width, info.width || job.width);

  if (job.format === "png") {
    const outPath = path.join(outDir, `${job.name}.png`);
    const result = await sharp(input, { failOn: "none" })
      .rotate()
      .resize({ width: targetW, withoutEnlargement: true })
      .png({ compressionLevel: 9, palette: true })
      .toFile(outPath);
    const blur = await sharp(input, { failOn: "none" })
      .rotate()
      .resize({ width: 16 })
      .webp({ quality: 40 })
      .toBuffer();
    meta[job.name] = {
      src: `/images/${job.name}.png`,
      width: result.width,
      height: result.height,
      blurDataURL: `data:image/webp;base64,${blur.toString("base64")}`,
    };
    console.log(`${job.name}.png  ${(result.size / 1024).toFixed(0)} KB  ${result.width}x${result.height}`);
    continue;
  }

  const outPath = path.join(outDir, `${job.name}.webp`);
  const result = await sharp(input, { failOn: "none" })
    .rotate()
    .resize({ width: targetW, withoutEnlargement: true })
    .webp({ quality: job.quality, effort: 5 })
    .toFile(outPath);

  const blur = await sharp(input, { failOn: "none" })
    .rotate()
    .resize({ width: 20 })
    .webp({ quality: 35 })
    .toBuffer();

  meta[job.name] = {
    src: `/images/${job.name}.webp`,
    width: result.width,
    height: result.height,
    blurDataURL: `data:image/webp;base64,${blur.toString("base64")}`,
  };

  console.log(`${job.name}.webp  ${(result.size / 1024).toFixed(0)} KB  ${result.width}x${result.height}`);
}

const ts = `export const imageMeta = ${JSON.stringify(meta, null, 2)} as const;
`;
fs.writeFileSync(path.join(root, "src", "data", "imageMeta.ts"), ts);
console.log("wrote src/data/imageMeta.ts");
