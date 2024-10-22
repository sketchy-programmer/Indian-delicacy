const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");

const app = express();
app.use(cors());

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
    console.log("Server is running on port 5000");
    connectToDatabase(); // Call the function to connect to the database
});

// Fetch data from the 'cusins' collection
app.get('/api/indian_cousins/GetNotes', async (request, response) => {
    try {
        // Ensure the database connection is established
        if (!database) {
            return response.status(500).send("Database connection not established");
        }

        const result = await database.collection("cusins").find({}).toArray(); // Use await for async operation
        response.status(200).send(result); // Send the result with a 200 status code
    } catch (error) {
        console.error("Error fetching data:", error);
        response.status(500).send("Error fetching data"); // Handle errors
    }
});
