import CustomButton from "components/CustomButton/CustomButton";
import "./CartDropdown.scss";
import CartItem from "components/CartItem/CartItem";
import { useContext } from "react";
import { CartContext } from "contexts/CartContext";
import { useNavigate } from "react-router-dom";

const CartDropDown = () => {
    const navigate = useNavigate();
    const { cartItems } = useContext(CartContext);

    const goToCheckout = () => {
        navigate("/checkout");
    };

    return (
        <div className="cart-dropdown-container">
            <div className="cart-items" >
                {cartItems.map(item => (
                    <CartItem cartItem={item} key={item.id} />
                ))}
            </div>
            <CustomButton onClick={goToCheckout}>
                GO TO CHECKOUT
            </CustomButton>
        </div>
    );
};


export default CartDropDown;