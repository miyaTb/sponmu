import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "しぼりたて生乳ヨーグルト",
            price: 298,
            taxIncludedPrice: 322,
            quantity: 1
        },
        {
            id: 2,
            name: "牧場の朝ミルク",
            price: 178,
            taxIncludedPrice: 192,
            quantity: 2
        }
    ]);

    const handleQuantityChange = (id, newQuantity) => {
        if (newQuantity < 1) return;
        setCartItems(items =>
            items.map(item =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const handleRemoveItem = (id) => {
        setCartItems(items => items.filter(item => item.id !== id));
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + (item.taxIncludedPrice * item.quantity), 0);
    };

    const calculateSubtotal = () => {
        return cartItems.reduce((total, item) => total + (item.taxIncludedPrice * item.quantity), 0);
    };

    const value = {
        cartItems,
        handleQuantityChange,
        handleRemoveItem,
        calculateTotal,
        calculateSubtotal
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};