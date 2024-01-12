import styles from "./HomeGallery.module.css";

export function HomeGallery() {
  return (
    <>
      <section className={styles.homeGallery}>
        <div className={`${styles.grid} container`}>
          <div className={styles.one}></div>
          <div className={styles.two}></div>
          <div className={styles.three}></div>
          <div className={styles.four}></div>
        </div>
      </section>
    </>
  );
}
