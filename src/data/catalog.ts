export type CategoryId =
  | "kimono"
  | "kaftans"
  | "pants"
  | "tops"
  | "shorts"
  | "earrings"
  | "chokers"
  | "neck";

export type Product = {
  id: string;
  title: string;
  category: CategoryId;
  imageKey: "product-1" | "product-2" | "product-3" | "product-4";
  fabric: string;
  length: string;
  description: string;
};

export const products: Product[] = [
  {
    id: "kimono-long-chiffon-silk",
    title: "Кимоно-халат длинное шифон-шелк 100%",
    category: "kimono",
    imageKey: "product-1",
    fabric: "Шифон-шелк 100%",
    length: "Длинное",
    description:
      "Длинное кимоно-халат из чистого шифон-шелка. Ткань дышит, струится и держит орнамент — священный геометрический узор, который оберегает. Надевается как ритуал: чтобы в зеркале вы любили себя больше.",
  },
  {
    id: "kimono-34-chiffon-silk",
    title: "Кимоно-халат длина 3/4 шифон-шелк 100%",
    category: "kimono",
    imageKey: "product-2",
    fabric: "Шифон-шелк 100%",
    length: "3/4",
    description:
      "Кимоно-халат длины 3/4 из шифон-шелка. Легкость ткани и точность орнамента — чтобы подчеркнуть грациозность, не утяжеляя силуэт. Каждая вещичка намолена.",
  },
  {
    id: "kaftan-34-silk",
    title: "Кофтан-халат длина 3/4 шелк 100%",
    category: "kaftans",
    imageKey: "product-3",
    fabric: "Шелк 100%",
    length: "3/4",
    description:
      "Кафтан-халат длины 3/4 из чистого шелка. Плотность и блеск шелка держат форму, а орнамент остаётся оберегом. Для дома, ритуала и выхода в мир.",
  },
  {
    id: "kimono-34-silk",
    title: "Кимоно-халат длина 3/4 шелк 100%",
    category: "kimono",
    imageKey: "product-4",
    fabric: "Шелк 100%",
    length: "3/4",
    description:
      "Кимоно-халат длины 3/4 из чистого шелка. Глубокий тон, живой блеск и священный орнамент. Вы под защитой — светитесь и будьте счастливы.",
  },
];

export const categories: Record<
  CategoryId,
  { slug: string; title: string; href: string; group: "collection" | "accessories" }
> = {
  kimono: {
    slug: "kimono",
    title: "Кимоно",
    href: "/collection/kimono",
    group: "collection",
  },
  kaftans: {
    slug: "kaftans",
    title: "Кафтаны",
    href: "/collection/kaftans",
    group: "collection",
  },
  pants: {
    slug: "pants",
    title: "Брюки",
    href: "/collection/pants",
    group: "collection",
  },
  tops: {
    slug: "tops",
    title: "Топы",
    href: "/collection/tops",
    group: "collection",
  },
  shorts: {
    slug: "shorts",
    title: "Шорты",
    href: "/collection/shorts",
    group: "collection",
  },
  earrings: {
    slug: "earrings",
    title: "Серьги",
    href: "/accessories/earrings",
    group: "accessories",
  },
  chokers: {
    slug: "chokers",
    title: "Чокеры",
    href: "/accessories/chokers",
    group: "accessories",
  },
  neck: {
    slug: "neck",
    title: "Украшения на шею",
    href: "/accessories/neck",
    group: "accessories",
  },
};

export function getProduct(id: string) {
  return products.find((item) => item.id === id);
}

export function getProductsByCategory(category: CategoryId) {
  return products.filter((item) => item.category === category);
}

export function getRelatedProducts(id: string, limit = 3) {
  const current = getProduct(id);
  if (!current) return products.slice(0, limit);
  const same = products.filter(
    (item) => item.id !== id && item.category === current.category,
  );
  const rest = products.filter(
    (item) => item.id !== id && item.category !== current.category,
  );
  return [...same, ...rest].slice(0, limit);
}

export const designerManifesto = [
  "Мы сами наполняем этот мир любовью, радостью и красотой.....",
  "Наша команда создает для вас эти изящные вещи,",
  "чтобы подчеркнуть вашу грациозность,",
  "чтобы смотрясь в зеркало, вы любили себя больше....",
  "Каждая вещичка- намолена, орнамент - священен....",
  "Вы под защитой...",
  "Светитесь, сияйте и будьте счастливы всегда!!!!",
  "Потому что счастье ни от чего не зависит... оно внутри вас!!!",
];
