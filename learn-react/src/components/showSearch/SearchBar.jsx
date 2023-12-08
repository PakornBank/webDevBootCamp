import { Input, InputRightElement, InputGroup, Button } from "@chakra-ui/react";
import { useState } from "react";

export default function SearchBar({ handleSearch }) {
  const [query, setQuery] = useState("");

  return (
    <InputGroup maxWidth="400px" width="100%" mb="20px">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setQuery("");
          handleSearch(query);
        }}
        style={{ width: "100%" }}
      >
        <Input
          placeholder="Find TV shows"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        <InputRightElement width="5.5rem">
          <Button width="auto" height="1.75rem" size="sm" type="submit">
            Search
          </Button>
        </InputRightElement>
      </form>
    </InputGroup>
  );
}
