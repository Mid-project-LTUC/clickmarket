import {
  addToCart,
  updateCartItem,
  deleteCartItem,
  getCartByUser,
} from "../models/Cart.js";

//add to cart
export const addItemToCart = async (req, res) => {
  try {
    const user_id = req.user.userId;
    const { product_id, quantity } = req.body;
    const cartItem = await addToCart(user_id, product_id, quantity);
    res.status(201).json(cartItem);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
};

//update quantity
export const updateItemInCart = async (req, res) => {
  try {
    const { item_id } = req.params;
    const { quantity } = req.body;
    const updatedItem = await updateCartItem(item_id, quantity);
    res.json(updatedItem);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
};

//remove from cart
export const removeItemFromCart = async (req, res) => {
  try {
    const { item_id } = req.params;
    const result = await deleteCartItem(item_id);
    res.json(result);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
};

//get cart
export const getUserCart = async (req, res) => {
  try {
    const user_id = req.user.userId;
    const cart = await getCartByUser(user_id);
    res.json(cart);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
};
