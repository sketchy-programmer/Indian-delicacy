import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../AddItemcss/AddItem.module.css';

const AddItem = () => {
    const [itemName, setItemName] = useState('');
    const [itemPrice, setItemPrice] = useState('');
    const [itemImg_src, setItemImg_src] = useState('');
    const [foodCategory, setFoodCategory] = useState('Cuisins'); // New state for food category
    const [items, setItems] = useState([]);  // State to store all items
    const [isEditing, setIsEditing] = useState(false);
    const [currentItemId, setCurrentItemId] = useState(null);

    const fetchItems = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/indian_cousins/GetAllItems');
            setItems(response.data);
            console.log(response.data);
        } catch (error) {
            console.error("Error fetching items:", error);
        }
    };

    useEffect(() => {
        fetchItems();
    }, []);

    const handleEditClick = (item) => {
        setItemName(item.name);
        setItemPrice(item.price);
        setItemImg_src(item.img_src);
        setFoodCategory(item.category); // Assume each item has a 'category' field
        setCurrentItemId(item._id);
        setIsEditing(true);
    };

    // Handle deletion
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/indian_cousins/DeleteItem/${id}`);
            alert("Item deleted successfully!");
            fetchItems(); // Refresh the items list
        } catch (error) {
            console.error("Error deleting item:", error);
            alert("Failed to delete item.");
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const newItem = {
            name: itemName,
            price: parseFloat(itemPrice),
            img_src: itemImg_src,
            category: foodCategory, // Store category for easier updates
        };
    
        try {
            if (isEditing) {
                // Update the item
                await axios.put(`http://localhost:5000/api/indian_cousins/UpdateItem/${currentItemId}`, newItem);
                alert("Item updated successfully!");
                setIsEditing(false);
                setCurrentItemId(null);
            } else {
                // Add the item (existing logic)
                const endPoint = determineEndpoint(foodCategory);
                await axios.post(endPoint, newItem);
                alert("Item added successfully!");
            }
            fetchItems(); // Refresh the items list
            resetForm();  // Reset the form fields
        } catch (error) {
            console.error("Error saving item:", error);
            alert("Failed to save item. Please try again.");
        }
    };
    
    const resetForm = () => {
        setItemName('');
        setItemPrice('');
        setItemImg_src('');
        setFoodCategory('Cuisins');
    };
    
    const determineEndpoint = (category) => {
        switch (category) {
            case 'Cuisins': return 'http://localhost:5000/api/indian_cousins/AddNotes';
            case 'Side Dishes': return 'http://localhost:5000/api/indian_cousins/AddSideDishes';
            case 'Indian Fast Food': return 'http://localhost:5000/api/indian_cousins/AddIndianFastFood';
            case 'Drinks': return 'http://localhost:5000/api/indian_cousins/AddDrinks';
            default: return null;
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

            <div className={styles.AllItemsList}>
                <h2>All Items</h2>
                <table className={styles.itemTable}>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {items.map((item, index) => (
                        <tr key={index}>
                        <td>{item.name}</td>
                        <td>${item.price}</td>
                        <td>
                                    <button className={styles.editButton} onClick={() => handleEditClick(item)}>
                                        Edit
                                    </button>
                                    <button className={styles.deleteButton} onClick={() => handleDelete(item._id)}>
                                        Delete
                                    </button>
                                </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
        </>
    );
};

export default AddItem;
