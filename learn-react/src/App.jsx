import ScoreKeeper from "./components/ScoreKeeper";
import Form from "./components/Forms.jsx";
import { Flex } from "@chakra-ui/react";
import ShoppingList from "./components/shoppingList/ShoppingList.jsx";
import Dadjoke from "./components/axios/Axios.jsx";
import ShowSearch from "./components/showSearch/ShowSearch.jsx";

function App() {
  return (
    <>
      <Flex
        bg={"beige"}
        minH={"100vh"}
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {/* <ScoreKeeper player={10} goal={5}></ScoreKeeper> */}
        {/* <Form></Form> */}
        {/* <ShoppingList></ShoppingList> */}
        {/* <Dadjoke></Dadjoke> */}
        <ShowSearch></ShowSearch>
      </Flex>
    </>
  );
}

export default App;
