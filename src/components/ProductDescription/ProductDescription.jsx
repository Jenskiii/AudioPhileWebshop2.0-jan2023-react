import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import styles from "./ProductDescription.module.css";

export function ProductDescription({
  className = "",
  title,
  information,
  link,
  AsComponent = "h2",
  newProduct,
  isHomePage = false,
  isProductPage = false,
}) {
  return (
    <div
      className={`${styles.container} ${className} ${
        isHomePage ? styles.home : ""
      }`}
    >
      <div>
        {newProduct && (
          // if home page different color
          <p className={`${styles.newProduct}`}>New Product</p>
        )}
        <AsComponent className={styles.title}>{title}</AsComponent>
      </div>

      <p className={styles.information}>{information}</p>

      {/* if not product page show link */}
      {!isProductPage && (
        <Button
          className={styles.button}
          AsComponent={Link}
          theme="accent"
          to={link}
        >
          See Product
        </Button>
      )}
    </div>
  );
}
