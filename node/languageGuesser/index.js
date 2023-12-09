import { franc, francAll } from "franc";
import langs from "langs";

const input = process.argv[2];
try {
  const code = franc(input);
  // console.log(code);
  if (code === "und") {
    console.log("undefined");
  } else {
    const country = langs.where("3", code);
    console.log(country.name);
  }
} catch (err) {
  console.log(err);
}
