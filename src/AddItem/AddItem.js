import React, { useState } from 'react';
import axios from 'axios';
import styles from '../AddItemcss/AddItem.module.css';

const AddItem = () => {
    const [itemName, setItemName] = useState('');
    const [itemPrice, setItemPrice] = useState('');
    const [itemImg_src, setItemImg_src] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Create an object to send the item name, price, and image source
        const newItem = {
            name: itemName,
            price: parseFloat(itemPrice), // Convert price to float
            img_src: itemImg_src // Include the image source
        };

        try {
            const response = await axios.post('http://localhost:5038/api/indian_cousins/AddNotes', newItem, {
                headers: {
                    'Content-Type': 'application/json' // Set content type to JSON
                },
            });
            console.log("Item added successfully:", response.data);

            // Display success message using alert
            alert("Item added successfully!");

            // Reset the form fields
            setItemName('');
            setItemPrice('');
            setItemImg_src('');
        } catch (error) {
            console.error("Error adding item:", error);
            // Optionally show an error message
            alert("Failed to add item. Please try again.");
        }
    };

    return (
        <>
            <div className={styles.container}>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name of the item</label><br />
                        <input
                            type="text"
                            value={itemName}
                            onChange={(e) => setItemName(e.target.value)} // Update item name
                            placeholder='Enter the name of the item'
                            required
                        />
                    </div>
                    <div>
                        <label>Price of the item</label><br />
                        <input
                            type='number'
                            value={itemPrice}
                            onChange={(e) => setItemPrice(e.target.value)} // Update item price
                            placeholder='Enter the price of the item'
                            required
                        />
                    </div>
                    <div>
                        <label>Image Source (File Name with Extension)</label><br />
                        <input
                            type='text'
                            value={itemImg_src}
                            onChange={(e) => setItemImg_src(e.target.value)} // Update image source
                            placeholder="Enter the name of the file with the extension"
                            required
                        />
                    </div>
                    <button type="submit">Add Item</button>
                </form>
            </div>
            <div className={styles.background}>
                {/* You can add a background element if needed */}
            </div>
        </>
    );
}

export default AddItem;
