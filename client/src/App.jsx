import MainLayout from "./layouts/MainLayout"
import Home from "./components/Home/Home"
import { Route, Routes } from 'react-router-dom';
import ProductsPage from "./components/Products/ProductsPage";
import Wishlist from "./components/Wishlist/Wishlist";
import Cart from "./components/Cart/Cart";

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
