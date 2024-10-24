import React, { createContext, useState } from 'react';

// Create the CartContext
export const CartContext = createContext();

// Create the CartProvider component to manage cart state
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Add item to cart or increase quantity if it already exists
    const addToCart = (item) => {
        setCartItems((prevItems) => {
            const itemExists = prevItems.find(cartItem => cartItem.name === item.name);
            if (itemExists) {
                // Increment the quantity of the existing item
                return prevItems.map(cartItem =>
                    cartItem.name === item.name
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            }
            // Add new item with quantity of 1 if not already in the cart
            return [...prevItems, { ...item, quantity: 1 }];
        });
    };

    // Increment the quantity of an item
    const incrementItem = (item) => {
        setCartItems((prevItems) =>
            prevItems.map(cartItem =>
                cartItem.name === item.name
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
            )
        );
    };

    // Decrement the quantity of an item, and prompt user to confirm removal if quantity becomes 0
    const decrementItem = (item) => {
        setCartItems((prevItems) => {
            return prevItems.map(cartItem => {
                if (cartItem.name === item.name) {
                    if (cartItem.quantity > 1) {
                        // Decrement the quantity if it's greater than 1
                        return { ...cartItem, quantity: cartItem.quantity - 1 };
                    } else {
                        // Show confirmation dialog if quantity reaches 0
                        const confirmRemove = window.confirm("Do you want to remove this item from the cart?");
                        if (confirmRemove) {
                            // Filter out the item if user confirms removal
                            return null; 
                        } else {
                            // Keep the item if user cancels removal
                            return cartItem;
                        }
                    }
                }
                return cartItem;
            }).filter(Boolean); // Filter out null values to remove the item
        });
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, incrementItem, decrementItem }}>
            {children}
        </CartContext.Provider>
    );
};
