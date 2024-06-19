const express = require("express");
const app = express();
const errorHandler = require("./middlewares/errorHandler");
const taskRoutes = require("./routes/taskRoutes");
const db = require("./models");
const cors = require("cors");

// Middlewares
app.use(express.json());
app.use(cors());

// Rutas
app.use("/api", taskRoutes);

// Middleware de manejo de errores
app.use(errorHandler);

// Conexión a la base de datos
db.sequelize.sync().then(() => {
  console.log("Conexión a la base de datos establecida");
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto: ${PORT}`);
});
