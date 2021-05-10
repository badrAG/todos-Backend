const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema(
  {
    name: {
        type: String,
        required: [true, 'Please give a name'],
        trim: true,
        maxlength: 32,
        unique: true
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("List", ListSchema);
