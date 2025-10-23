import dotenv from "dotenv";

import express from "express";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/users", userRoutes);
app.use("/api/cart", cartRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(` Server running on port http://localhost:${PORT}`)
);

// check connections of Data Base
// pool.connect((err, client, release) => {
//   if (err) {
//     return console.error(" Error acquiring client", err.stack);
//   }
//   console.log("Database connected successfully!");
//   release();
// });
