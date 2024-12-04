const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");
const multer = require('multer'); // Use multer for parsing form data

const app = express();
app.use(cors());
app.use(express.json()); // Add middleware to parse JSON bodies

const CONNECTION_STRING = "mongodb+srv://paramvirsingh2002004:id2D5MsHGgv52WsM@indian-delicacy.rvntr.mongodb.net/?retryWrites=true&w=majority&appName=Indian-delicacy";
const DATABASE_NAME = "indian_cousins"; 
let database;

// Use async function to handle connection
async function connectToDatabase() {
    try {
        const client = await MongoClient.connect(CONNECTION_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        
        database = client.db(DATABASE_NAME); 
        console.log("MongoDB is connected successfully");
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
    }
}

// Start the server and connect to MongoDB
app.listen(5038, () => {
    console.log("Server is running on port 5038");
    connectToDatabase(); // Call the function to connect to the database
});

//Fetch all items
app.get('/api/indian_cousins/GetAllItems', async (req, res) => {
    try {
        // Ensure the database connection is established
        if (!database) {
            return res.status(500).send("Database connection not established");
        }

        const resultCusins = await database.collection("cusins").find({}).toArray();
        const resultSideDishes = await database.collection("SideDishes").find({}).toArray();
        const resultIndianFastFood = await database.collection("IndianFastFood").find({}).toArray();
        const resultDrinks = await database.collection("Drinks").find({}).toArray();
        const result = [...resultCusins, ...resultSideDishes, ...resultIndianFastFood, ...resultDrinks];
        res.status(200).send(result);

    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("Error fetching data"); // Handle errors
    }
});

// Fetch data from the 'cusins' collection
app.get('/api/indian_cousins/GetCuisins', async (req, res) => {
    try {
        // Ensure the database connection is established
        if (!database) {
            return res.status(500).send("Database connection not established");
        }

        const result = await database.collection("cusins").find({}).toArray(); // Use await for async operation
        res.status(200).send(result); // Send the result with a 200 status code
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("Error fetching data"); // Handle errors
    }
});

// Add new item (with image source) to the 'cusins' collection
app.post('/api/indian_cousins/AddNotes', async (req, res) => {
    const { name, price, img_src } = req.body; // Get name, price, and img_src from the request body

    try {
        if (!name || !price || !img_src) {
            return res.status(400).send("Name, price, and image source are required"); // Handle missing fields
        }

        const newItem = { name, price: parseFloat(price), img_src }; // Create a new item object
        const result = await database.collection('cusins').insertOne(newItem);
        res.status(201).send(result); // Respond with the created item
    } catch (error) {
        console.error("Error adding item:", error);
        res.status(500).send("Error adding item");
    }
});

// Fetch data from the 'SideDishes' collection
app.get('/api/indian_cousins/GetSideDishes', async (req, res) => {
    try {
        if (!database) {
            return res.status(500).send("Database connection not established");
        }
        
        const result = await database.collection("SideDishes").find({}).toArray();
        res.status(200).send(result);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("Error fetching data");
    }
});

// Add new item (with image source) to the 'SideDishes' collection
app.post('/api/indian_cousins/AddSideDishes', async (req, res) => {
    const { name, price, img_src } = req.body; // Get name, price, and img_src from the request body

    try {
        if (!name || !price || !img_src) {
            return res.status(400).send("Name, price, and image source are required"); // Handle missing fields
        }

        const newItem = { name, price: parseFloat(price), img_src }; // Create a new item object
        const result = await database.collection('SideDishes').insertOne(newItem);
        res.status(201).send(result); // Respond with the created item
    } catch (error) {
        console.error("Error adding item:", error);
        res.status(500).send("Error adding item");
    }
});

// Fetch data from the 'IndianFastFood' collection
app.get('/api/indian_cousins/GetIndianFastFood', async (req, res) => {
    try {
        if (!database) {
            return res.status(500).send("Database connection not established");
        }

        const result = await database.collection("IndianFastFood").find({}).toArray();
        res.status(200).send(result);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("Error fetching data");
    }
})

// Add new item (with image source) to the 'IndianFastFood' collection
app.post('/api/indian_cousins/AddIndianFastFood', async (req, res) => {
    const { name, price, img_src } = req.body;

    try {
        if (!name || !price || !img_src) {
            return res.status(400).send("Name, price, and image source are required");  
        }

        const newItem = { name, price: parseFloat(price), img_src };
        const result = await database.collection('IndianFastFood').insertOne(newItem);
        res.status(201).send(result);
    } catch (error) {
        console.error("Error adding item:", error);
        res.status(500).send("Error adding item");
    }
})


// Fetch data from the 'Drinks' collection
app.get('/api/indian_cousins/GetDrinks', async (req, res) => {
    try {
        if (!database) {
            return res.status(500).send("Database connection not established");
        }

        const result = await database.collection("Drinks").find({}).toArray();
        res.status(200).send(result);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("Error fetching data");
    }
})

// Add new item (with image source) to the 'Drinks' collection
app.post('/api/indian_cousins/AddDrinks', async (req, res) => {
    const { name, price, img_src } = req.body;

    try {
        if (!name || !price || !img_src) {
            return res.status(400).send("Name, price, and image source are required");
        }

        const newItem = { name, price: parseFloat(price), img_src };
        const result = await database.collection('Drinks').insertOne(newItem);
        res.status(201).send(result);
    } catch (error) {
        console.error("Error adding item:", error);
        res.status(500).send("Error adding item");
    }
})

