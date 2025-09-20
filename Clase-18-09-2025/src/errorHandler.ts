import type { Request, Response, NextFunction } from "express";

/**
 * Middleware para manejar errores de forma centralizada.
 * Debe ser el último middleware que se añade a la app.
 */
export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err.stack); // Log del error para depuración

  res.status(500).json({
    message: "Ha ocurrido un error inesperado en el servidor.",
  });
};
