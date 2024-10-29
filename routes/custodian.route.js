const express = require("express");
const router = express.Router();

// Show the login page
router.get("/login", (req, res) => {
    res.render("login", { error: null }); // Ensure the 'login.ejs' file is in the 'views' folder
});

// Handle login form submission
router.post("/login", (req, res) => {
    const { username, password } = req.body;

    // Check the username and password
    if (username === "custodian" && password === "custodian1") {
        req.session.user = username; // Store the username in the session
        return res.redirect("/dashboard"); // Redirect to the dashboard
    } else {
        return res.render("login", { error: "Invalid username or password" });
    }
});

// Show the dashboard page
router.get("/dashboard", (req, res) => {
    if (!req.session.user) {
        return res.redirect("/login"); // Redirect to login if not authenticated
    }
    res.render("dashboard", { user: req.session.user });
});

// Logout route
router.get("/logout", (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.redirect("/dashboard");
        }
        res.redirect("/login");
    });
});

module.exports = router;
