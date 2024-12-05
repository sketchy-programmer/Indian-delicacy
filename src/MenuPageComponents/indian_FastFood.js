import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { CartContext } from '../Cart/CartContext';
import styles from '../MenuPageCSS/MenuItem.module.css';
const IndianFastFood = () => {
    const [indianFastFood, setIndianFastFood] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const {addToCart} = useContext(CartContext);

    useEffect(() => {
        const fetchIndianFastFood = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/indian_cousins/GetIndianFastFood');
                setIndianFastFood(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setError(error);
                setLoading(false);
            }
        }
        fetchIndianFastFood();
    }, []);
    return (
        <>
            <div className={styles.menuItemGrid}>
                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p>Error fecting data: {error.message}</p>
                ) : (
                    indianFastFood.map((item) => (
                        <div key={item._id} className={styles.menuItem}>
                            <div>
                                {/*check if img_src is defined*/}
                                {item.img_src ? (
                                    <img 
                                        src={require(`../assets/IndianFastFoodAssets/${item.img_src}`)}
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

export default IndianFastFood;