// here to get all product from database or get the product by id

import pool from "../db.js";

export const getAllProducts = async () => {
  const result = await pool.query("SELECT * FROM products ORDER BY id ASC ");
  return result.rows;
};

export const getProductByID = async (id) => {
  const result = await pool.query("SELECT * FROM products WHERE id = $1", [id]);
  return result.rows[0];
};
