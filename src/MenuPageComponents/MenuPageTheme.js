import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../MenuPageCSS/MenuPageTheme.module.css';

function MenuPageTheme() {
    const [menuItems, setMenuItems] = useState([]); // State to hold menu items
    const [loading, setLoading] = useState(true); // State for loading status
    const [error, setError] = useState(null); // State for error handling

    useEffect(() => {
        const fetchMenuItems = async () => {
            try {
                const response = await axios.get('http://localhost:5038/api/indian_cousins/GetNotes');
                setMenuItems(response.data); // Set the fetched data to state
                setLoading(false); // Set loading to false after data is fetched
            } catch (error) {
                console.error("Error fetching data:", error);
                setError(error); // Set error state if there's an issue
                setLoading(false); // Set loading to false in case of error
            }
        };

        fetchMenuItems(); // Call the fetch function
    }, []); // Empty dependency array to run only once on mount

    return (
        <div className={styles.container}>
            <div className={styles.menutxt}>
                <h3>Order & Enjoy</h3>
                <h1>Our Menu</h1>
            </div>
            <div>
                {loading ? ( // Show loading message while data is being fetched
                    <p>Loading...</p>
                ) : error ? ( // Show error message if there's an error
                    <p>Error fetching data: {error.message}</p>
                ) : (
                    menuItems.map((item) => ( // Map through menu items and display them
                        <div key={item._id} className={styles.menuItem}>
                            <p>Item Name: {item.name}</p> {/* Display item name */}
                            <p>Price: ${item.price}</p> {/* Display item price */}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default MenuPageTheme;
