import { authenticateToken } from "../middleware/auth.js";
import express from "express";
import pool from "../db.js";

const router = express.Router();

// Get logged-in user info
router.get("/me", authenticateToken, async (req, res) => {
  try {
    const result = await pool.query("SELECT id, name, email, role FROM users WHERE id = $1", [
      req.user.userId,
    ]);
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
