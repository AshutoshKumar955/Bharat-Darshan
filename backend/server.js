const express = require("express");
const cors = require("cors");

const blogRoutes = require("./routes/blogs");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// API routes
app.use("/blogs", blogRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
