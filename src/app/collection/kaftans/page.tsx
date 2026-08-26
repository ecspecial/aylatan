import { CatalogView } from "@/components/CatalogView";

export const metadata = {
  title: "Кафтаны",
};

export default function KaftansPage() {
  return (
    <CatalogView
      category="kaftans"
      hero="kaftan"
      intro="Кафтаны и пледы — шелк, который держит тепло и свет."
    />
  );
}
