const express = require("express");
const mongoose = require("mongoose");
const { port, databaseUrl } = require("./config/dotenv");
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");
const exampleRoutes = require("./routes/exampleRoutes");

const app = express();

// Middleware
app.use(logger);
app.use(express.json());

// Routes
app.use("/api", exampleRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Error Handling Middleware
app.use(errorHandler);

// Database connection
mongoose
  .connect(databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

// Start server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
