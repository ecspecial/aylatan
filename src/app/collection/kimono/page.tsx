import { CatalogView } from "@/components/CatalogView";

export const metadata = {
  title: "Кимоно",
};

export default function KimonoPage() {
  return (
    <CatalogView
      category="kimono"
      hero="kimono"
      intro="Кимоно-халаты из шифон-шелка и шелка. Орнамент священен — вы под защитой."
    />
  );
}
