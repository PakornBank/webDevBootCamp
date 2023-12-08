// axios
//   .get("https://swapi.dev/api/pesdfsople/1")
//   .then((result) => {
//     console.log(result.data);
//   })
//   .catch((err) => {
//     console.log("ERROR!", err);
//   });

const getStarWarsPerson = async (id) => {
  try {
    const res = await axios.get(`https://swapi.dev/api/people/${id}`);
    console.log(res.data);
  } catch (err) {
    console.log("ERROR!", err);
  }
};

const getById = (id) => {
  axios
    .get(`https://swapi.dev/api/people/${id}`)
    .then((res) => console.log(res.data))
    .catch((err) => console.log("ERROR!", err));
};

const getDadJokes = async () => {
  try {
    const header = { headers: { Accept: "application/json" } };
    const res = await axios.get("https://icanhazdadjoke.com/", header);
    console.log(res);
  } catch (err) {
    console.log("ERROR!", err);
  }
};
