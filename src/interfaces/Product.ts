export interface ProductDetailInterface {
  id: number;
  title: string;
  route:string;
  subtitle: string;
  category: "INDUSTRIAL" | "ARTESANAL";
  description: string;
  image: string;
  benefits: { title: string; description: string; icon: string }[];
  instructions: { title: string; description: string }[];
  valueProposal: string;
  colorPalette: ProductColorPalette;
  keywords:string[];
}

export type ProductColorPalette =
  | "SOFTBLUE"
  | "BLUE"
  | "BROWN"
  | "MUSTARD"
  | "SOFTBROWN";
