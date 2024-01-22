import { useParams } from "react-router-dom";
import { productData } from "../../data/productData";
import styles from "./Category.module.css";
import { ProductDescription } from "../../components/ProductDescription/ProductDescription";
import { PictureTag } from "../../components/PictureTag/PictureTag";
import { CategoryList } from "../../components/CategoryList/CategoryList";
import { EvenColumns } from "../../components/EvenColumns/EvenColumns";

export function Category() {
  // imports category from router
  const { category } = useParams();
  // updates data based on selected category
  const type = productData.find((type) => type.category === category);
  return (
    <>
      <section className={styles.header}>
        <div className={`${styles.headerContainer} | container`}>
          <h1>{category}</h1>
        </div>
      </section>

      <section className={styles.products}>
        <div className={`${styles.productsContainer} | container`}>
          {/* reversed so new items are on top */}
          {type.data.toReversed().map((item, index) => {
            return (
              <EvenColumns
                key={crypto.randomUUID()}
                col1={
                  <PictureTag
                    mobile={item.categoryImage.mobile}
                    tablet={item.categoryImage.tablet}
                    desktop={item.categoryImage.desktop}
                    alt={`${item.name}`}
                  />
                }
                col2={
                  <ProductDescription
                    newProduct={item.new}
                    AsComponent="h2"
                    title={item.name}
                    information={item.description}
                    link={item.slug}
                    className={styles.heroDescription}
                  />
                }
                index={index}
              />
            );
          })}
        </div>
      </section>

      <section className={`${styles.categoryList} | container`}>
        <CategoryList />
      </section>
    </>
  );
}
