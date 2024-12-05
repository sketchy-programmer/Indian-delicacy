import React, {useEffect, useState, useContext} from 'react';
import axios from 'axios';
import styles from "../MenuPageCSS/MenuItem.module.css";
import {CartContext} from '../Cart/CartContext';

export const SideDishes = () => {
    const [sideDishes, setSideDishes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const {addToCart} = useContext(CartContext);

    useEffect(() => {
        const fetchSideDishes = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/indian_cousins/GetSideDishes');
                setSideDishes(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data: ", error);
                setError(error);
                setLoading(false);
            }
        };

        fetchSideDishes();
    }, []);

    return (
        <>
            <div className={styles.menuItemGrid}>
                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p>Error fecting data: {error.message}</p>
                ) : (
                    sideDishes.map((item) => (
                        <div key={item._id} className={styles.menuItem}>
                            <div>
                                {/*check if img_src is defined*/}
                                {item.img_src ? (
                                    <img 
                                        src={require(`../assets/MenuPageAssets/SideDishes/${item.img_src}`)}
                                        alt={item.name}
                                        className={styles.menuItemImage}>
                                    </img>
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
                )
                }
            </div>
        </>
    )
}