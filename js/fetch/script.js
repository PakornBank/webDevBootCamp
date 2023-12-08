// fetch("https://swapi.dev/api/people/1")
//   .then((res) => {
//     if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
//     console.log("RESOLVED!", res);
//     return res.json();
//   })
//   .then((data) => console.log("JSON DONE!", data))
//   .catch((err) => {
//     console.log(err);
//   });

// const loadData = async () => {
//   const res = await fetch("https://swapi.dev/api/people/f");
//   if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
//   const data = await res.json();
//   console.log(data);
//   return data;
// };

// loadData()
//   .then((data) => console.log(data))
//   .catch((err) => {
//     console.log(err);
//   });

const loadData = async () => {
  try {
    const res = await fetch("https://swapi.dev/api/people/f");
    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

fetch("https://swapi.dev/api/people/f")
  .then((response) => {
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
