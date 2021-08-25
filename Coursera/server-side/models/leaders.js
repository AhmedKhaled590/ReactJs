var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var leaderSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    label: {
      type: String,
      default: "",
    },
    designation: {
      type: String,
      required: true,
    },
    abbr: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

var Leaders = mongoose.model("leader", leaderSchema);
module.exports = Leaders;
