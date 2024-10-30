const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv").config();
const userRouter = require("./routes/custodian.route.js");
const transactionRoutes = require('./routes/transactionRoutes.js');

const app = express();

// Middleware to serve static files (e.g., CSS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse request bodies for URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware for session management
app.use(session({
    secret: 'your_secret_key', // Change this to a strong secret key in production
    resave: false,
    saveUninitialized: true,
}));

// Set EJS as the view engine for rendering views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Use the user router for handling custodian-related routes
app.use("/", userRouter);

// Use the transaction routes for handling transaction-related routes
app.use("/", transactionRoutes);

// Create server and listen on specified port
app.listen(process.env.PORT, () => {
    console.log("Server started on port", process.env.PORT);
});
