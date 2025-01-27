import { Link, Outlet } from "react-router";
import "./navigation.scss";
import CrwnLogo from "../../assets/crown.svg?react";
import { UserContext } from "contexts/UserContext";
import { useContext } from "react";
import { signOutUser } from "utils/firebase/firebase.utils";

const Navigation = () => {
    const { currentUser } = useContext(UserContext);

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
                </div>
            </div>

            <Outlet />
        </>
    )
}

export default Navigation;