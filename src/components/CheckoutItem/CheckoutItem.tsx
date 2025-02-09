import { memo, useContext } from "react";
import "./CheckoutItem.scss";
import { CartContext, CartItem } from "contexts/CartContext";

type CartItemProps = {
    cartItem: CartItem
}

const CheckoutItem = ({ cartItem }: CartItemProps) => {
    const { imageUrl, name, price, quantity } = cartItem;
    const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext);

    const deleteItemFromCart = () => clearItemFromCart(cartItem);
    const increaseQuantity = () => addItemToCart(cartItem);
    const decreaseQuantity = () => removeItemFromCart(cartItem);


    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={name} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={decreaseQuantity}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={increaseQuantity}>&#10095;</div>
            </span >
            <span className="price">{price}</span>
            <div className="remove-button" onClick={deleteItemFromCart}>
                &#10005;
            </div>
        </div >
    );
};

export default memo(CheckoutItem);