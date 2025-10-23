import express from "express";
import {
  createNewOrder,
  fetchOrdersByCustomer,
} from "../controllers/orderController.js";
import { authenticateToken } from "../middleware/auth.js";

const router = express.Router();

// Only logged-in users can create orders
router.post("/", authenticateToken, createNewOrder);

// Users can fetch their own orders
router.get("/:customer_id", authenticateToken, fetchOrdersByCustomer);

export default router;

// auth
// import express from 'express';
// import { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } from '../controllers/productController.js';
// import { authenticateToken, isAdmin } from '../middleware/auth.js';

// const router = express.Router();

// // Public routes (no changes)
// router.get('/', getAllProducts);
// router.get('/:id', getProductById);

// // Admin routes → only add middleware, no change to controller logic
// router.post('/', authenticateToken, isAdmin, createProduct);
// router.put('/:id', authenticateToken, isAdmin, updateProduct);
// router.delete('/:id', authenticateToken, isAdmin, deleteProduct);

// export default router;
