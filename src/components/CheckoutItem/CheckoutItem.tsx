import { memo } from "react";
import "./CheckoutItem.scss";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, clearItemFromCart, removeItemFromCart } from "store/cart/cart.action";
import { selectCartItems } from "store/cart/cart.selector";
import { CartItem } from "utils/types";

type CartItemProps = {
    cartItem: CartItem
}

const CheckoutItem = ({ cartItem }: CartItemProps) => {
    const { imageUrl, name, price, quantity } = cartItem;
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const deleteItemFromCart = () => dispatch(clearItemFromCart(cartItems, cartItem));
    const increaseQuantity = () => dispatch(addItemToCart(cartItems, cartItem));
    const decreaseQuantity = () => dispatch(removeItemFromCart(cartItems, cartItem));


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