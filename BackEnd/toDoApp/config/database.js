const mongoose = require('mongoose');

require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => {
        console.log('Error connecting to MongoDB');
        console.log(error.message);
        process.exit(1);
    });
}

module.exports = dbConnect;