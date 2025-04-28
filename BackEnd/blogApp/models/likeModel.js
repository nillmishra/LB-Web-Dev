const mongoose = require('mongoose')


//route handler

const likeSchema = new mongoose.Schema({
    post:{
        type: "Post",
    },
    user:{
        type: String,
        requried: true,
    },
}); 

module.exports = mongoose.model("Like", likeSchema);