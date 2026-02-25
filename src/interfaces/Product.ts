export interface ProductDetailInterface {
  id: number;
  title: string;
  route: string;
  subtitle: string;
  category: "INDUSTRIAL" | "ARTESANAL";
  description: string;
  description2?: string;
  mainImage: string;
  image: string;
  carouselImage:string;
  textColor: string;
  benefits: {
    title: string;
    description: string;
    icon: string;
    bgColor: string;
    disclaimer?: string;
  }[];
  instructions: {
    title: string;
    description: string;
    bgColor: string;
    icon: string;
  }[];
  valueProposal: {
    title: string;
    bgColor: string;
  };
  colorPalette: ProductColorPalette;
  keywords: string[];
  applications: string[];
  advantages: {
    title: string;
    description: string;
    bgColor: string;
    icon: string;
  }[];
  backgroundColor: string;
  ingredients: string;
}

export type ProductColorPalette =
  | "SOFTBLUE"
  | "BLUE"
  | "BROWN"
  | "MUSTARD"
  | "SOFTBROWN";
