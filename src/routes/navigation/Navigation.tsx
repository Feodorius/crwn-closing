import { Outlet } from "react-router";
import CrwnLogo from "../../assets/crown.svg?react";
import { UserContext } from "contexts/UserContext";
import { useContext } from "react";
import { signOutUser } from "utils/firebase/firebase.utils";
import CartIcon from "components/CartIcon/CartIcon";
import CartDropDown from "components/CartDropdown/CartDropdown";
import { CartContext } from "contexts/CartContext";
import { NavigationContainer, LogoContainer, NavLinks, NavLink } from "./navigation.styles";

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

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