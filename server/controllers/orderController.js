import { createOrder, getOrdersByCustomer } from "../models/Order.js";

// POST /api/orders
export const createNewOrder = async (req, res) => {
  try {
    const { customer_id, products } = req.body;

    if (!customer_id || !products || !products.length) {
      return res.status(400).json({ error: "Invalid order data" });
    }

    const order = await createOrder(customer_id, products);
    res.status(201).json(order);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
};

// GET /api/orders/:customer_id
export const fetchOrdersByCustomer = async (req, res) => {
  try {
    const { customer_id } = req.params;
    const orders = await getOrdersByCustomer(customer_id);
    res.json(orders);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
};
