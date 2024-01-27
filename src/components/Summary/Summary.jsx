import styles from "./Summary.module.css";
import { Button } from "../Button/Button";
import { ProductDetails } from "../ProductDetails/ProductDetails";
import { useCart } from "../../hooks/useCart";

export function Summary({ className }) {
  const { cartItems, getCartTotalPrice } = useCart();
  return (
    <>
      <div className={`${styles.summary} ${className}`}>
        {/* header */}
        <h6 className={styles.title}>Summary</h6>
        {/* body */}
        <ul>
          {cartItems.map((item) => {
            return (
              <li key={crypto.randomUUID()}>
                <ProductDetails {...item} />
              </li>
            );
          })}
        </ul>

        {/* footer */}
        <div className={styles.row}>
          <p className={styles.text}>Total</p>
          <h6>$ {getCartTotalPrice()}</h6>
        </div>
        <div className={styles.row}>
          <p className={styles.text}>Shipping</p>
          <h6>$ 50</h6>
        </div>
        <div className={styles.row}>
          <p className={styles.text}>Vat (Included)</p>
          <h6>$ {Math.round((getCartTotalPrice() / 100) * 20)}</h6>
        </div>
        <div className={`${styles.row} ${styles.grandTotal}`}>
          <p className={styles.text}>Grand Total</p>
          <h6 className={styles.grandTotal}>$ {getCartTotalPrice(50)}</h6>
        </div>
        <Button theme="accent" className={styles.button}>
          CONTINUE & PAY
        </Button>
      </div>
    </>
  );
}
