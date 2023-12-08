// async function sing() {
//   throw new Error("cringe");
//   return "do re mi";
// }

// sing()
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

const login = async (username, password) => {
  if (!username || !password) {
    throw "password and username required!";
  }
  if (password === "amogusSussy") {
    return "Logged in";
  }
  throw "Failed";
};

const doLogin = () => {
  login(prompt("Enter username:"), prompt("Enter password:"))
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
};

function delayConsoleLog(message, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(message);
      resolve();
    }, delay);
  });
}

async function rainbow() {
  await delayConsoleLog("purple", 1000);
  await delayConsoleLog("magenta", 1000);
  await delayConsoleLog("blue", 1000);
  await delayConsoleLog("green", 1000);
  await delayConsoleLog("yellow", 1000);
  await delayConsoleLog("orange", 1000);
  await delayConsoleLog("red", 1000);
  return "Done";
}

// rainbow().then((result) => console.log(result));

const printRainbow = async () => {
  await rainbow();
  console.log("done");
};

const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    const rand = Math.random();
    setTimeout(() => {
      if (rand > 0.5) resolve(`your fake data from ${url}`);
      else reject(`error with ${url}`);
    }, 1000);
  });
};

const doFakeRequest = () => {
  fakeRequest("url/fakeData")
    .then((message) => {
      console.log(message);
      return fakeRequest("url.fakeData2");
    })
    .then((message) => {
      console.log(message);
    })
    .catch((err) => {
      console.log(err);
    });
};

async function makeTwoRequest() {
  try {
    const data1 = await fakeRequest("user1");
    // console.log(data1);
    const data2 = await fakeRequest("user2");
    // console.log(data2);
    console.log([data1, data2]);
  } catch (err) {
    console.log(err);
  }
}

// makeTwoRequest()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
