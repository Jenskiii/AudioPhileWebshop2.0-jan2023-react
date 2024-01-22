import { Link } from "react-router-dom";
import { Button, ReturnButton } from "../../components/Button/Button";
import { Form } from "../../components/Form/Form";
import { ModalWithContent } from "../../components/Modal/Modal";
import styles from "./Checkout.module.css";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { ProductDetails } from "../../components/ProductDetails/ProductDetails";

export function CheckOut() {
  const { cartItems, getCartTotal, getCartTotalItems, clearCart } =
    useContext(CartContext);

  // toggle endscreen
  const [toggleEndScreen, setEndScreen] = useState(false);
  // open close accordion end screen
  const [endScreenCartAccordion, setEndScreenCartAccordion] = useState(true);

  return (
    <>
      <section className={`${styles.checkout} container`}>
        <ReturnButton />
        {/* form */}
        <Form className={styles.form} setEndScreen={setEndScreen} />

        {/* if checked out show endscreen */}
        {toggleEndScreen && (
          <ModalWithContent className={styles.modal}>
            <div className={styles.modalContainer}>
              <img
                className={styles.img}
                src="/assets/checkout/icon-order-confirmation.svg"
                alt="checkbox that is checked"
              />
              {/* text */}
              <div className={styles.modalText}>
                <h3>
                  THANK YOU <br />
                  FOR YOUR ORDER
                </h3>
                <p>You will receive an email confirmation shortly.</p>
              </div>
              {/* card */}
              <div className={styles.card}>
                {/* product list */}
                <div className={styles.productList}>
                  {/* shows 1 product as default  */}
                  {/* onclick will show all the products*/}
                  {(endScreenCartAccordion
                    ? cartItems.slice(0, 1)
                    : cartItems.slice(0)
                  ).map((item) => {
                    return (
                      <ProductDetails
                        key={crypto.randomUUID()}
                        {...item}
                        small
                      />
                    );
                  })}

                  {cartItems.length > 1 && (
                    <p
                      className={styles.totalItems}
                      onClick={() => setEndScreenCartAccordion((prev) => !prev)}
                    >
                      {endScreenCartAccordion
                        ? ` and ${getCartTotalItems()} other item(s)`
                        : "View less"}
                    </p>
                  )}
                </div>
                {/* grand total */}
                <div className={styles.grandTotal}>
                  <div>
                    <p>GRAND TOTAL</p>
                    <h6>$ {getCartTotal()}</h6>
                  </div>
                </div>
              </div>

              <Button
                className={styles.button}
                // resets cart after end screen
                onClick={() => clearCart()}
                theme="accent"
                AsComponent={Link}
                to="../home"
              >
                Back to home
              </Button>
            </div>
          </ModalWithContent>
        )}
      </section>
    </>
  );
}
