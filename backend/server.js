import express from "express";

//DOTENV
import dotenv from "dotenv";
dotenv.config();

//localhost:5000
const port = process.env.PORT || 5000;

//dummy data
import products from "./data/products.js";

const app = express();

//routes
app.get("/", (req, res) => {
  res.send("Api is Running...");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});
//

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
