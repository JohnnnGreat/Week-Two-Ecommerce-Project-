import { NextFunction, Request, Response } from "express";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
   console.log(err);
   const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
   res.status(statusCode).json({
      success: false,
      message: err.message || "An unexpected error occurred.",
   });
};
