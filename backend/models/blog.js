const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: { type: String, required: true, unique: true },
    visibility: { type: Boolean, default: false },
    banner: { type: String }, // base64 encoded string
    tags: [{ type: String }],
    description: { type: String },
    content: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", BlogSchema);
