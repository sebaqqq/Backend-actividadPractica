# BackEnd Prueba Técnica

Este es el backend para la prueba técnica. Proporciona una API para gestionar tareas.

## Instalación

1. Clona este repositorio en tu dispositivo.
2. Abre una terminal y navega hasta el directorio del proyecto.
3. Ejecuta el siguiente comando para instalar las dependencias:

`npm install`

## Configuración

Antes de ejecutar el servidor, asegúrate de configurar la conexión a la base de datos. Abre el archivo `config/config.json` y modifica los valores de `username`, `password`, `database` y `host` según tu configuración.

## Uso

Para iniciar el servidor, ejecuta el siguiente comando:

` node app.js`

El servidor se ejecutará en el puerto 3000 de forma predeterminada. Si deseas utilizar otro puerto, puedes configurarlo en la variable de entorno `PORT`.

## API Endpoints

### GET /api/tasks

Obtiene todas las tareas almacenadas en la base de datos.

### POST /api/tasks

Crea una nueva tarea. Debes enviar un objeto JSON con los siguientes campos:

- `id` (int): el id de la tarea.
- `title` (string): el título de la tarea.
- `description` (string): la descripción de la tarea.
- `status` (boolean): el estado de la tarea.

### GET /api/tasks/:id

Obtiene una tarea específica según su ID.

### PUT /api/tasks/:id

Actualiza una tarea existente. Debes enviar un objeto JSON con los campos que deseas actualizar.

### DELETE /api/tasks/:id

Elimina una tarea existente según su ID.

## Manejo de errores

El backend está equipado con un middleware de manejo de errores. Si ocurre algún error durante el procesamiento de una solicitud, se enviará una respuesta con el código de estado correspondiente y un mensaje de error descriptivo.

## Conexión a la base de datos

El backend utiliza Sequelize como ORM para interactuar con la base de datos. La conexión a la base de datos se establece automáticamente al iniciar el servidor.
