const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));

// Serve static files from 'public' folder
app.use(express.static("public"));

// Serve HTML file manually if needed
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "foruhtml.html"));
});

// POST handler
app.post("/", (req, res) => {
    console.log(req.body);
    res.send("Form received!");
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
