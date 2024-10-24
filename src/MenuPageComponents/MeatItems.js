import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import styles from "../MenuPageCSS/MenuItem.module.css";
import { CartContext } from '../Cart/CartContext'; // Import the CartContext

const MeatDishes = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { addToCart } = useContext(CartContext); // Use the addToCart function from context

    useEffect(() => {
        const fetchMenuItems = async () => {
            try {
                const response = await axios.get('http://localhost:5038/api/indian_cousins/GetNotes');
                setMenuItems(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setError(error);
                setLoading(false);
            }
        };

        fetchMenuItems();
    }, []);

    return (
        <>
            <div className={styles.menuItemGrid}>
                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p>Error fetching data: {error.message}</p>
                ) : (
                    menuItems.map((item) => (
                        <div key={item._id} className={styles.menuItem}>
                            <div>
                                {/* Check if img_src is defined */}
                                {item.img_src ? (
                                    <img 
                                        src={require(`../assets/MenuPageAssets/${item.img_src}`)} 
                                        alt={item.name} 
                                        className={styles.menuItemImage} 
                                    />
                                ) : (
                                    <p>No image available</p>
                                )}
                                <h1>{item.name}</h1>
                                <h2>${item.price}</h2>
                                <button 
                                    className={styles.add_to_cart} 
                                    onClick={() => addToCart(item)} // Add item to cart
                                >
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </>
    );
};

export default MeatDishes;
