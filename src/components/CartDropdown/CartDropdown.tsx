import CustomButton from "components/CustomButton/CustomButton";
import "./CartDropdown.scss";
import CartItem from "components/CartItem/CartItem";
import { useContext } from "react";
import { CartContext } from "contexts/CartContext";

const CartDropDown = () => {
    const { cartItems } = useContext(CartContext);
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items" >
                {cartItems.map(item => (
                    <CartItem cartItem={item} key={item.id} />
                ))}
            </div>
            <CustomButton>
                GO TO CHECKOUT
            </CustomButton>
        </div>
    );
};


export default CartDropDown;