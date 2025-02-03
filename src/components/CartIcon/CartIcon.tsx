import "./CartIcon.scss";
import CartLogo from "../../assets/shopping-bag.svg?react";
import { useContext } from "react";
import { CartContext } from "contexts/CartContext";

const CartIcon = () => {
    const { setIsCartOpen, isCartOpen } = useContext(CartContext);

    const handleClick = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <div className="cart-icon-container" onClick={handleClick}>
            <CartLogo className="shopping-icon" />
            <span className="item-count">0</span>
        </div>
    );

};

export default CartIcon;