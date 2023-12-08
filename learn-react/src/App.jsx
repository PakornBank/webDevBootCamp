import ScoreKeeper from "./components/ScoreKeeper";
import Form from "./components/Forms.jsx";
import { Flex } from "@chakra-ui/react";
import ShoppingList from "./components/shoppingList/ShoppingList.jsx";

function App() {
  return (
    <>
      <Flex
        minH={"100vh"}
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {/* <ScoreKeeper player={10} goal={5}></ScoreKeeper> */}
        {/* <Form></Form> */}
        <ShoppingList></ShoppingList>
      </Flex>
    </>
  );
}

export default App;
