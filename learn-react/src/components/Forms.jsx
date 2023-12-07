import { Stack, Flex, Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import PasswordInput from "./PasswordInput";

export default function Form() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <Flex justifyContent={"center"} alignItems={"center"} minH={"100vh"}>
      <Stack
        maxW={"sm"}
        borderWidth={1}
        borderRadius={"md"}
        p={3}
        ml={"auto"}
        mr={"auto"}
      >
        <Input
          variant={"filled"}
          placeholder="Username"
          onChange={handleChange}
          name="username"
          value={formData.username}
        ></Input>
        <PasswordInput
          handleChange={handleChange}
          password={formData.password}
        ></PasswordInput>
        <Button
          colorScheme="teal"
          variant="solid"
          w={20}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Stack>
    </Flex>
  );
}
