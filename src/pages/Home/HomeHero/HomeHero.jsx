import data from "../../../data/data.json"
import {ProductDescription} from "../../../components/ProductDescription/ProductDescription"
import styles from "./HomeHero.module.css";

export function HomeHero() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`${styles.heroWrapper} | container`}>
          <ProductDescription
            home
            newProduct
            AsComponent="h1"
            title={data.headphones[2].name}
            information="Experience natural, lifelike audio and exceptional build quality made
              for the passionate music enthusiast."
            link={`/${data.headphones[2].category}/${data.headphones[2].slug}`}
            className={styles.heroDescription}
          />
        </div>
      </section>
    </>
  );
}
