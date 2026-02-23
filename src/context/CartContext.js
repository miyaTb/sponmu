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
    const [cartItems, setCartItems] = useState([]);

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

    const addToCart = (product, quantity = 1) => {
        setCartItems(items => {
            const existingItem = items.find(item => item.id === product.id);
            if (existingItem) {
                return items.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }
            return [...items, {
                id: product.id,
                name: product.name,
                englishName: product.englishName,
                price: product.price,
                taxIncludedPrice: product.price,
                imageUrl: product.imageUrl,
                quantity: quantity
            }];
        });
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + (item.taxIncludedPrice * item.quantity), 0);
    };

    const calculateSubtotal = () => {
        return cartItems.reduce((total, item) => total + (item.taxIncludedPrice * item.quantity), 0);
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const value = {
        cartItems,
        handleQuantityChange,
        handleRemoveItem,
        addToCart,
        calculateTotal,
        calculateSubtotal,
        clearCart
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};