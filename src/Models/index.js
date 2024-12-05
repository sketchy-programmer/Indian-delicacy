const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");
const multer = require('multer'); // Use multer for parsing form data

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


// Endpoint to add a new user
app.post('/api/indian_cousins/AddUser', async (req, res) => {
    const { userFirstName, userLastName, userEmail, userPassword, userConfirmPass } = req.body;

    try {
        if (!userFirstName || !userLastName || !userEmail || !userPassword || !userConfirmPass) {
            return res.status(400).send("All fields are required.");
        }

        // Insert the new user data
        const newUser = { firstName: userFirstName, lastName: userLastName, email: userEmail, password: userPassword };
        const result = await database.collection('UserCredentials').insertOne(newUser);
        
        res.status(201).send({ success: true, message: "User registered successfully", result });
    } catch (error) {
        console.error("Error adding item:", error);
        res.status(500).send("Error adding item");
    }
});


// Endpoint to log in a user
app.post('/api/indian_cousins/LoginUser', async (req, res) => {
    console.log(req.body);
    const { userEmail, userPassword } = req.body;

    try {
        if (!userEmail || !userPassword) {
            return res.status(400).send({ message: "Email and password are required." });
        }

        // Find the user in the database
        const user = await database.collection('UserCredentials').findOne({ email: userEmail });

        if (!user) {
            return res.status(404).send({ message: "User not found. Please register first." });
        }

        // Check if the password matches
        if (user.password !== userPassword) {
            return res.status(401).send({ message: "Invalid email or password." });
        }

        // Generate a token (replace with actual token generation logic if needed)
        const token = `dummy-token-${user._id}`;

        // Include a role field based on business logic (e.g., Admin or Customer)
        const role = userEmail === "admin@example.com" ? "Admin" : "Customer";

        // Respond with user details and token
        res.status(200).send({
            success: true,
            message: "Login successful!",
            role,
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

