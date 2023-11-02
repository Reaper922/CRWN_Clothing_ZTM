import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import {
  Name,
  Quantity,
  Price,
  Arrow,
  Value,
  CheckoutItemContainer,
  ImageContainer,
  RemoveButton,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const addItemHandler = () => {
    addItemToCart(cartItem);
  };
  const removeItemHandler = () => {
    removeItemFromCart(cartItem);
  };
  const clearItemHandler = () => clearItemFromCart(cartItem);

  return (
    <CheckoutItemContainer className="checkout-item-container">
      <ImageContainer className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <Name className="name">{name}</Name>
      <Quantity className="quantity">
        <Arrow className="arrow" onClick={removeItemHandler}>
          &#10094;
        </Arrow>
        <Value className="value">{quantity}</Value>
        <Arrow className="arrow" onClick={addItemHandler}>
          &#10095;
        </Arrow>
      </Quantity>
      <Price className="price">{price} €</Price>
      <RemoveButton className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
