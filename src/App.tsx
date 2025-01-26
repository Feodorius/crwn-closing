import Home from "routes/home/Home"
import { Routes, Route } from "react-router-dom";
import Navigation from "routes/navigation/Navigation";
import SignIn from "components/Authentication/Authentication";

const Shop = () => <h2>SHOP</h2>



const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<SignIn />} />
      </Route>

    </Routes>
  )
}

export default App;
