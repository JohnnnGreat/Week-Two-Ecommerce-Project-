import { Router } from "express";
import { addProduct, getAllProducts, updateProducts } from "../controllers/Products";

const productRouter = Router();

productRouter.post("/", addProduct);
productRouter.get("/", getAllProducts);
productRouter.put("/:productId", updateProducts);

export default productRouter;
