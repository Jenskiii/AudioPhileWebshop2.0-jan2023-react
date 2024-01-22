import styles from "./ProductDetails.module.css";
export function ProductDetails({ id, image, name, price, amount, small }) {
  return (
    <>
      <div
        className={`${styles.productContainer} ${small ? styles.small : ""}`}
      >
        <img src={image} alt={name} />
        <div>
          <strong>{name}</strong>
          <p className={styles.price}>{`$ ${price}`}</p>
        </div>

        <p className={styles.amount}>x{amount}</p>
      </div>
    </>
  );
}
