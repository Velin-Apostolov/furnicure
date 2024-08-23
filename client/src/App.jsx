import MainLayout from "./layouts/MainLayout"
import AuthLayout from "./layouts/AuthLayout";
import Home from "./components/User/Home/Home";
import { Route, Routes } from 'react-router-dom';
import ProductsPage from "./components/User/Products/ProductsPage";
import Wishlist from "./components/User/Wishlist/Wishlist";
import Cart from "./components/User/Cart/Cart";
import Register from "./components/User/auth/Register/Register";
import Login from "./components/User/auth/Login/Login";
import Profile from "./components/User/Profile/Profile";
import AdminLogin from "./components/Admin/Login/AdminLogin";
import { useLocation } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  const location = useLocation();

  const isAuthRoute = location.pathname.startsWith('/admin');

  return (
    <>
      <AuthProvider>
        {isAuthRoute ? (
          <AuthLayout>
            <Routes>
              <Route path="/admin" element={<AdminLogin />} />
            </Routes>
          </AuthLayout>
        ) : (
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
        )}
      </AuthProvider>
    </>
  )
}

export default App