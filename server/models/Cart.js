import pool from "../db.js";

// إضافة منتج للسلة
export const addToCart = async (user_id, product_id, quantity) => {
  const result = await pool.query(
    `INSERT INTO cart_items (user_id, product_id, quantity)
     VALUES ($1, $2, $3) RETURNING *`,
    [user_id, product_id, quantity]
  );
  return result.rows[0];
};

// تحديث كمية المنتج
export const updateCartItem = async (item_id, quantity) => {
  const result = await pool.query(
    `UPDATE cart_items SET quantity = $1 WHERE id = $2 RETURNING *`,
    [quantity, item_id]
  );
  return result.rows[0];
};

// إزالة منتج من السلة
export const deleteCartItem = async (item_id) => {
  await pool.query(`DELETE FROM cart_items WHERE id = $1`, [item_id]);
  return { message: "Item removed from cart" };
};

// جلب كل المنتجات في سلة مستخدم معين
export const getCartByUser = async (user_id) => {
  const result = await pool.query(
    `SELECT ci.id, ci.quantity, p.id AS product_id, p.name, p.price, p.image
     FROM cart_items ci
     JOIN products p ON ci.product_id = p.id
     WHERE ci.user_id = $1`,
    [user_id]
  );
  return result.rows;
};
