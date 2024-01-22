import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { CompanyMission } from "../components/CompanyMission/CompanyMission";
import styles from "./RootLayout.module.css";
import { useEffect, useReducer, useState } from "react";
import { CartContext } from "../context/CartContext";
import { ACTIONS, cartReducer } from "../reducer/cartReducer";
import { Modal } from "../components/Modal/Modal";

const LOCAL_STORAGE_KEY = "CARTITEMS";

export function RootLayout() {
  // used to show/hide component based on page
  const checkoutPage = "http://localhost:5173/checkout";
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState();
  // updates page url
  useEffect(() => {
    if (currentPage !== location) setCurrentPage(window.location.href);
  }, [location]);

  // ////
  // CART
  const [cartItems, dispatch] = useReducer(cartReducer, [], (initialValue) => {
    const value = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (value == null) return initialValue;
    return JSON.parse(value);
  });
  // update local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  // gets cart total
  const getCartTotal = (extra = 0) => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.amount,
      extra
    );
  };

  // gets cart total items
  const getCartTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.amount, 0);
  };

  //cart functions
  function addNewCartItem(id, name, price, amount, image) {
    dispatch({
      type: ACTIONS.ADD,
      payload: { id, name, price, amount, image },
    });
  }

  function deleteCartItem(cartItemId) {
    dispatch({ type: ACTIONS.DELETE, payload: { id: cartItemId } });
  }

  function clearCart() {
    dispatch({ type: ACTIONS.CLEAR });
  }

  function increaseCartAmount(cartItemId, amount) {
    dispatch({
      type: ACTIONS.INCREASE,
      payload: { id: cartItemId, amount },
    });
  }
  function decreaseCartAmount(cartItemId, amount) {
    dispatch({ type: ACTIONS.DECREASE, payload: { id: cartItemId, amount } });
  }

  // values toggle cart and modal
  const [hamburgerMenu, toggleHamburgerMenu] = useState(false);
  const [cartMenu, toggleCartMenu] = useState(false);
  return (
    <>
      <Modal
        hamburgerMenu={hamburgerMenu}
        toggleHamburgerMenu={toggleHamburgerMenu}
        toggleCartMenu={toggleCartMenu}
        cartMenu={cartMenu}
        className={styles.modal}
      />
      <CartContext.Provider
        value={{
          cartItems,
          getCartTotal,
          getCartTotalItems,
          addNewCartItem,
          deleteCartItem,
          clearCart,
          increaseCartAmount,
          decreaseCartAmount,
        }}
      >
        {/* header */}
        <Header
          hamburgerMenu={hamburgerMenu}
          toggleHamburgerMenu={toggleHamburgerMenu}
          cartMenu={cartMenu}
          toggleCartMenu={toggleCartMenu}
        />
        <ScrollRestoration />

        {/* body */}
        <div className={styles.layout}>
          <Outlet />
        </div>

        {/* hides mission on checkout page */}
        {currentPage !== checkoutPage && <CompanyMission />}
        {/* footer */}
        <Footer />
      </CartContext.Provider>
    </>
  );
}
