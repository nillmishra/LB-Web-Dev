const express = require("express");
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Other routes and middlewares

require("dotenv").config();
const PORT = process.env.PORT || 8000;

app.listen(8000, ()=>{
    console.log("App Is Running SUcessfully");
})

const todoRoutes = require("./routes/todos");

app.use("/api/v1", todoRoutes);

app.listenerCount(PORT, () => {
    console.log(`Server Sarted Sucessfully At ${PORT}`);
})

const dbConnect = require("./config/database");
dbConnect();

app.get("/", (req, res) =>{
    res.send(`<h1> This is HOMEPAGE baby</h1>`)
})