import styles from "./CompanyMission.module.css";
export function CompanyMission({ className = "" }) {
  return (
    <>
      <section className={`${className} | company-mission`}>
        <div className={`${styles.evenColumns} | container`}>
          <div>
            <picture>
              <source
                media="(min-width: 79em)"
                srcSet="/assets/shared/desktop/image-best-gear.jpg"
              />
              <source
                media="(min-width: 47em)"
                srcSet="/assets/shared/tablet/image-best-gear.jpg"
              />
              <img
                className={styles.image}
                src="/assets/shared/mobile/image-best-gear.jpg"
                alt="man listening to music with a headphone"
              />
            </picture>
          </div>
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
