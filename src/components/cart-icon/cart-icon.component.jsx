import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import {
  ShoppingIcon,
  CartIconContainer,
  ItemCount,
} from "./cart-icon.styles.jsx";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItemCount } = useContext(CartContext);
  const toogleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartIconContainer onClick={toogleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartItemCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
