import { useContext } from "react";
import { CartContext } from "../context/CartProvider";


export function useCart() {
  const value = useContext(CartContext);

  if (value == null) {
    throw new Error("useToast has to be within <CartProvider>");
  }

  return value;
}