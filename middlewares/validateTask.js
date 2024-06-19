const { body, validationResult } = require("express-validator");

// Validar los datos de una tarea
const validateTask = [
  body("title").isString().withMessage("El título debe ser un texto"),
  body("description")
    .isString()
    .withMessage("La descripción debe ser un texto"),
  body("status")
    .isBoolean()
    .withMessage("El estado debe ser un valor booleano"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = validateTask;
