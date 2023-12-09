const jokes = require("give-me-a-joke");
const colors = require("colors");
const figlet = require("figlet");

jokes.getRandomDadJoke((joke) => {
  console.log(joke);
  figlet(joke, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(data.rainbow);
  });
});
