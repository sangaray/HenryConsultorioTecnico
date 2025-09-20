import { Router } from "express";
import type { Request, Response } from "express";

const router = Router();

// Tipos explícitos para las solicitudes y respuestas
router.get("/", (req: Request, res: Response): void => {
  res.send("Hello World!");
});

router.get("/api", (req: Request, res: Response): void => {
  res.json({ message: "Hello from the API!" });
});

export default router;
