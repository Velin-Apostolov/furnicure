import { createContext, useState } from "react";

export const CartContext = createContext();
CartContext.displayName = 'CartContext';

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item, purchaseQuantity) => {
        if (purchaseQuantity > item.quantity) {
            alert("Requested quantity exceeds available stock.");
            return;
        }
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((i) => i._id === item._id);
            if (existingItem) {
                if (existingItem.purchaseQuantity + purchaseQuantity > item.quantity) {
                    alert("Requested quantity exceeds available stock.");
                    return prevItems;
                }
                return prevItems.map((i) =>
                    i._id === item._id ? { ...i, purchaseQuantity: i.purchaseQuantity + purchaseQuantity } : i);
            }
            return [...prevItems, { ...item, purchaseQuantity }];
        });
    }
    return (
        <CartContext.Provider value={{ cartItems, setCartItems, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;