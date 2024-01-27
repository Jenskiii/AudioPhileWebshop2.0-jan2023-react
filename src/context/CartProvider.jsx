import { createContext, useEffect,useReducer } from "react";
import { cartReducer } from "../reducer/cartReducer";
// context
export const CartContext = createContext(null);
// localstorage key
const LOCAL_STORAGE_KEY = "CARTITEMS";
// cartprovider
export function CartProvider({ children }) {

  // cart item
  const [cartItems, dispatch] = useReducer(cartReducer, [], (initialValue) => {
    const value = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (value == null) return initialValue;
    return JSON.parse(value);
  });
  // update local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  // gets cart total price
  const getCartTotalPrice = (extra = 0) => {
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
  return (
    <>
      <CartContext.Provider
        value={{
          cartItems,
          getCartTotalPrice,
          getCartTotalItems,
          addNewCartItem,
          deleteCartItem,
          clearCart,
          increaseCartAmount,
          decreaseCartAmount,
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
}
