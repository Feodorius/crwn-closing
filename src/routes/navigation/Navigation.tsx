import { Link, Outlet } from "react-router";
import "./navigation.scss";
import CrwnLogo from "../../assets/crown.svg?react";
import { UserContext } from "contexts/UserContext";
import { useContext } from "react";
import { signOutUser } from "utils/firebase/firebase.utils";
import CartIcon from "components/CartIcon/CartIcon";
import CartDropDown from "components/CartDropdown/CartDropdown";
import { CartContext } from "contexts/CartContext";

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    return (
        <>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <CrwnLogo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link to="/shop" className="nav-link">
                        SHOP
                    </Link>
                    {currentUser ? (
                        <div className="nav-link" onClick={signOutUser}>SIGN OUT</div>
                    ) : (
                        <Link to="/auth" className="nav-link">
                            SIGN IN
                        </Link>
                    )}
                    <CartIcon />
                </div>
                {isCartOpen && (
                    <CartDropDown />
                )}
            </div>

            <Outlet />
        </>
    )
}

export default Navigation;