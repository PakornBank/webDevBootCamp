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
