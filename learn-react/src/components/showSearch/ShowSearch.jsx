import { Card, Flex, Wrap } from "@chakra-ui/react";
import SearchBar from "./SearchBar";
import { useState } from "react";
const url = "https://api.tvmaze.com/search/shows";
import { dataFetcher } from "../../utils";
import ShowsList from "./ShowsList";
import Navbar from "./Navbar";

export default function ShowSearch() {
  const [showsData, setShowsData] = useState([]);

  const handleSearch = (query) => {
    const config = { params: { q: query } };
    dataFetcher(url, config)
      .then((res) => {
        console.log(res.data);
        setShowsData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <Navbar></Navbar>
      <Flex
        w={{ base: "100%", sm: "420px", lg: "820px", xl: "1210px" }}
        minH={"100vh"}
        bg={"white"}
        align={"center"}
        direction={"column"}
        padding={"20px"}
      >
        <SearchBar handleSearch={handleSearch}></SearchBar>
        <ShowsList showsData={showsData}></ShowsList>
      </Flex>
    </>
  );
}
