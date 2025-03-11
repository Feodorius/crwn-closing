import { CartIconContainer, CartLogo, ItemCount } from "./cart-icon.styled";
import { useContext } from "react";
import { CartContext } from "contexts/CartContext";

const CartIcon = () => {
    const { setIsCartOpen, isCartOpen, cartCount } = useContext(CartContext);

    const handleClick = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <CartIconContainer onClick={handleClick}>
            <CartLogo />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    );

};

export default CartIcon;