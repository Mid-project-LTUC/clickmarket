import pool from "../db.js";

// Create a new order
export const createOrder = async (customer_id, products) => {
  try {
    // 1️⃣ calculate total price
    const total_price = products.reduce(
      (sum, p) => sum + p.price * p.quantity,
      0
    );

    // 2️⃣ insert into orders table
    const orderResult = await pool.query(
      "INSERT INTO orders (customer_id, total_price) VALUES ($1, $2) RETURNING id, status",
      [customer_id, total_price]
    );
    const order_id = orderResult.rows[0].id;

    // 3️⃣ insert each product into order_items
    for (let p of products) {
      await pool.query(
        "INSERT INTO order_items (order_id, product_id, quantity, price) VALUES ($1, $2, $3, $4)",
        [order_id, p.product_id, p.quantity, p.price]
      );
    }

    return { order_id, total_price, status: orderResult.rows[0].status };
  } catch (err) {
    throw err;
  }
};

// Fetch all orders for a customer
export const getOrdersByCustomer = async (customer_id) => {
  const result = await pool.query(
    `SELECT o.id as order_id, o.total_price, o.status, o.created_at,
            json_agg(json_build_object('product_id', oi.product_id, 'quantity', oi.quantity, 'price', oi.price)) as items
     FROM orders o
     JOIN order_items oi ON o.id = oi.order_id
     WHERE o.customer_id = $1
     GROUP BY o.id`,
    [customer_id]
  );
  return result.rows;
};
