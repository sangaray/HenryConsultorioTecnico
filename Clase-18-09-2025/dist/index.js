import express from "express";
const PORT = 3000; // Tipo explícito para el puerto
const app = express(); // Tipo explícito para la aplicación de Express
const router = express.Router(); // Usamos express para crear el router
app.use(express.json());
app.use(router);
// Tipos explícitos para las solicitudes y respuestas
router.get("/", (req, res) => {
    res.send("Hello World!");
});
router.get("/api", (req, res) => {
    res.json({ message: "Hello from the API!" });
});
// Tipo explícito para la función de callback del servidor
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
