import { Request, Response } from 'express';
import Product from '../models/Product';
import { productSchema } from '../schemas/productSchema';

export const createProduct = async (req: Request, res: Response) => {
    try {
        const validatedProduct = productSchema.parse(req.body);
        const product = new Product(validatedProduct);
        await product.save();
        res.status(201).json({
            success: true,
            message: 'Product created successfully!',
            data: product
        });
    } catch (error: any) {
        res.status(400).json({
            success: false,
            message: error.errors ? error.errors.map((err: any) => err.message).join(', ') : 'Error creating product'
        });
    }
};

export const getAllProducts = async (req: Request, res: Response) => {
    try {
        const products = await Product.find();
        res.status(200).json({
            success: true,
            message: 'Products fetched successfully!',
            data: products
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching products'
        });
    }
};


