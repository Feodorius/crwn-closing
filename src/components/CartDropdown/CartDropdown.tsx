import CustomButton from "components/CustomButton/CustomButton";
import "./CartDropdown.scss";

const CartDropDown = () => {
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items" />
            <CustomButton>
                GO TO CHECKOUT
            </CustomButton>
        </div>
    );
};


export default CartDropDown;