import { Input, Stack, Button, FormControl, FormLabel } from "@chakra-ui/react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { useState } from "react";

export default function ShoppingForm({ handleAdd }) {
  const [itemData, setItemData] = useState({
    item: "",
    amount: "",
  });

  const handleChange = (e) => {
    setItemData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAmount = (value) => {
    setItemData((prevData) => ({ ...prevData, amount: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd(itemData);
    setItemData({ item: "", amount: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack>
        <FormControl>
          <FormLabel>Item</FormLabel>
          <Input
            placeholder="Item"
            name="item"
            type="text"
            value={itemData.item}
            onChange={handleChange}
            required
          />
          <FormLabel>Amount</FormLabel>

          <NumberInput
            defaultValue={1}
            min={1}
            value={itemData.amount}
            onChange={handleAmount}
            required
          >
            <NumberInputField placeholder="Amount" name="amount" />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>

        <Button type="submit">Add</Button>
      </Stack>
    </form>
  );
}
