const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");
const validateTask = require("../middlewares/validateTask");

// Rutas de la API
router.get("/tasks", taskController.getTasks);
router.post("/tasks", validateTask, taskController.createTask);
router.put("/tasks/:id", validateTask, taskController.updateTask);
router.delete("/tasks/:id", taskController.deleteTask);

module.exports = router;
