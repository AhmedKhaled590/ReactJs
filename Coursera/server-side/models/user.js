var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var passportLocalMongoose = require("passport-local-mongoose");

const userScehme = new Schema({
  admin: {
    type: Boolean,
    default: false,
  },
});

userScehme.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userScehme);
