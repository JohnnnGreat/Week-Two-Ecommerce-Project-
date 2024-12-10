import express, { Request, Response } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerOptions from "./swagger";
import { errorHandler } from "./middleware/errorHandler";
import productRouter from "./routes/productRoutes";
import connectDB from "./mongoose.config";
import AuthRouter from "./routes/authRoutes";

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

app.use("/api/v1/products", productRouter);
app.use("/api/v1/authentication", AuthRouter);
// Swagger setup
const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
app.get("/", (req: Request, res: Response) => {
   res.send("Hello, TypeScript with Express!");
});

app.get("/api/hello", (req: Request, res: Response) => {
   res.json({ message: "Hello, API!" });
});

// Error Handler
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
   connectDB();
   console.log(`Server is running on http://localhost:${PORT}`);
   console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});
