const Todo = require("../models/Todo");

// Update a todo
exports.updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;

        // Find the todo by its ID
        const todo = await Todo.findByIdAndUpdate(
            {
                _id: id,
            },
            {
                title,
                description,
                updatedAt: Date.now(),
            }
        );

        res.status(200).json({
            success: true,
            data: todo,
            message: "Todo updated successfully",
        });
    } 
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};