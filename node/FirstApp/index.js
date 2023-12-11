const express = require("express");
const app = express();

// app.use((req, res) => {
//   console.log("We got a request!");
//   res.send("<h1>This is my web page</h1>");
// });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is the home page.");
});

app.get("/cats", (req, res) => {
  res.send("MEOW!");
});

app.get("/dogs", (req, res) => {
  res.send("WOOOF!");
});

app.post("/cats", (req, res) => {
  const { breed, age } = req.body;
  res.send(`So you want a ${age} years old ${breed}?`);
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  res.send(`<h1>You requested ${subreddit} subreddit</h1>`);
});

app.get("/r/:subreddit/:postId", (req, res) => {
  const { subreddit, postId } = req.params;
  res.send(`<h1> Your requested post ${postId} of r/${subreddit}`);
});

app.get("/search", (req, res) => {
  const { q } = req.query;
  if (!q) res.send("<h1>Nothing found if nothing searched</h1>");
  res.send(`<h1>search result for ${q}</h1>`);
});

app.get("*", (req, res) => {
  res.send("I don't know that path");
});

app.post("*", (req, res) => {
  res.send("มั่วละ");
});

app.listen(3000, () => {
  console.log("LISTENING ON PORT 3000");
});
