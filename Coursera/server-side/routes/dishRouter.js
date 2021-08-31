const express = require("express");
const bodyParser = require("body-parser");
var mongoose = require("mongoose");
const Dishes = require("../models/dishes");
var authenticate = require("../authenticate");
var cors = require("./cors");

const app = express();
const dishRouter = express.Router();

app.use(bodyParser.json());

dishRouter
  .route("/")
  .options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
  .get(cors.cors,(req, res, next) => {
    Dishes.find({})
      .populate("comments.author")
      .then(
        (dishes) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(dishes);
        },
        (err) => next(err)
      )
      .catch((err) => {
        next(err);
      });
  })

  .post(cors.corsWithOptions,authenticate.verifyUser, (req, res, next) => {
    if (authenticate.verifyAdmin(req.user)) {
      Dishes.create(req.body)
        .then(
          (dish) => {
            console.log("Dish Created ", dish);
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json(dish);
          },
          (err) => next(err)
        )
        .catch((err) => next(err));
    } else {
      res.statusCode = 403;
      res.setHeader("Content-Type", "application/text");
      res.end("You are not authorized to perform this operation!");
    }
  })

  .put(cors.corsWithOptions,authenticate.verifyUser, (req, res, next) => {
    if (authenticate.verifyAdmin(req.user)) {
      res.statusCode = 403;
      res.end("PUT operation not supported on /dishes");
    } else {
      res.statusCode = 403;
      res.setHeader("Content-Type", "application/text");
      res.end("You are not authorized to perform this operation!");
    }
  })

  .delete(cors.corsWithOptions,authenticate.verifyUser, (req, res, next) => {
    if (authenticate.verifyAdmin(req.user)) {
      Dishes.remove({})
        .then(
          (resp) => {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json(resp);
          },
          (err) => next(err)
        )
        .catch((err) => next(err));
    } else {
      res.statusCode = 403;
      res.setHeader("Content-Type", "application/text");
      res.end("You are not authorized to perform this operation!");
    }
  });

dishRouter
  .route("/:dishId")
  .get(cors.cors,(req, res, next) => {
    Dishes.findById(req.params.dishId)
      .populate("comments.author")
      .then(
        (dish) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(dish);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })

  .post(cors.corsWithOptions,authenticate.verifyUser, (req, res, next) => {
    if (authenticate.verifyAdmin(req.user)) {
      res.statusCode = 403;
      res.end("POST operation not supported on /dishes/" + req.params.dishId);
    } else {
      res.statusCode = 403;
      res.setHeader("Content-Type", "application/text");
      res.end("You are not authorized to perform this operation!");
    }
  })

  .put(cors.corsWithOptions,authenticate.verifyUser, (req, res, next) => {
    if (authenticate.verifyAdmin(req.user)) {
      Dishes.findByIdAndUpdate(req.params.dishId, {
        $set: req.body,
        new: true,
      })
        .then(
          (dish) => {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json(dish);
          },
          (err) => next(err)
        )
        .catch((err) => next(err));
    } else {
      res.statusCode = 403;
      res.setHeader("Content-Type", "application/text");
      res.end("You are not authorized to perform this operation!");
    }
  })

  .delete(cors.corsWithOptions,authenticate.verifyUser, (req, res, next) => {
    if (authenticate.verifyAdmin(req.user)) {
      Dishes.findByIdAndRemove(req.params.dishId)
        .then(
          (resp) => {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json(resp);
          },
          (err) => next(err)
        )
        .catch((err) => next(err));
    } else {
      res.statusCode = 403;
      res.setHeader("Content-Type", "application/text");
      res.end("You are not authorized to perform this operation!");
    }
  });
dishRouter
  .route("/:dishId/comments")
  .get(cors.cors,(req, res, next) => {
    Dishes.findById(req.params.dishId)
      .populate("comments.author")
      .then(
        (dish) => {
          if (dish != null) {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json(dish.comments);
          } else {
            err = new Error("Dish " + req.params.dishId + " not found");
            err.status = 404;
            return next(err);
          }
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })
  .post(cors.corsWithOptions,authenticate.verifyUser, (req, res, next) => {
    Dishes.findById(req.params.dishId)
      .then(
        (dish) => {
          if (dish != null) {
            req.body.author = req.user._id;
            dish.comments.push(req.body);
            dish.save().then(
              (dish) => {
                Dishes.findById(dish._id)
                  .populate("comments.author")
                  .then((dish) => {
                    res.statusCode = 200;
                    res.setHeader("Content-Type", "application/json");
                    res.json(dish);
                  });
              },
              (err) => next(err)
            );
          } else {
            err = new Error("Dish " + req.params.dishId + " not found");
            err.status = 404;
            return next(err);
          }
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })
  .put(cors.corsWithOptions,authenticate.verifyUser, (req, res, next) => {
    res.statusCode = 403;
    res.end(
      "PUT operation not supported on /dishes/" +
        req.params.dishId +
        "/comments"
    );
  })
  .delete(cors.corsWithOptions,authenticate.verifyUser, (req, res, next) => {
    if (authenticate.verifyAdmin(req.user)) {
      Dishes.findById(req.params.dishId)
        .then(
          (dish) => {
            if (dish != null) {
              for (var i = dish.comments.length - 1; i >= 0; i--) {
                dish.comments.id(dish.comments[i]._id).remove();
              }
              dish.save().then(
                (dish) => {
                  Dishes.findById(dish._id)
                    .populate("comments.author")
                    .then((dish) => {
                      res.statusCode = 200;
                      res.setHeader("Content-Type", "application/json");
                      res.json(dish);
                    });
                },
                (err) => next(err)
              );
            } else {
              err = new Error("Dish " + req.params.dishId + " not found");
              err.status = 404;
              return next(err);
            }
          },
          (err) => next(err)
        )
        .catch((err) => next(err));
    } else {
      res.statusCode = 403;
      res.setHeader("Content-Type", "application/text");
      res.end("You are not authorized to perform this operation!");
    }
  });

dishRouter
  .route("/:dishId/comments/:commentId")
  .get(cors.cors,(req, res, next) => {
    Dishes.findById(req.params.dishId)
      .populate("comments.author")
      .then(
        (dish) => {
          if (dish != null && dish.comments.id(req.params.commentId) != null) {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json(dish.comments.id(req.params.commentId));
          } else if (dish == null) {
            err = new Error("Dish " + req.params.dishId + " not found");
            err.status = 404;
            return next(err);
          } else {
            err = new Error("Comment " + req.params.commentId + " not found");
            err.status = 404;
            return next(err);
          }
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })
  .post(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    res.statusCode = 403;
    res.end(
      "POST operation not supported on /dishes/" +
        req.params.dishId +
        "/comments/" +
        req.params.commentId
    );
  })
  .put(cors.corsWithOptions,authenticate.verifyUser, (req, res, next) => {
    Dishes.findById(req.params.dishId)
      .then(
        (dish) => {
          console.log(
            dish.comments.id(req.params.commentId)._doc.author,
            req.user._id
          );
          if (
            dish != null &&
            dish.comments.id(req.params.commentId) != null &&
            dish.comments.id(req.params.commentId)._doc.author != null &&
            dish.comments
              .id(req.params.commentId)
              ._doc.author.equals(req.user._id)
          ) {
            console.log();
            if (req.body.rating) {
              dish.comments.id(req.params.commentId).rating = req.body.rating;
            }
            if (req.body.comment) {
              dish.comments.id(req.params.commentId).comment = req.body.comment;
            }
            dish.save().then(
              (dish) => {
                Dishes.findById(dish._id)
                  .populate("comments.author")
                  .then((dish) => {
                    res.statusCode = 200;
                    res.setHeader("Content-Type", "application/json");
                    res.json(dish);
                  });
              },
              (err) => next(err)
            );
          } else if (dish == null) {
            err = new Error("Dish " + req.params.dishId + " not found");
            err.status = 404;
            return next(err);
          } else {
            err = new Error("Comment " + req.params.commentId + " not found");
            err.status = 404;
            return next(err);
          }
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })
  .delete(cors.corsWithOptions,authenticate.verifyUser, (req, res, next) => {
    Dishes.findById(req.params.dishId)
      .then(
        (dish) => {
          if (dish != null && dish.comments.id(req.params.commentId) != null) {
            dish.comments.id(req.params.commentId).remove();
            dish.save().then(
              (dish) => {
                Dishes.findById(dish._id)
                  .populate("comments.author")
                  .then((dish) => {
                    res.statusCode = 200;
                    res.setHeader("Content-Type", "application/json");
                    res.json(dish);
                  });
              },
              (err) => next(err)
            );
          } else if (dish == null) {
            err = new Error("Dish " + req.params.dishId + " not found");
            err.status = 404;
            return next(err);
          } else {
            err = new Error("Comment " + req.params.commentId + " not found");
            err.status = 404;
            return next(err);
          }
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  });

module.exports = dishRouter;