import express from "express";
import {
  fetchAllProducts,
  fetchProductsByID,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", fetchAllProducts);
router.get("/:id", fetchProductsByID);

export default router;
