import { useContext } from "react";
import styles from "./Summary.module.css";
import { CartContext } from "../../context/CartContext";
import { Button } from "../Button/Button";
import { ProductDetails } from "../ProductDetails/ProductDetails";

export function Summary({ className }) {
  const { cartItems, getCartTotal } = useContext(CartContext);
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
          <h6>$ {getCartTotal()}</h6>
        </div>
        <div className={styles.row}>
          <p className={styles.text}>Shipping</p>
          <h6>$ 50</h6>
        </div>
        <div className={styles.row}>
          <p className={styles.text}>Vat (Included)</p>
          <h6>$ {Math.round((getCartTotal() / 100) * 20)}</h6>
        </div>
        <div className={`${styles.row} ${styles.grandTotal}`}>
          <p className={styles.text}>Grand Total</p>
          <h6 className={styles.grandTotal}>$ {getCartTotal(50)}</h6>
        </div>
        <Button theme="accent" className={styles.button}>
          CONTINUE & PAY
        </Button>
      </div>
    </>
  );
}
