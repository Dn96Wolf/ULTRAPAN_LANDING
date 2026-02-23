import { ProductDetailInterface } from "./Product";

export interface CarouselItem {
  id: number;
  title: string;
  descripcion: string;
  presentation: string;
  path: string;
  image: string; // URL o ruta en /public
}

export type ProductCarouselProps = {
  title: string;
  elementos: ProductDetailInterface[];
  category?: "INDUSTRIAL" | "ARTESANAL";
  intervalMs?: number; // default 1000
  ctaLabel?: any; // default "Ver más"
  onActionElement?: (element: ProductDetailInterface) => void;
};