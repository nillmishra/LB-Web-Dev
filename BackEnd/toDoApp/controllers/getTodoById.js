const Todo = require("../models/Todo");

// Fetch a todo by ID
exports.getTodoById = async (req, res) => {
    try {
        const { id } = req.params;

        // Find the todo by its ID
        const todo = await Todo.findById(id);

        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "Todo not found",
            });
        }

        res.status(200).json({
            success: true,
            data: todo,
            message: "Todo fetched successfully",
        });
    } catch (err) {
        console.error("Error fetching todo by ID:", err);
        res.status(500).json({
            success: false,
            message: "Internal server error: " + err.message,
        });
    }
};
