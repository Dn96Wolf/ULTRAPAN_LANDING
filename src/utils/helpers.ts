import { PRODUCT_LIST } from "@/utils/constants";
import { ProductDetailInterface } from "@/interfaces/Product";

export function createSlug(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD") // elimina acentos
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\+/g, "plus")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export function getProductBySlug(slug: string) {
  return PRODUCT_LIST.find(
    (product: ProductDetailInterface) =>
      product.route.toLowerCase().replace(/\s+/g, "-") ===
      decodeURIComponent(slug),
  );
}
