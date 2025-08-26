require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user");
const Blog = require("./models/blog");
const bcrypt = require("bcryptjs");
const cors = require("cors");

const app = express();
//app.use(express.json());
app.use(express.json({ limit: '50mb' })); // kena payload too large bolo jgn dihapus!
app.use(cors());


mongoose
  .connect(process.env.MONGODB_URI, { dbName: "smfdb" }) //konek ke database namany
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.log("❌ MongoDB error:", err));

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ username, password: hashedPassword });
  await newUser.save();
  res.json({ message: "User registered" });
});

app.post("/blog", async (req, res) => {
  const {
    _author,
    _title,
    _description,
    _content,
    _tags,
    _visibility,
    _banner,
  } = req.body;
  try {

	const user = await User.findOne({ username:_author });
	if (!user) return res.status(400).json({ message: `User ${_author} not found` });
	const testAuthorId = user._id;
    const newBlog = new Blog({
      author: testAuthorId,
      title: _title,
      description: _description,
      content: _content,
      tags: _tags,
      visibility: _visibility,
      banner: _banner,
    });

    await newBlog.validate();
    await newBlog.save();

    res
      .status(201)
      .json({ message: "Blog posted successfully.", blog: newBlog });
  } catch (error) {
    console.error("Error posting blog:", error);
    if (error.name === "ValidationError") {
      const errors = Object.keys(error.errors).map(
        (key) => error.errors[key].message
      );
      return res.status(400).json({ message: "Validation failed.", errors });
    }
    if (error.code === 11000) {
      return res
        .status(409)
        .json({ message: "A blog with this title already exists." });
    }

    res.status(500).json({ message: "Failed to post blog. Please try again." });
  }
});

app.get("/blog", async (req,res)=>{
  try {
    const blogs = await Blog.find({ visibility: true });
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: "An error occurred while fetching blogs.", error });
  }
});

const authRoutes = require("./routes/auth");
app.use("/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
