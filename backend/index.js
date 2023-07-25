require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "public")));

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

const postRoutes = require("./routes/post");
const projectRoutes = require("./routes/project");
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use("/api/posts", postRoutes);
app.use("/api/projects", projectRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
