import { PRODUCT_LIST } from "@/utils/constants";
import styles from "./CardProduct.module.css";

import CardProduct from "./CardProduct";

const productList = PRODUCT_LIST;

export default function CardsSection() {
  return (
    <div className={styles.cardsSection}>
      {productList.length > 0 &&
        productList.map((element, index) => (
          <CardProduct key={index} product={element} />
        ))}
    </div>
  );
}
