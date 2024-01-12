import { PictureTag } from "../PictureTag/PictureTag";
import styles from "./CompanyMission.module.css";
export function CompanyMission({ className = "" }) {
  return (
    <>
      <section className={`${className} | company-mission`}>
        <div className={`${styles.evenColumns} | container`}>
          <PictureTag
            mobile="/assets/shared/mobile/image-best-gear.jpg"
            tablet="/assets/shared/tablet/image-best-gear.jpg"
            desktop="/assets/shared/desktop/image-best-gear.jpg"
            className={styles.image}
            alt="man listening to music with a headphone"
          />

          <div className={styles.text}>
            <h2>
              Bringing you the <span>best</span> audio gear
            </h2>
            <p>
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
