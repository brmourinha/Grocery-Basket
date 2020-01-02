const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");

// Load env vars
dotenv.config({ path: "./config/config.env" });

// Connect to database
connectDB();

// Route files
const products = require("./routes/products");

// Inicialize app
const app = express();

// Body Parser
app.use(express.json());

// Mount routes
app.use("/api/v1/products", products);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

// Listen port
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
