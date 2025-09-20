import type { Application } from "express";
import express from "express";
import dotenv from "dotenv";
import mainRouter from "./routes/index.js";
import { errorHandler } from "./errorHandler.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app: Application = express(); // Tipo explícito para la aplicación de Express

app.use(express.json());
app.use("/", mainRouter);

// Middleware de manejo de errores
app.use(errorHandler);

// Tipo explícito para la función de callback del servidor
app.listen(PORT, (): void => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
