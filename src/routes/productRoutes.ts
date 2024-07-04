import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  searchProducts,
  updateProduct,
} from "../controllers/productController";

const router = express.Router();

router.post("/", createProduct);
router.get("/", searchProducts);
router.get("/", getAllProducts);
router.get("/:productId", getProductById);
router.put("/:productId", updateProduct);
router.delete("/:productId", deleteProduct);

export default router;
