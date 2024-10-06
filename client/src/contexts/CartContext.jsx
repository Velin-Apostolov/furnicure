import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();
CartContext.displayName = 'CartContext';

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (item, purchaseQuantity) => {
        if (purchaseQuantity > item.quantity) {
            alert("Requested quantity exceeds available stock.");
            return;
        }
        const updatedCart = [...cart];
        const existingItemIndex = updatedCart.findIndex(i => i._id === item._id);
        if (existingItemIndex >= 0) {
            updatedCart[existingItemIndex].purchaseQuantity += purchaseQuantity;
        } else {
            updatedCart.push({ ...item, purchaseQuantity });
        }
        setCart(updatedCart);
    }

    const totalItems = () => {
        return cart.reduce((totalItemsQuantity, item) => totalItemsQuantity + item.purchaseQuantity, 0);
    }
    return (
        <CartContext.Provider value={{ cart, addToCart, totalItems }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;