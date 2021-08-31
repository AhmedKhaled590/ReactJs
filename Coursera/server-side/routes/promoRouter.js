const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const promoRouter = express.Router();
var mongoose = require("mongoose");
const promos = require("../models/promotions");
var authenticate = require("../authenticate");
var cors = require("./cors");
app.use(bodyParser.json());

promoRouter
  .route("/")
  .options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
  .get(cors.cors, (req, res, next) => {
    promos
      .find({})
      .then(
        (promos) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(promos);
        },
        (err) => next(err)
      )
      .catch((err) => {
        next(err);
      });
  })

  .post(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    if (authenticate.verifyAdmin(req.user)) {
      promos
        .create(req.body)
        .then(
          (promos) => {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json(promos);
          },
          (err) => next(err)
        )
        .catch((err) => {
          next(err);
        });
    } else {
      res.statusCode = 403;
      res.setHeader("Content-Type", "application/text");
      res.end("You are not authorized to perform this operation!");
    }
  })

  .put(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /promos");
  })

  .delete(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    if (authenticate.verifyAdmin(req.user)) {
      promos
        .remove({})
        .then(
          (resp) => {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json(resp);
          },
          (err) => next(err)
        )
        .catch((err) => {
          next(err);
        });
    } else {
      res.statusCode = 403;
      res.setHeader("Content-Type", "application/text");
      res.end("You are not authorized to perform this operation!");
    }
  });

promoRouter
  .route("/:promoId")
  .get(cors.cors, (req, res, next) => {
    promos
      .findById(req.params.promoId)
      .then(
        (promos) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(promos);
        },
        (err) => next(err)
      )
      .catch((err) => {
        next(err);
      });
  })

  .post(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    res.statusCode = 403;
    res.end("POST operation not supported on /promos/" + req.params.promoId);
  })

  .put(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    if (authenticate.verifyAdmin(req.user)) {
      promos
        .findByIdAndUpdate(req.params.promoId, { $set: req.body, new: true })
        .then(
          (promos) => {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json(promos);
          },
          (err) => next(err)
        )
        .catch((err) => {
          next(err);
        });
    } else {
      res.statusCode = 403;
      res.setHeader("Content-Type", "application/text");
      res.end("You are not authorized to perform this operation!");
    }
  })

  .delete(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    if (authenticate.verifyAdmin(req.user)) {
      promos
        .findByIdAndRemove(req.params.promoId)
        .then(
          (resp) => {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json(resp);
          },
          (err) => next(err)
        )
        .catch((err) => {
          next(err);
        });
    } else {
      res.statusCode = 403;
      res.setHeader("Content-Type", "application/text");
      res.end("You are not authorized to perform this operation!");
    }
  });

module.exports = promoRouter;
