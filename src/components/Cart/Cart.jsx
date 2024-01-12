import { CartIcon } from "../../svg/Symbols";
import styles from "./Cart.module.css";

export function Cart({ className, cartMenu }) {
  return (
    <>
      <div
        className={`${styles.cart} ${className} ${
          cartMenu ? styles.active : ""
        }`}
      ></div>
      ;
    </>
  );
}

export function CartButton({ toggleCart, closeHamburger }) {
  // toggles cart + closes hamburger menu
  function handleCart(){
    toggleCart(((prev) => !prev))
    closeHamburger(false)
  }

  return (
    <button
      className={styles.cartIcon}
      aria-label="shopping cart"
      onClick={() => handleCart()}
    >
      <CartIcon />
      <p>2</p>
    </button>
  );
}
