const db = require("../models");

// obtener todas las tareas
exports.getTasks = async (req, res) => {
  try {
    const tasks = await db.Task.findAll();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// crear una tarea
exports.createTask = async (req, res) => {
  try {
    const task = await db.Task.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// actualizar una tarea
exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await db.Task.findByPk(id);
    if (task) {
      await task.update(req.body);
      res.status(200).json(task);
    } else {
      res.status(404).json({ error: "Tarea no encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// eliminar una tarea
exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await db.Task.findByPk(id);
    if (task) {
      await task.destroy();
      res.status(200).json({ message: "Tarea eliminada" });
    } else {
      res.status(404).json({ error: "Tarea no encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
