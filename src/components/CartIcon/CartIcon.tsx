import { CartIconContainer, CartLogo, ItemCount } from "./cart-icon.styled";
import { useSelector, useDispatch } from "react-redux";
import { setIsCartOpen } from "store/cart/cart.action";
import { selectCartCount, selectIsCartOpen } from "store/cart/cart.selector";

const CartIcon = () => {
    const cartCount = useSelector(selectCartCount);
    const isCartOpen = useSelector(selectIsCartOpen);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setIsCartOpen(!isCartOpen));
    };

    return (
        <CartIconContainer onClick={handleClick}>
            <CartLogo />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    );

};

export default CartIcon;