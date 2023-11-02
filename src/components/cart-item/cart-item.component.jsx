import { CartItemContainer, ItemDetails, Name } from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CartItemContainer className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails className="item-details">
        <Name className="name">{name}</Name>
        <span className="price">
          {quantity} x {price} €
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
