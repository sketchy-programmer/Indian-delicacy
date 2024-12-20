const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");
const multer = require('multer'); // Use multer for parsing form data
const bcrypt = require('bcrypt'); // For password hashing
const jwt = require('jsonwebtoken'); // For generating tokens

const app = express();
app.use(cors());
app.use(express.json()); // Add middleware to parse JSON bodies

const CONNECTION_STRING = "mongodb+srv://Angrej:angrej12@indian-delicacy.rvntr.mongodb.net/?retryWrites=true&w=majority&appName=Indian-delicacy";
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
app.listen(5000, () => {
    console.log("Server is running on port 5038");
    connectToDatabase(); // Call the function to connect to the database
});

// Middleware to check for admin role
const isAdmin = (req, res, next) => {
    const { role } = req.headers;  // Assume the role is sent in the header
    if (role !== 'Admin') {
        return res.status(403).send({ message: "Access denied. Admins only." });
    }
    next();
};

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

/*// Register a new user or admin
app.post('/api/indian_cousins/AddUser', async (req, res) => {
    const { userFirstName, userLastName, userEmail, userPassword, role } = req.body; // Added 'role'

    try {
        if (!userFirstName || !userLastName || !userEmail || !userPassword || !role) {
            return res.status(400).send("All fields are required, including role.");
        }

        const newUser = { 
            firstName: userFirstName, 
            lastName: userLastName, 
            email: userEmail, 
            password: userPassword,
            role // 'Admin' or 'Customer'
        };

        const result = await database.collection('UserCredentials').insertOne(newUser);
        res.status(201).send({ success: true, message: `${role} registered successfully`, result });
    } catch (error) {
        console.error("Error adding user:", error);
        res.status(500).send("Error adding user");
    }
});

app.post('/api/indian_cousins/LoginUser', async (req, res) => {
    const { userEmail, userPassword } = req.body;

    try {
        const user = await database.collection('UserCredentials').findOne({ email: userEmail });
        if (!user) return res.status(404).send({ message: "User not found. Please register first." });
        
        // Password check
        if (user.password !== userPassword) {
            return res.status(401).send({ message: "Invalid email or password." });
        }

        // Generate token (dummy for now)
        const token = `dummy-token-${user._id}`;
        
        res.status(200).send({
            success: true,
            message: "Login successful!",
            role: user.role,  // Send role from database
            token,
            user: {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
            },
        });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).send({ message: "Error during login" });
    }
});
*/


// select table
app.get('/api/restaurant/getTables', async (req, res) => {
    try {
      const tables = await database.collection('tables').find({}).toArray();
      res.status(200).json(tables);
    } catch (error) {
      console.error('Error fetching tables:', error);
      res.status(500).send('Error fetching table data');
    }
});

// subscribe mail 
const nodemailer = require('nodemailer'); // Import Nodemailer

// POST route to handle newsletter subscription
app.post('/api/subscribe', async (req, res) => {
  const { name, email, message } = req.body;

  // Set up the email transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail', // or use any other email service provider
    auth: {
      user: 'sparamvirsingh321@gmail.com', // Replace with your email
      pass: 'vinf hlul cbwu xzgn'   // Replace with your email password or app-specific password
    }
  });

  // Define email options
  const mailOptions = {
    from: 'sparamvirsingh321@gmail.com',
    to: email,
    subject: 'Subscription Confirmation - Indian Delicacy Newsletter',
    text: `Hi ${name},\n\nThank you for subscribing to the Indian Delicacy Newsletter!\n\nYour message: ${message}\n\nStay tuned for delicious updates!\n\nBest regards,\nIndian Delicacy Team`
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    res.status(200).send('Subscription successful, email sent!');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error subscribing to the newsletter');
  }
});

// New endpoint to get user info
app.get('/api/indian_cousins/GetUserInfo', async (req, res) => {
    const userEmail = req.query.email; // Get email from query parameter

    try {
        if (!userEmail) {
            return res.status(400).send({ message: "Email is required." });
        }

        const user = await database.collection('UserCredentials').findOne({ email: userEmail });
        if (!user) {
            return res.status(404).send({ message: "User not found." });
        }

        res.status(200).send({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
        });
    } catch (error) {
        console.error("Error fetching user info:", error);
        res.status(500).send({ message: "Error fetching user info" });
    }
});

// User registration endpoint
app.post('/api/indian_cousins/AddUser', async (req, res) => {
    const { userFirstName, userLastName, userEmail, userPassword, role } = req.body;
    
    try {
        const hashedPassword = await bcrypt.hash(userPassword, 10); // Hash password
        const newUser = {
            firstName: userFirstName,
            lastName: userLastName,
            email: userEmail,
            password: hashedPassword,
            role
        };

        await database.collection('UserCredentials').insertOne(newUser);
        res.status(201).send({ success: true, message: `${role} registered successfully!` });
    } catch (error) {
        res.status(500).send({ message: "Registration failed!" });
    }
});

// User login endpoint
app.post('/api/indian_cousins/LoginUser', async (req, res) => {
    const { userEmail, userPassword } = req.body;

    try {
        const user = await database.collection('UserCredentials').findOne({ email: userEmail });
        if (!user) return res.status(404).send({ message: "User not found. Please register first." });

        const isMatch = await bcrypt.compare(userPassword, user.password);
        if (!isMatch) return res.status(401).send({ message: "Invalid email or password." });

        // Generate a token (replace 'secret' with a strong key)
        const token = jwt.sign({ id: user._id, role: user.role }, 'secret', { expiresIn: '1h' });

        res.status(200).send({ success: true, message: "Login successful!", token, role: user.role, firstName: user.firstName, lastName: user.lastName, email: user.email });
    } catch (error) {
        res.status(500).send({ message: "Login failed!" });
    }
});

const { ObjectId } = require('mongodb');
// Route to delete an item by ID
app.delete('/api/indian_cousins/DeleteItem/:id', async (req, res) => {
    const { id } = req.params;
    try {
        // Ensure the database connection is established
        if (!database) {
            return res.status(500).send("Database connection not established");
        }

        // Attempt to delete from all collections
        const collections = ["cusins", "SideDishes", "IndianFastFood", "Drinks"];
        let deleted = false;

        for (const collection of collections) {
            const result = await database.collection(collection).deleteOne({ _id: new ObjectId(id) });
            if (result.deletedCount > 0) {
                deleted = true;
                break;
            }
        }

        if (deleted) {
            res.status(200).send({ message: "Item deleted successfully" });
        } else {
            res.status(404).send({ message: "Item not found" });
        }
    } catch (error) {
        console.error("Error deleting item:", error);
        res.status(500).send({ message: "Failed to delete item" });
    }
});

// Route to update an item by ID
app.put('/api/indian_cousins/UpdateItem/:id', async (req, res) => {
    const { id } = req.params;
    const updatedItem = req.body;

    try {
        if (!database) {
            return res.status(500).send("Database connection not established");
        }

        const collections = ["cusins", "SideDishes", "IndianFastFood", "Drinks"];
        let updated = false;

        for (const collection of collections) {
            const result = await database.collection(collection).updateOne(
                { _id: new ObjectId(id) }, 
                { $set: updatedItem }
            );
            if (result.modifiedCount > 0) {
                updated = true;
                break;
            }
        }

        if (updated) {
            res.status(200).send({ message: "Item updated successfully" });
        } else {
            res.status(404).send({ message: "Item not found" });
        }
    } catch (error) {
        console.error("Error updating item:", error);
        res.status(500).send({ message: "Failed to update item" });
    }
});