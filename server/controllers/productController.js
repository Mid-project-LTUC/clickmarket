import { getAllProducts, getProductByID } from "../models/Product.js";

export const fetchAllProducts = async (req, res) => {
  try {
    const products = await getAllProducts();
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
};

export const fetchProductsByID = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await getProductByID(id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
};
