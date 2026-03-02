import { ProductColorPalette } from "./Product";

export interface HomeSlide {
  idProduct: number;
  title: string;
  specialTitle?:string;
  subtitle: string;
  subtitle2: string;
  backgroundImage: string;
  backgroundImageResponsive: string;
  ribbonClass: string;
  action: boolean;
  secondAction: boolean;
  colorPalette: ProductColorPalette;
  secondColorPalette: ProductColorPalette;
  primaryButtonText: string;
  secondButtonText: string;
  primaryRoute: string;
  secondRoute:string;
}
