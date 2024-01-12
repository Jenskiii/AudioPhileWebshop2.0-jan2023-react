import data from "../../data/data.json";
import { ProductDescription } from "../../components/ProductDescription/ProductDescription";
import { CategoryList } from "../../components/CategoryList/CategoryList";
import styles from "./Home.module.css";
import { PictureTag } from "../../components/PictureTag/PictureTag";
import { Button } from "../../components/Button/Button";
import { Link } from "react-router-dom";
export function Home() {
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

      <section className={styles.categoryList}>
        <CategoryList LinkRoute="../" />
      </section>

      <section className={styles.gallery}>
        {/* grid */}
        <div className={`${styles.galleryGrid} container`}>
          
          {/* grid one */}
          <div className={styles.gridOne}>
            <PictureTag
              mobile="/assets/home/mobile/image-speaker-zx9.png"
              tablet="/assets/home/tablet/image-speaker-zx9.png"
              desktop="/assets/home/desktop/image-speaker-zx9.png"
              className={styles.gridOneImage}
              alt="man listening to music with a headphone"
              mqDesktop="65em"
              mqTablet="42em"
            />
            <div className={styles.gridOneInformation}>
              <h4>
                Zx9 <br /> Speaker
              </h4>
              <p>
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <Button
                AsComponent={Link}
                to={`../earphones/${data.speakers[0].slug}`}
                theme="dark"
              >
                See Product
              </Button>
            </div>
          </div>

          {/* grid two */}
          <div className={styles.gridTwo}>
            <div>
              <h4>Zx7 Speaker</h4>
              <Button
                AsComponent={Link}
                to={`../earphones/${data.speakers[0].slug}`}
                theme="outline"
              >
                See Product
              </Button>
            </div>
          </div>

          {/* grid three */}
          <div className={styles.gridThree}></div>

          {/* grid four */}
          <div className={styles.gridFour}>
            <div>
              <h4>Yx1 Earphones</h4>
              <Button
                AsComponent={Link}
                to={`../earphones/${data.earphones[0].slug}`}
                theme="outline"
              >
                See Product
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
