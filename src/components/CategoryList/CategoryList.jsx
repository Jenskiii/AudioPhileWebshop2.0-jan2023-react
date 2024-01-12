import { Link } from "react-router-dom";
import { productData } from "../../data/productData";
import styles from "./CategoryList.module.css";

export function CategoryList({ className, toggleHamburgerMenu }) {
  return (
    <>
      <div className={` ${className}`}>
        <div className={`${styles.container} container`}>
          {productData.map((item) => {
            return (
              <Link
                className={styles.card}
                to={`../${item.category}`}
                key={item.id}
                onClick={() => toggleHamburgerMenu(false)}
              >
                <img
                  className={styles.image}
                  src={item.showcase}
                  alt={`showcase of ${item.category}`}
                />
                <div className={styles.textWrapper}>
                  <h6 className={styles.title}>{item.category}</h6>
                  <p className={styles.link}>
                    Shop <span>&#11166;</span>
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
