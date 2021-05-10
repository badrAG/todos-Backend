const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema
const TodoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please give a title"],
      trim: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
    // listRef: { type: ObjectId, ref: "List" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Todo", TodoSchema);
