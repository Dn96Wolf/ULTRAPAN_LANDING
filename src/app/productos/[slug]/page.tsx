import ProductDetail from "@/components/Product/ProductDetail";
import styles from "./../../page.module.css";
import { PRODUCT_LIST } from "@/utils/constants";

const productList = PRODUCT_LIST;

type PageProps = {
  params: Promise<{ slug: number }>;
};

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const element = productList.find((item) => item.id == slug);
  return (
    <main className={styles.page}>
      {element && <ProductDetail item={element} />}
    </main>
  );
}
