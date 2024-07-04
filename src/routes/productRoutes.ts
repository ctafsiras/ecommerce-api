import express from 'express';
import { createProduct, getAllProducts } from '../controllers/productController';

const router = express.Router();

router.post('/', createProduct);
router.get('/', getAllProducts);

export default router;
