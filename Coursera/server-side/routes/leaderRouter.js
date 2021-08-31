const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const leaderRouter = express.Router();
var mongoose = require("mongoose");
const leaders = require("../models/leaders");
var authenticate = require("../authenticate");
var cors = require('./cors')

app.use(bodyParser.json());

leaderRouter
  .route("/")
  .options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
  .get(cors.cors,(req, res, next) => {
    leaders
      .find({})
      .then(
        (leaders) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(leaders);
        },
        (err) => next(err)
      )
      .catch((err) => {
        next(err);
      });
  })

  .post(cors.corsWithOptions,authenticate.verifyUser, (req, res, next) => {
    if (authenticate.verifyAdmin(req.user)) {
      leaders
        .create(req.body)
        .then(
          (leaders) => {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json(leaders);
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

  .put(cors.corsWithOptions,authenticate.verifyUser, (req, res, next) => {
    if (authenticate.verifyAdmin(req.user)) {
      res.statusCode = 403;
      res.end("PUT operation not supported on /leaderes");
    } else {
      res.statusCode = 403;
      res.setHeader("Content-Type", "application/text");
      res.end("You are not authorized to perform this operation!");
    }
  })

  .delete(cors.corsWithOptions,authenticate.verifyUser, (req, res, next) => {
    if (authenticate.verifyAdmin(req.user)) {
      leaders
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

leaderRouter
  .route("/:leaderId")
  .get(cors.cors,(req, res, next) => {
    leaders
      .findById(req.params.leaderId)
      .then(
        (leaders) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(leaders);
        },
        (err) => next(err)
      )
      .catch((err) => {
        next(err);
      });
  })

  .post(cors.corsWithOptions,authenticate.verifyUser, (req, res, next) => {
    if (authenticate.verifyAdmin(req.user)) {
      res.statusCode = 403;
      res.end(
        "POST operation not supported on /leaderes/" + req.params.leaderId
      );
    } else {
      res.statusCode = 403;
      res.setHeader("Content-Type", "application/text");
      res.end("You are not authorized to perform this operation!");
    }
  })

  .put(cors.corsWithOptions,authenticate.verifyUser, (req, res, next) => {
    if (authenticate.verifyAdmin(req.user)) {
      leaders
        .findByIdAndUpdate(req.params.leaderId, { $set: req.body, new: true })
        .then(
          (leaders) => {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json(leaders);
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

  .delete(cors.corsWithOptions,authenticate.verifyUser, (req, res, next) => {
    if (authenticate.verifyAdmin(req.user)) {
      leaders
        .findByIdAndRemove(req.params.leaderId)
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

module.exports = leaderRouter;
