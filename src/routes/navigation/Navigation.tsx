import { Outlet } from "react-router";
import CrwnLogo from "../../assets/crown.svg?react";
import { signOutUser } from "utils/firebase/firebase.utils";
import CartIcon from "components/CartIcon/CartIcon";
import CartDropDown from "components/CartDropdown/CartDropdown";
import { NavigationContainer, LogoContainer, NavLinks, NavLink } from "./navigation.styles";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "store/user/user.selector";
import { selectIsCartOpen } from "store/cart/cart.selector";

const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);

    return (
        <>
            <NavigationContainer>
                <LogoContainer className="logo-container" to="/">
                    <CrwnLogo className="logo" />
                </LogoContainer>
                <NavLinks>
                    <NavLink to="/shop" >
                        SHOP
                    </NavLink>
                    {currentUser ? (
                        <NavLink as="span" onClick={signOutUser}>SIGN OUT</NavLink>
                    ) : (
                        <NavLink to="/auth" >
                            SIGN IN
                        </NavLink>
                    )}
                    <CartIcon />
                </NavLinks>
                {isCartOpen && (
                    <CartDropDown />
                )}
            </NavigationContainer>
            <Outlet />
        </>
    )
}

export default Navigation;