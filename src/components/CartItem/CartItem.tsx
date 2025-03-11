import { memo } from "react";
import { CartItemContainer, CartItemImage, ItemDetails, ItemName } from "./cart-item.styled";

const CartItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <CartItemContainer>
            <CartItemImage src={imageUrl} alt={name} />
            <ItemDetails>
                <ItemName>{name}</ItemName>
                <span className="price">{quantity} x ${price}</span>
            </ItemDetails>
        </CartItemContainer>
    );
};

export default memo(CartItem);