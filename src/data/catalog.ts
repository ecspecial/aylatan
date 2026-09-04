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
  cardTitle?: string;
  category: CategoryId;
  imageKey: "product-1" | "product-2" | "product-3" | "product-4";
  imageSrc?: string;
  detailImages?: string[];
  detailVideos?: string[];
  isGalleryProduct?: boolean;
  fabric: string;
  length: string;
  description: string;
};

const baseProducts: Product[] = [
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
    title: "Кафтан-халат длина 3/4 шелк 100%",
    category: "kaftans",
    imageKey: "product-2",
    fabric: "Шелк 100%",
    length: "3/4",
    description:
      "Кафтан-халат длины 3/4 из чистого шелка. Плотность и блеск шелка держат форму, а орнамент остаётся оберегом. Для дома, ритуала и выхода в мир.",
  },
  {
    id: "kaftan-34-silk",
    cardTitle: "\u0411\u0440\u044e\u043a\u0438",
    title: "Брюки Шелк 100%",
    category: "pants",
    imageKey: "product-3",
    fabric: "Шелк 100%",
    length: "3/4",
    description:
      "Брюки из 100% натурального шелка. Легкие, свободные и приятные к телу - для дома, отдыха и города.",
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

const kimonoGalleryImages = [
  "/images/kimono/kimono 1.webp",
  "/images/kimono/kimono2.webp",
  "/images/kimono/kimono 3.webp",
  "/images/kimono/kimono 4.webp",
  "/images/kimono/kimono5.webp",
  "/images/kimono/kimono6.webp",
  "/images/kimono/kimono7.webp",
  "/images/kimono/kimono8 .webp",
  "/images/kimono/kimono9.webp",
  "/images/kimono/kimono10.webp",
  "/images/kimono/kimono 11 .webp",
  "/images/kimono/kimono12.webp",
  "/images/kimono/kimono 13.webp",
  "/images/kimono/kimono 14.webp",
  "/images/kimono/kimono15.webp",
  "/images/kimono/kimono 16.webp",
  "/images/kimono/kimono 17.webp",
  "/images/kimono/kimono18.webp",
  "/images/kimono/kimono19.webp",
  "/images/kimono/kimono20.webp",
] as const;

const kimonoTemplates = [baseProducts[0], baseProducts[3]];
const chiffonSilkKimonoNumbers = new Set([3, 4, 6, 7, 9, 10]);
const woolKimonoNumbers = new Set([16, 19]);
const kimonoDetailImages: Record<number, string[]> = {
  1: [
    "/images/perehod_detail_every_kimono/kim_1/%D0%BF%D0%B5%D1%80%D0%B5%D1%85%D0%BE%D0%B4%201-1.webp",
    "/images/perehod_detail_every_kimono/kim_1/%D0%BF%D0%B5%D1%80%D0%B5%D1%85%D0%BE%D0%B41%20-2.webp",
    "/images/perehod_detail_every_kimono/kim_1/%D0%BF%D0%B5%D1%80%D0%B5%D1%85%D0%BE%D0%B41-3.webp",
    "/images/perehod_detail_every_kimono/kim_1/%D0%BF%D0%B5%D1%80%D0%B5%D1%85%D0%BE%D0%B41-4.webp",
    "/images/perehod_detail_every_kimono/kim_1/%D0%BF%D0%B5%D1%80%D0%B5%D1%85%D0%BE%D0%B41-5.webp",
  ],
  2: [
    "/images/perehod_detail_every_kimono/kim_2/%D0%BF%D0%B5%D1%80%D0%B5%D1%85%D0%BE%D0%B42-1.webp",
    "/images/perehod_detail_every_kimono/kim_2/%D0%BF%D0%B5%D1%80%D0%B5%D1%85%D0%BE%D0%B42-3.webp",
    "/images/perehod_detail_every_kimono/kim_2/%D0%BF%D0%B5%D1%80%D0%B5%D1%85%D0%BE%D0%B42-4.webp",
    "/images/perehod_detail_every_kimono/kim_2/%D0%BF%D0%B5%D1%80%D0%B5%D1%85%D0%BE%D0%B42-5.webp",
  ],
};
const kimonoDetailVideos: Record<number, string[]> = {
  1: [
    "/images/perehod_detail_every_kimono/kim_1/perehod_1_compressed.mp4",
  ],
  2: [
    "/images/perehod_detail_every_kimono/kim_2/perehod_2_compressed.mp4",
  ],
};
const kimonoOneAndTwoDescription = `Элегантность — наше всё...

Этот халат-кимоно сшит из натурального шёлка... Поэтому он невероятно приятен при соприкосновении с кожей...

Он выходит за рамки одного сезона... Вы можете носить его дома... встречать в нём гостей... радовать своих близких... или просто себя, любимую...

Можно накинуть его поверх платья... носить летом с брюками для выхода в город... надеть на отдыхе у бассейна или у моря, чтобы укрыться от солнца... Или стать звездой вечеринки...

Чем больше в вашем гардеробе таких вещей, тем меньше весит ваш чемодан... Или тем больше вещей вы можете взять с собой на отдых...

Размер: единый; обхват изделия — 135 см.
Состав: 100% шёлк.
Уход: бережная ручная стирка в холодной воде.
Рост модели: 172 см.`;
export const products: Product[] = [
  ...baseProducts,
  ...kimonoGalleryImages.map((imageSrc, index) => {
    const number = index + 1;
    const template = kimonoTemplates[index % kimonoTemplates.length];
    const fabric = woolKimonoNumbers.has(number)
      ? "шерсть 100 %"
      : chiffonSilkKimonoNumbers.has(number)
        ? "шелк шифон 100 %"
        : "шелк 100 %";

    return {
      ...template,
      id: `kimono-gallery-${String(number).padStart(2, "0")}`,
      title: `Кимоно ${fabric}`,
      category: "kimono" as const,
      fabric,
      description:
        number <= 2 ? kimonoOneAndTwoDescription : template.description,
      imageSrc,
      detailImages: kimonoDetailImages[number],
      detailVideos: kimonoDetailVideos[number],
      isGalleryProduct: true,
    };
  }),
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

const homeProductIds = [
  "kimono-gallery-12",
  "kimono-gallery-01",
  "kimono-gallery-02",
  "kimono-gallery-03",
] as const;

export function getHomeProducts() {
  return homeProductIds
    .map((id) => getProduct(id))
    .filter((product): product is Product => Boolean(product));
}

export function getProductsByCategory(category: CategoryId) {
  return products.filter(
    (item) =>
      item.category === category &&
      (category !== "kimono" || item.isGalleryProduct),
  );
}

export function getRelatedProducts(id: string, limit = 3) {
  const current = getProduct(id);
  if (!current) return products.slice(0, limit);
  const visibleProducts = products.filter(
    (item) => item.category !== "kimono" || item.isGalleryProduct,
  );
  const same = visibleProducts.filter(
    (item) => item.id !== id && item.category === current.category,
  );
  const rest = visibleProducts.filter(
    (item) => item.id !== id && item.category !== current.category,
  );
  return [...same, ...rest].slice(0, limit);
}

export function getKimonoRecommendations(id: string, limit = 8) {
  const kimonoProducts = products.filter(
    (item) => item.category === "kimono" && item.isGalleryProduct,
  );
  const currentIndex = kimonoProducts.findIndex((item) => item.id === id);

  if (currentIndex < 0) return kimonoProducts.slice(0, limit);

  return [
    ...kimonoProducts.slice(currentIndex + 1),
    ...kimonoProducts.slice(0, currentIndex),
  ].slice(0, limit);
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
