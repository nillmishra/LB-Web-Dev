const express = require("express");
const router = express.Router();

const { createTodo } = require("../controllers/createTodo");
const { getTodo} = require("../controllers/getTodo"); // Added getTodoById
const { getTodoById } = require("../controllers/getTodoById");
const { updateTodo } = require("../controllers/updateTodo");
const { deleteTodo } = require("../controllers/deleteTodo");

// Routes
router.post("/createTodo", createTodo);
router.get("/getTodo", getTodo);
router.get("/getTodoById/:id", getTodoById); // Route for fetching todo by ID
router.put("/updateTodo/:id", updateTodo); // Route for updating a todo
router.delete("/deleteTodo/:id", deleteTodo); // Route for deleting a todo

module.exports = router;

