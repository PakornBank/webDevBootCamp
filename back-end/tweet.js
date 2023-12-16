const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/farmStand")
  .then(() => {
    console.log("Mongoose Connected!");
  })
  .catch((err) => {
    console.log("Failed connecting", err);
  });

const userSchema = new mongoose.Schema({
  username: String,
  age: Number,
});

const tweetSchema = new mongoose.Schema({
  text: String,
  likes: Number,
  user: { type: mongoose.Schema.ObjectId, ref: "User" },
});

const User = mongoose.model("User", userSchema);
const Tweet = mongoose.model("Tweet", tweetSchema);

const makeTweets = async () => {
  const user = await User.findOne({ username: "Pakorn" });
  const tweet1 = new Tweet({ text: "U cringe", likes: 6999 });
  tweet1.user = user;
  await tweet1.save();
};

const findTweet = async () => {
  await makeTweets();

  const tweets = await Tweet.find({}).populate("user", "username");
  console.log(tweets);
};

findTweet();
