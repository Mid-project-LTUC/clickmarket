import express from "express";
import {
  addItemToCart,
  updateItemInCart,
  removeItemFromCart,
  getUserCart,
} from "../controllers/cartController.js";
import { authenticateToken } from "../middleware/auth.js";

const router = express.Router();

router.post("/", authenticateToken, addItemToCart);
router.put("/:item_id", authenticateToken, updateItemInCart);
router.delete("/:item_id", authenticateToken, removeItemFromCart);
router.get("/", authenticateToken, getUserCart);

export default router;
