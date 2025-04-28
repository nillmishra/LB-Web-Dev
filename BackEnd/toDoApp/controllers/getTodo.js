const Todo = require("../models/Todo");

exports.getTodo = async (req, res) => {
    try {
        // Fetch all todos from the database
        const todos = await Todo.find();

        // Respond with the fetched todos
        res.status(200).json({
            success: true,
            data: todos,
            message: "All Todo data fetched successfully",
        });
    } catch (err) {
        // Log the error and send a server error response
        console.error("Error fetching todos:", err);
        res.status(500).json({
            success: false,
            data: null,
            message: "Internal server error: " + err.message,
        });
    }
};

exports.getTodoById = async (req, res) => {
    try {
        // Fetch the todo with the given ID from the database
        const todo = await Todo.findById(req.params.id); 
        // Respond with the fetched todo
        res.status(200).json({
            success: true,
            data: todo,
            message: "Todo data fetched successfully",
        });
    }
    catch (err) {
        // Log the error and send a server error response
        console.error("Error fetching todo:", err);
        res.status(500).json({
            success: false,
            data: null,
            message: "Internal server error: " + err.message,
        });
    }
}