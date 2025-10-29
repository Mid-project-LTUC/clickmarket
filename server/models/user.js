import pool from "../db.js";
import bcrypt from "bcrypt";

// Create a new user (signup)
export const createUser = async (name, email, password) => {
  const hashedPassword = await bcrypt.hash(password, 10); // hash password
  const result = await pool.query(
    "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email",
    [name, email, hashedPassword]
  );
  return result.rows[0];
};

// Get a user by email (login)
export const getUserByEmail = async (email) => {
  const result = await pool.query("SELECT * FROM users WHERE email = $1", [
    email,
  ]);
  return result.rows[0];
};
