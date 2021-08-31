const express = require("express");
const bodyParser = require("body-parser");
var authenticate = require("../authenticate");
const multer = require("multer");

const uploadRouter = express.Router();

uploadRouter.use(bodyParser.json());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const imageFileFilter = (req, file, cb) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    return cb(new Error("You can upload only image files!"), false);
  }
  cb(null, true);
};

const upload = multer({ storage: storage, fileFilter: imageFileFilter });

uploadRouter
  .route("/")
  .post(authenticate.verifyUser, (req, res, next) => {
    if (authenticate.verifyAdmin) {
      upload.single("imageFile");
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(req.file);
    } else {
      res.statusCode = 403;
      res.setHeader("Content-Type", "application/text");
      res.end("You are not authorized to perform this operation!");
    }
  })
  .get((req, res, next) => {
    res.statusCode = 403;
    res.end("GET operation not supported on /dishes");
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /dishes");
  })
  .delete((req, res, next) => {
    res.statusCode = 403;
    res.end("DELETE operation not supported on /dishes");
  });

module.exports = uploadRouter;
