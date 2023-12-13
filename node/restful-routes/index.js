const express = require("express");
const app = express();
const { v4: uuid } = require("uuid");
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

let comments = [
  {
    id: uuid(),
    username: "John",
    comment: "That's cool!",
  },
  {
    id: uuid(),
    username: "Mariah",
    comment: "Meet you there",
  },
  {
    id: uuid(),
    username: "Steve",
    comment: "Let's go guys!",
  },
];

app.post("/comments", (req, res) => {
  const { username, comment } = req.body;
  const id = uuid();
  comments.push({ id, username, comment });
  res.redirect("/comments");
});

app.get("/comments", (req, res) => {
  res.send(comments);
});

app.get("/comments/:id", (req, res) => {
  res.send(comments.find((comment) => comment.id === req.params.id));
});

// app.get("/comments/:id/edit", (req, res) => {
//   const comment = comments.find((comment) => comment.id === req.params.id);
//   comment.comment = req.body.comment;
//   res.redirect("/comments");
// });

// can call PATCH method by using method override
// http://localhost:3000/comments/{id}/edit?_method=PATCH
app.patch("/comments/:id/edit", (req, res) => {
  const targetComment = comments.find(
    (comment) => comment.id === req.params.id
  );
  targetComment.comment = req.body.comment;
  res.redirect("/comments");
});

app.delete("/comments/:id/delete", (req, res) => {
  comments = comments.filter((comment) => comment.id !== req.params.id);
  res.redirect("/comments");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
