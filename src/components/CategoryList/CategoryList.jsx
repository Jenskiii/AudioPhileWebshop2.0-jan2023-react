import { Link } from "react-router-dom";
import { productData } from "../../data/productData";
import styles from "./CategoryList.module.css";
import { ArrowRight } from "../../svg/Symbols";

export function CategoryList({
  className,
  toggleHamburgerMenu,
  LinkRoute = "/",
}) {
  return (
    <>
      <div className={` ${className}`}>
        <div className={`${styles.container}`}>
          {productData.map((item) => {
            return (
              <Link
                className={styles.card}
                to={`${LinkRoute}${item.category}`}
                key={item.id}
                onClick={
                  toggleHamburgerMenu !== undefined
                    ? () => toggleHamburgerMenu(false)
                    : undefined
                }
              >
                <img
                  className={styles.image}
                  src={item.showcase}
                  alt={`showcase of ${item.category}`}
                />
                <div className={styles.textWrapper}>
                  <h6 className={styles.title}>{item.category}</h6>
                  <p className={styles.link}>
                    Shop <span><ArrowRight/></span>
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
