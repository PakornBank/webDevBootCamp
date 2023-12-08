// export default async function dataFetcher(url, header) {
//   try {
//     const res = await axios.get(url, header);
//     return res;
//   } catch (err) {
//     console.log("ERROR!", err);
//     throw new Error("Failed to fetch data from url");
//   }
// }

export const dataFetcher = (url, config) =>
  axios
    .get(url, config)
    .then((result) => result)
    .catch((err) => {
      console.error("ERROR!", err);
      throw new Error("Failed to fetch data from url");
    });
