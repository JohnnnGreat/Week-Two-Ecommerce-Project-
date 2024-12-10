/**
 * @swagger
 * /api/v1/products:
 *   post:
 *     summary: Add a new product
 *     tags:
 *       - Products
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               uploadBy:
 *                 type: string
 *                 example: "60c72b2f5f9b4e3f8b3e5c1b"
 *               productName:
 *                 type: string
 *                 description: Name of the product
 *                 example: "Smartphone"
 *               productImage:
 *                 type: string
 *                 description: URL of the product image
 *                 example: "https://example.com/image.jpg"
 *               productPrice:
 *                 type: number
 *                 description: Price of the product
 *                 example: 299.99
 *               productDescription:
 *                 type: string
 *                 description: Description of the product
 *                 example: "A high-quality smartphone with excellent performance."
 *               productDiscount:
 *                 type: number
 *                 description: Discount percentage for the product
 *                 example: 10
 *     responses:
 *       200:
 *         description: Product successfully added
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Product added successfully"
 *                 product:
 *                   type: object
 *                   properties:
 *                     uploadBy:
 *                         type: string
 *                         example: "60c72b2f5f9b4e3f8b3e5c1b"
 *                     productName:
 *                       type: string
 *                       example: "Smartphone"
 *                     productImage:
 *                       type: string
 *                       example: "https://example.com/image.jpg"
 *                     productPrice:
 *                       type: number
 *                       example: 299.99
 *                     productDescription:
 *                       type: string
 *                       example: "A high-quality smartphone with excellent performance."
 *                     productDiscount:
 *                       type: number
 *                       example: 10
 */

/**
 * @swagger
 * /api/v1/products:
 *   get:
 *     summary: Get All Products
 *     tags:
 *       - Products
 *     responses:
 *       200:
 *         description: Products fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Products fetched successfully"
 *                 products:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       uploadBy:
 *                         type: string
 *                         example: "60c72b2f5f9b4e3f8b3e5c1b"
 *                       productName:
 *                         type: string
 *                         example: "Smartphone"
 *                       productImage:
 *                         type: string
 *                         example: "https://example.com/image.jpg"
 *                       productPrice:
 *                         type: number
 *                         example: 299.99
 *                       productDescription:
 *                         type: string
 *                         example: "A high-quality smartphone with excellent performance."
 *                       productDiscount:
 *                         type: number
 *                         example: 10
 */

/**
 * @swagger
 * /api/v1/products/{productId}:
 *   put:
 *     summary: Update an existing product
 *     tags:
 *       - Products
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         description: The ID of the product to update
 *         schema:
 *           type: string
 *           example: "60c72b2f5f9b4e3f8b3e5c1b"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productName:
 *                 type: string
 *                 description: The name of the product
 *                 example: "Smartphone"
 *               productImage:
 *                 type: string
 *                 description: URL of the product image
 *                 example: "https://example.com/image.jpg"
 *               productPrice:
 *                 type: number
 *                 description: The price of the product
 *                 example: 299.99
 *               productDescription:
 *                 type: string
 *                 description: A description of the product
 *                 example: "A high-quality smartphone with excellent performance."
 *               productDiscount:
 *                 type: number
 *                 description: The discount percentage for the product
 *                 example: 10
 *     responses:
 *       200:
 *         description: Product successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 product:
 *                   type: object
 *                   properties:
 *                     productName:
 *                       type: string
 *                       example: "Smartphone"
 *                     productImage:
 *                       type: string
 *                       example: "https://example.com/image.jpg"
 *                     productPrice:
 *                       type: number
 *                       example: 299.99
 *                     productDescription:
 *                       type: string
 *                       example: "A high-quality smartphone with excellent performance."
 *                     productDiscount:
 *                       type: number
 *                       example: 10
 *       400:
 *         description: Invalid product ID or invalid data
 *       404:
 *         description: Product not found
 */

/**
 * @swagger
 * /api/v1/products/{productId}:
 *   delete:
 *     summary: Delete a product
 *     tags:
 *       - Products
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the product to delete
 *     responses:
 *       200:
 *         description: Product successfully deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Product deleted successfully"
 *       400:
 *         description: Bad Request - Invalid ID supplied
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Invalid product ID"
 *       404:
 *         description: Not Found - Product not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Product not found"
 */
