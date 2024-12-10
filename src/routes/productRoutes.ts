import { Router } from "express";
import { addProduct, deleteProducts, getAllProducts, updateProducts } from "../controllers/Products";

const productRouter = Router();

productRouter.post("/", addProduct);
productRouter.get("/", getAllProducts);
productRouter.put("/:productId", updateProducts);
productRouter.delete("/:productId", deleteProducts);

export default productRouter;
