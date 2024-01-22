import { useNavigate } from "react-router-dom";
import styles from "./Button.module.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export function Button({
  className = "",
  AsComponent = "button",
  theme = "",
  ...props
}) {
  return (
    <AsComponent
      className={`${styles.btn} ${styles[theme]} ${className}`}
      {...props}
    />
  );
}

// hamburger
export function HamburgerButton({ isActive, toggleActive, closeCart }) {
  function handleHamburger() {
    toggleActive((prev) => !prev);
    closeCart(false);
  }
  return (
    <button
      aria-label="hamburger navigation"
      className={`${styles.hamburger} ${isActive ? styles.active : ""}`}
      onClick={() => handleHamburger()}
    ></button>
  );
}

// return
export function ReturnButton() {
  // previous page
  const navigate = useNavigate();
  return (
    <button
      aria-label="return to previous page"
      className={styles.returnButton}
      onClick={() => navigate(-1)}
    >
      Go Back
    </button>
  );
}

// counter
export function CounterButton({
  productAmount,
  setProductAmount,
  className,
  cartAmount,
  id,
}) {
  const { increaseCartAmount, decreaseCartAmount } = useContext(CartContext);
  // amount -1 if amount is higher than 1
  function decrease() {
    // amount for product page
    if (productAmount > 1 && setProductAmount)
      setProductAmount((count) => count - 1);
    // amount for cart

    if (cartAmount && id) decreaseCartAmount(id, cartAmount);
  }

  function increase() {
    // amount for product page
    if (setProductAmount) setProductAmount((count) => count + 1);
    // amount for cart
    if (cartAmount && id) increaseCartAmount(id, cartAmount);
  }
  return (
    <div className={`${styles.counter} ${className}`}>
      <button aria-label="decrease cart amount" onClick={() => decrease()}>
        -
      </button>
      <p>{productAmount ? productAmount : cartAmount}</p>
      <button aria-label="increase cart amount" onClick={() => increase()}>
        +
      </button>
    </div>
  );
}
