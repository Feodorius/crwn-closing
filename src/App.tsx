import Home from "routes/home/Home"
import { Routes, Route } from "react-router-dom";
import Navigation from "routes/navigation/Navigation";
import SignIn from "components/Authentication/Authentication";
import Shop from "routes/shop/Shop";
import Checkout from "routes/checkout/Checkout";

const App = () => {
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
