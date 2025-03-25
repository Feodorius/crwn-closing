import CustomButton from "components/CustomButton/CustomButton";
import CartItem from "components/CartItem/CartItem";
import { useNavigate } from "react-router-dom";
import { BUTTON_TYPE_CLASSES } from "../../constants";
import { CartDropdownContainer, CartItems, EmptyMessage } from "./CartDropdown.styled";
import { useSelector } from "react-redux";
import { selectCartItems } from "store/cart/cart.selector";

const CartDropDown = () => {
    const navigate = useNavigate();
    const cartItems = useSelector(selectCartItems);

    const goToCheckout = () => {
        navigate("/checkout");
    };

    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length ? cartItems.map(item => (
                    <CartItem cartItem={item} key={item.id} />
                )) : (
                    <EmptyMessage>Your cart is empty </EmptyMessage>
                )}
            </CartItems>
            <CustomButton buttonType={BUTTON_TYPE_CLASSES.base} onClick={goToCheckout}>
                GO TO CHECKOUT
            </CustomButton>
        </CartDropdownContainer>
    );
};


export default CartDropDown;