import express from "express";

//DOTENV
import dotenv from "dotenv";
dotenv.config();

import productRoutes from "./routes/productRoutes.js";

//error middleware handlers
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

//mongoDB
import connectDB from "./config/db.js";
connectDB(); //connect to mongoDB

//localhost:5000
const port = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res) => {
  res.send("Api is Running...");
});

//routes
app.use("/api/products", productRoutes);
//

//error handlers
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
