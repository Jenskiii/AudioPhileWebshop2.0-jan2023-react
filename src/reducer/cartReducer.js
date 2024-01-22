export const ACTIONS = {
  ADD: "ADD",
  DELETE: "DELETE",
  CLEAR: "CLEAR",
  DUPLICATE: "DUPLICATE",
  INCREASE: "INCREASE",
  DECREASE: "DECREASE",
  REMOVEDUPLICATE: "REMOVEDUPLICATE",
};
export function cartReducer(cartItems, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD:
      // if product already exists will add up to amount
      const isDuplicate = cartItems.find(({ name }) => name === payload.name);
      if (isDuplicate) {
        return cartItems.map((currentElement) => {
          if (currentElement.name === payload.name) {
            let newAmount = currentElement.amount + payload.amount
            return {
              ...currentElement,
              amount: newAmount,
            };
          } else {
            return currentElement;
          }
        });
        // if not it will create a new product
      } else {
        return [
          ...cartItems,
          {
            id: payload.id,
            name: payload.name,
            price: payload.price,
            amount: payload.amount,
            image: payload.image,
          },
        ];
      }
    case ACTIONS.DELETE:
      return cartItems.filter((item) => item.id !== payload.id);

    case ACTIONS.CLEAR:
      return (cartItems = []);

    // counter
    case ACTIONS.INCREASE:
      return cartItems.map((item) => {
        if (item.id === payload.id) {
          return { ...item, amount: payload.amount + 1 };
        }
        return item;
      });

    case ACTIONS.DECREASE:
      return cartItems.map((item) => {
        if (item.id === payload.id) {
          return {
            ...item,
            amount: payload.amount > 1 ? payload.amount - 1 : 1,
          };
        }
        return item;
      });
    default:
      throw new Error(`No action found for ${type}.`);
  }
}
