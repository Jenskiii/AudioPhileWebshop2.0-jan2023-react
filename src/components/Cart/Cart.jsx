import { Link } from "react-router-dom";
import { CartIcon } from "../../svg/Symbols";
import { Button, CounterButton } from "../Button/Button";
import styles from "./Cart.module.css";
import { useCart } from "../../hooks/useCart";

export function Cart({ className, cartMenu, toggleCartMenu }) {
  const currentPage = window.location.href;
  const checkoutPage = "http://localhost:5173/checkout";

  const { cartItems, clearCart, deleteCartItem, getCartTotalPrice } = useCart();

  return (
    <>
      <div
        className={`${styles.cart} ${className} ${
          cartMenu ? styles.active : ""
        }`}
      >
        {/* cart header */}
        <div className={styles.row}>
          <h6>Cart ({cartItems.length})</h6>
          <p onClick={() => clearCart()} className={styles.removeAll}>
            Remove All
          </p>
        </div>

        {/* cart body */}
        {cartItems.length === 0 ? (
          <h6 className={styles.emptyCartMessage}>Card is empty</h6>
        ) : (
          <ul className={styles.cartList}>
            {cartItems.map((item) => {
              return (
                <li key={crypto.randomUUID()}>
                  {/* image */}
                  <div
                    onClick={() => deleteCartItem(item.id)}
                    className={styles.deleteCartItem}
                  >
                    <img src={item.image} alt={item.name} />
                  </div>
                  {/* name +price */}
                  <div>
                    <p className={styles.name}>{item.name}</p>
                    <p className={styles.price}>$ {item.price}</p>
                  </div>
                  {/* counter */}
                  <CounterButton
                    className={styles.counter}
                    cartAmount={item.amount}
                    id={item.id}
                  />
                </li>
              );
            })}
          </ul>
        )}
        {/* cart footer */}
        {/* Total */}
        <div className={`${styles.row} ${styles.total}`}>
          <p>Total</p>
          <h6>$ {getCartTotalPrice()}</h6>
        </div>

        {/* if check out page hide checkout button */}
        {currentPage !== checkoutPage && (
          <Button
            theme={cartItems.length === 0 ? "disabled" : "accent"}
            AsComponent={Link}
            to="/checkout"
            onClick={() => toggleCartMenu(false)}
            className={cartItems.length === 0 ? "disabled-link" : ""}
          >
            Checkout
          </Button>
        )}
      </div>
      ;
    </>
  );
}

export function CartButton({ toggleCart, closeHamburger }) {
  const { getCartTotalItems } = useCart();
  // toggles cart + closes hamburger menu
  function handleCart() {
    toggleCart((prev) => !prev);
    closeHamburger(false);
  }

  return (
    <button
      className={styles.cartIcon}
      aria-label="shopping cart"
      onClick={() => handleCart()}
    >
      <CartIcon />
      <p
        className={`${styles.cartIconAmount}  ${
          getCartTotalItems() > 0 ? styles.active : ""
        }`}
      >
        {getCartTotalItems()}
      </p>
    </button>
  );
}
