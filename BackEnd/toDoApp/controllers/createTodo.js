const Todo = require("../models/Todo");

exports.createTodo = async (req, res) => {
    try {
        // Extract title and description from request body
        const { title, description } = req.body;

        if (!title || !description) {
            return res.status(400).json({
                success: false,
                message: "Title and description are required",
            });
        }

        // Create a new Todo and insert it into the DB
        const response = await Todo.create({ title, description });

        // Return success response
        res.status(200).json({
            success: true,
            data: response,
            message: "Entry created successfully"
        });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            data: "Internal server error",
            message: err.message,
        });
    }
}
