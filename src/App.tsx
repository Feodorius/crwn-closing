import Home from "routes/home/Home"
import { Routes, Route } from "react-router-dom";
import Navigation from "routes/navigation/Navigation";
import SignIn from "components/Authentication/Authentication";
import Shop from "routes/shop/Shop";
import Checkout from "routes/checkout/Checkout";
import { useEffect } from "react";
import { createUserDocFromAuth, onAuthStateChangedListener } from "utils/firebase/firebase.utils";
import { User } from "firebase/auth";
import { setCurrentUser } from "store/user/user.action";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user: User) => {
      if (user) {
        await createUserDocFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<SignIn />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>

    </Routes>
  )
}

export default App;
