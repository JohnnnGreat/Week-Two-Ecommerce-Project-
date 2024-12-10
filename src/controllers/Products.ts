import { NextFunction, Request, Response } from "express";
import Product, { ProductType } from "../Schema/Products";

export const addProduct = async (req: Request, res: Response, next: NextFunction) => {
   try {
      const productInformation = req.body;

      const addNewProduct = new Product<ProductType>(productInformation);

      await addNewProduct.save();

      res.status(200).json({ message: "Product added successfully", product: addNewProduct });
   } catch (error) {
      next(error);
   }
};

export const getAllProducts = async (req: Request, res: Response, next: NextFunction) => {
   try {
      const allProducts = await Product.find();

      res.status(200).json({ message: "Products Fetched Successfuly", products: allProducts });
   } catch (error) {
      next(error);
   }
};

export const updateProducts = async (req: Request, res: Response, next: NextFunction): Promise<Response | any> => {
   const { productId } = req.params;
   const productInformation = req.body;

   try {
      const updateProduct = await Product.findByIdAndUpdate(productId, productInformation, { new: true });

      if (!updateProduct) {
         return res.status(404).json({ message: `No Product with id: ${productId} found` });
      }
      res.status(200).json({ product: updateProduct });
   } catch (error) {
      next(error);
   }
};

export const deleteProducts = async (req: Request, res: Response, next: NextFunction): Promise<Response | any> => {
   try {
      const { productId } = req.params;

      const findProductInDatabase = await Product.findById(productId);

      if (!findProductInDatabase) {
         return res.status(404).json({ message: "Product not found" });
      }

      await Product.findByIdAndDelete(productId);

      res.status(200).json({ message: "Product Deleled Successfully" });
   } catch (error) {
      next(error);
   }
};
