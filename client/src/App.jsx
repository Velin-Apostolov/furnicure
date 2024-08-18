import MainLayout from "./layouts/MainLayout"
import Home from "./components/User/Home/Home";
import { Route, Routes } from 'react-router-dom';
import ProductsPage from "./components/User/Products/ProductsPage";
import Wishlist from "./components/User/Wishlist/Wishlist";
import Cart from "./components/User/Cart/Cart";
import Register from "./components/User/auth/Register";
import Login from "./components/User/auth/Login";
import Profile from "./components/User/Profile/Profile";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </MainLayout>
  )
}

export default App
