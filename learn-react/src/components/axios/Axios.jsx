import { useEffect, useState } from "react";
import { dataFetcher } from "../../utils";
import {
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Spinner,
} from "@chakra-ui/react";

export default function Dadjoke() {
  const [joke, setJoke] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //   const fetchData = async () => {
  //     try {
  //       const header = { headers: { Accept: "application/json" } };
  //       const url = "https://icanhazdadjoke.com/";
  //       const res = await dataFetcher(url, header);
  //       setJoke(res.data.joke);
  //     } catch (err) {
  //       console.log("ERROR!", err);
  //       setJoke(`Welp, no joke today cuz ${err}`);
  //     }
  //   };

  const fetchData = () => {
    setIsLoading(true);
    const header = { headers: { Accept: "application/json" } };
    const url = "https://icanhazdadjoke.com/";
    dataFetcher(url, header)
      .then((res) => {
        setIsLoading(false);
        setJoke(res.data.joke);
      })
      .catch((err) => {
        setIsLoading(false);
        setJoke(`Welp, no joke today cuz ${err}`);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Card w={"70%"}>
      <CardHeader fontWeight={700} fontSize={"1.5em"}>
        Dad Joke
      </CardHeader>
      <CardBody>
        {isLoading ? <Spinner></Spinner> : <Text>{joke}</Text>}
      </CardBody>
      <CardFooter>
        <Button onClick={fetchData}>new joke</Button>
      </CardFooter>
    </Card>
  );
}
