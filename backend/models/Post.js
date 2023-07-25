const mongoose = require("mongoose");
const slugify = require("slugify");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

// Middleware to automatically generate and save the slug before saving the post
postSchema.pre("save", function (next) {
  if (this.isModified("title")) {
    const titleSlug = slugify(this.title, {
      lower: true,
      remove: /[*+~.()'"!:@]/g,
    });
    this.slug = titleSlug.replace(/,/g, "-");
  }
  next();
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
