import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Flex,
  Center,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import ShoppingForm from "./ShoppingForm";
import { v4 as uuid } from "uuid";

export default function ShoppingList() {
  const [list, setList] = useState([]);

  const handleAdd = (newItem) => {
    setList((prevList) => [...prevList, { ...newItem, id: uuid() }]);
  };

  return (
    <Stack border={"1px solid grey"} p={4} borderRadius={"lg"}>
      <h1>Shopping List</h1>
      <UnorderedList>
        {list.map((e) => (
          <ListItem key={e.id}>
            {e.item} : x{e.amount}
          </ListItem>
        ))}
      </UnorderedList>
      <ShoppingForm handleAdd={handleAdd}></ShoppingForm>
    </Stack>
  );
}
