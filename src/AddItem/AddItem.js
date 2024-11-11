import React, { useState } from 'react';
import axios from 'axios';
import styles from '../AddItemcss/AddItem.module.css';

const AddItem = () => {
    const [itemName, setItemName] = useState('');
    const [itemPrice, setItemPrice] = useState('');
    const [itemImg_src, setItemImg_src] = useState('');
    const [foodCategory, setFoodCategory] = useState('Cuisins'); // New state for food category

    const handleSubmit = async (event) => {
        event.preventDefault();

        const newItem = {
            name: itemName,
            price: parseFloat(itemPrice),
            img_src: itemImg_src,
        };

        // Determine the correct endpoint for adding the item based on the selected food category
        const endPoint = foodCategory === 'Cuisins' 
            ? 'http://localhost:5038/api/indian_cousins/AddNotes' 
            : foodCategory === 'Side Dishes'
            ? 'http://localhost:5038/api/indian_cousins/AddSideDishes'
            : null;

        if (!endPoint) {
            alert("Selected category is not supported for adding items.");
            return;
        }

        try {
            const response = await axios.post(endPoint, newItem, {
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            console.log("Item added successfully:", response.data);
            alert("Item added successfully!");

            // Reset the form fields
            setItemName('');
            setItemPrice('');
            setItemImg_src('');
            setFoodCategory('Cuisins'); // Reset the category to default
        } catch (error) {
            console.error("Error adding item:", error);
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
                            onChange={(e) => setItemName(e.target.value)}
                            placeholder="Enter the name of the item"
                            required
                        />
                    </div>
                    <div>
                        <label>Price of the item</label><br />
                        <input
                            type="number"
                            value={itemPrice}
                            onChange={(e) => setItemPrice(e.target.value)}
                            placeholder="Enter the price of the item"
                            required
                        />
                    </div>
                    <div>
                        <label>Image Source</label><br />
                        <input
                            type="text"
                            value={itemImg_src}
                            onChange={(e) => setItemImg_src(e.target.value)}
                            placeholder="Enter the name of the file with the extension"
                            required
                        />
                    </div>
                    <div>
                        <label>Food Category</label><br />
                        <select
                            value={foodCategory}
                            onChange={(e) => setFoodCategory(e.target.value)}
                        >
                            <option value="Cuisins">Cuisins</option>
                            <option value="Side Dishes">Side Dishes</option>
                            <option value="Drinks">Drinks</option>
                            <option value="Indian Fast Food">Indian Fast Food</option>
                        </select>
                    </div>
                    <button type="submit">Add Item</button>
                </form>
            </div>
            <div className={styles.background} />
        </>
    );
};

export default AddItem;
