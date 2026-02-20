import ProductDetail from "@/components/Product/ProductDetail";
import { getProductBySlug } from "@/utils/helpers";
import type { Metadata } from "next";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Producto no encontrado",
    };
  }

  return {
    title: `${product.title} | Ultrapan`,
    description: product.description,
    keywords: product.keywords?.join(", "),
    openGraph: {
      title: product.title,
      description: product.description,
      images: [
        {
          url: product.image,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const product = getProductBySlug(decodeURIComponent(slug));

  if (!product) {
    return {
      title: "Producto no encontrado",
    };
  }

  return (
      <ProductDetail item={product} />
  );
}
