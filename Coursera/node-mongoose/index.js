var mongoose = require("mongoose");
var Dishes = require("../server-side/models/dishes");

var url = "mongodb://localhost:27017/conFusion";
const connect = mongoose.connect(url);
connect.then((db) => {
  console.log("Connected correctly to server");

  Dishes.create({
    name: "Uthappizza",
    description: "test",
  })
    .then((dish) => {
      console.log(dish._doc);
      return Dishes.findByIdAndUpdate(dish._id, {
        $set: { describtion: "updated test" },
      });
    })
    .then((dish) => {
      console.log(dish);
      dish.comments.push({
        rating: 5,
        comment: "I'm getting a sinking feeling!",
        author: "Leonardo di Carpaccio",
      });

      return dish.save();
    })
    .then((dish) => {
      console.log(dish.comments);
      return Dishes.remove({});
    })
    .then(() => {
      return mongoose.connection.close();
    })
    .catch((err) => {
      console.log(err);
    });
});
