export interface ProductDetailInterface {
  id: number;
  title: string;
  subtitle: string;
  category: "INDUSTRIAL" | "ARTESANAL";
  description: string;
  image: any;
  benefits: { title: string; description: string }[];
  instructions: { title: string; description: string }[];
  valueProposal: string;
}
