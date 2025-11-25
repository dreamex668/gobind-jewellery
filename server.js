const express = require("express");
const path = require("path");
const app = express();

// PORT FOR RAILWAY
const PORT = process.env.PORT || 3000;

// EJS Template Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Static Files
app.use(express.static(path.join(__dirname, "public")));

// Home Route
app.get("/", (req, res) => {
    res.render("home"); // Make sure views/home.ejs exists
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
