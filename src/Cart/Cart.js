import React, { useContext } from 'react';
import { CartContext } from '../Cart/CartContext'; // Import the CartContext
import styles from '../CartCss/Cart.module.css';

const Cart = () => {
    const { cartItems, incrementItem, decrementItem } = useContext(CartContext); // Get cartItems and functions from the context

    // Calculate the total price before tax
    const totalBeforeTax = cartItems.reduce((total, item) => total + parseFloat(item.price || 0) * item.quantity, 0);

    // Tax rate (13%)
    const taxRate = 0.13;

    // Calculate the tax amount
    const taxAmount = totalBeforeTax * taxRate;

    // Calculate the total price after tax
    const totalAfterTax = totalBeforeTax + taxAmount;

    return (
        <>
            <div className={styles.container}>
                <h1>Your Cart</h1>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    <div className={styles.cardOuter}>
                        {cartItems.map((item, index) => (
                            <div key={index} className={styles.card}>
                                {item.img_src ? (
                                    <img 
                                        src={require(`../assets/MenuPageAssets/${item.img_src}`)} 
                                        alt={item.name} 
                                        className={styles.menuItemImage} 
                                    />
                                ) : (
                                    <p>No image available</p>
                                )}
                                <h2>{item.name}</h2>
                                <h3>Price: ${parseFloat(item.price).toFixed(2)}</h3>
                                <div className={styles.quantityControl}>
                                    <button className={styles.increment} onClick={() => incrementItem(item)}>+</button>
                                    <p className={styles.itemAmount}>{item.quantity}</p> {/* Display the quantity */}
                                    <button className={styles.decrement} onClick={() => decrementItem(item)}>-</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                {/* Total Calculation */}
                {cartItems.length > 0 && (
                    <div className={styles.bill}>
                        <h1>Bill</h1>
                        <div className={styles.total}>
                            <p>Total Before Tax: ${totalBeforeTax.toFixed(2)}</p>
                            <p>Tax (13%): ${taxAmount.toFixed(2)}</p>
                            <p>Total After Tax: ${totalAfterTax.toFixed(2)}</p>
                            <button className={styles.checkoutButton}>Check Out</button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Cart;
