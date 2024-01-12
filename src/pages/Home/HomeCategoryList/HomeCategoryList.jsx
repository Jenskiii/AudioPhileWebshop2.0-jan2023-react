import { CategoryList } from "../../../components/CategoryList/CategoryList";
import styles from "./HomeCategoryList.module.css";

export function HomeCategoryList() {
  return (
    <section className={styles.categoryList}>
      <CategoryList LinkRoute=".././" />
    </section>
  );
}
