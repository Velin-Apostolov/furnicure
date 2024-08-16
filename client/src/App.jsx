import MainLayout from "./layouts/MainLayout"
import Home from "./components/User/Home/Home";
import { Route, Routes } from 'react-router-dom';
import ProductsPage from "./components/User/Products/ProductsPage";
import Wishlist from "./components/User/Wishlist/Wishlist";
import Cart from "./components/User/Cart/Cart";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </MainLayout>
  )
}

export default App
