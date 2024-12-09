import express, { Request, Response } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerOptions from "./swagger";

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Swagger setup
const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
app.get("/", (req: Request, res: Response) => {
   res.send("Hello, TypeScript with Express!");
});

/**
 * @swagger
 * /api/hello:
 *   get:
 *     summary: Returns a hello message
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Hello, API!"
 * 
 */

app.get("/api/hello", (req: Request, res: Response) => {
   res.json({ message: "Hello, API!" });
});

// Start the server
app.listen(PORT, () => {
   console.log(`Server is running on http://localhost:${PORT}`);
   console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});
