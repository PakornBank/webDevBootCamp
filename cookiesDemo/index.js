const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(cookieParser("thisismysecret")); // if changed the current cookies will be invalid

app.get("/greet", (req, res) => {
	const { name } = req.cookies;
	res.send(`HEY, THERE ${name}!`);
});

app.get("/getSignedCookie", (req, res) => {
	res.cookie("fruit", "grape", { signed: true });
	res.send("sent a signed cookie");
});

app.get("/verifyfruit", (req, res) => {
	console.log(req.signedCookies);
	res.send(req.signedCookies);
});

app.get("/setname", (req, res) => {
	res.cookie("name", "pakorn");
	res.send("Sent you a cookie");
});

app.listen(3000, () => {
	console.log("Listening on port 3000");
});