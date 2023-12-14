const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/movieApp")
  .then(() => {
    console.log("Mongoose Connected!");
  })
  .catch((err) => {
    console.log(err);
  });

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  rating: String,
});

const Movie = mongoose.model("Movie", movieSchema);

const teeyod = new Movie({
  title: "Teeyod",
  year: 2023,
  score: 6.9,
  rating: "R",
});

// teeyod
//   .save()
//   .then(() => {
//     console.log("Saved");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Movie.insertMany([
//   { title: "Amelie", year: 2001, score: 8.3, reating: "R" },
//   { title: "Alien", year: 1979, score: 8.1, rating: "R" },
// ])
//   .then((data) => {
//     console.log("Inserted", data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
