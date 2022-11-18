const mongoose = require("mongoose");

const directorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    isRoot: {
      type: Boolean,
      required: false,
    },

    parentId: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
    },

    hasChild: {
      type: Boolean,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Directory", directorySchema);
