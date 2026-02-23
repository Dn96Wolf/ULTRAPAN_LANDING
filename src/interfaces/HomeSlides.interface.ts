import { ProductColorPalette } from "./Product";

export interface HomeSlide {
    idProduct: number;
  title: string;
  subtitle: string;
  backgroundImage: string;
  backgroundImageResponsive: string;
  ribbonClass: string;
  action: boolean;
  colorPalette: ProductColorPalette;
}
