const express = require("express");
const app = express();

app.use(express.json());

require("dotenv").config();
const PORT = process.env.PORT || 4000;

const blog = require("./routes/blog");

app.use("/api/v1", blog);

const dbConnect = require("./config/database");
dbConnect();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
    res.send("<h1>Welcome to the blog API</h1>");
});

module.exports = app;