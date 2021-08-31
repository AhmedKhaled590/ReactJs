const express = require("express");
const cors = require("cors");
const e = require("express");

const app = express();

const whiteList = ["http://localhost:3000", "https://localhost:3443"];

var corsOptionsDelegate = (req, cb) => {
  var corsOptions;

  if (whiteList.indexOf(req.header("Origin"))) {
    corsOptions = { origin: true };
  } else {
    corsOptions = { origin: false };
  }
  cb(null, corsOptions);
};

exports.cors = cors();
exports.corsWithOptions = cors(corsOptionsDelegate);
