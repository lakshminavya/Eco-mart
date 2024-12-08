
import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item, quantity) => {
        setCart(prev => {
            const existingItemIndex = prev.findIndex(cartItem => cartItem.pid === item.pid);
            if (existingItemIndex !== -1) {
                // Update quantity of existing item
                const updatedCart = [...prev];
                updatedCart[existingItemIndex].quantity = quantity; // Set to latest quantity
                return updatedCart;
            } else {
                // Add new item
                return [...prev, { ...item, quantity }];
            }
        });
    };

    const totalAmount = cart.reduce((sum, item) => sum + item.pcost * item.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, totalAmount }}>
            {children}
        </CartContext.Provider>
    );
};





















