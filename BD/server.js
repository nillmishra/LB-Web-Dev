// Step 1: Create a folder
// Step 2: Move into the folder  
// Step 3: npm init -y
// Step 4: npm install express
// Step 5: Create a file server.js

// server initialization
const express = require('express');
const app = express();

// Use express.json() middleware to parse JSON requests (no need for body-parser)
app.use(express.json());

// Activate the server on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// Routes
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/api/car', (req, res) => {
    const { name, brand } = req.body;
    console.log(name);
    console.log(brand); 
    res.send('Car created');
});

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Cars', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.log('Failed to connect to MongoDB', err);
});
 