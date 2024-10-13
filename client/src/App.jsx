import MainLayout from "./layouts/MainLayout"
import AuthLayout from "./layouts/AuthLayout";
import Home from "./components/User/Home/Home";
import { Route, Routes } from 'react-router-dom';
import ProductsPage from "./components/User/Products/ProductsPage";
import CartPage from "./components/User/Cart/CartPage";
import Register from "./components/User/auth/Register/Register";
import Login from "./components/User/auth/Login/Login";
import Profile from "./components/User/Profile/Profile";
import AdminLogin from "./components/Admin/AdminLogin/AdminLogin";
import AdminDashboard from "./components/Admin/AdminDashboard/AdminDashboard";
import AdminProductForm from "./components/Admin/AdminProductForm/AdminProductForm";
import { useLocation } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import CartProvider from "./contexts/CartContext";
import Product from "./components/User/Products/Product/Product";
import PurchasePage from "./components/User/PurchasePage/PurchasePage";
import SuccessPage from "./components/User/PurchasePage/SuccessPage";

function App() {
  const location = useLocation();

  const isAuthRoute = location.pathname.startsWith('/admin');

  return (
    <>
      <AuthProvider>
        <CartProvider>
          {isAuthRoute ? (
            <AuthLayout>
              <Routes>
                <Route path="/admin" element={<AdminLogin />} />
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/admin/products/add" element={<AdminProductForm />} />
              </Routes>
            </AuthLayout>
          ) : (
            <MainLayout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/product/:productId" element={<Product />} />
                <Route path="/checkout" element={<PurchasePage />} />
                <Route path="/checkout-success" element={<SuccessPage />} />
              </Routes>
            </MainLayout>
          )}
        </CartProvider>
      </AuthProvider>
    </>
  )
}

export default App