import { Button, ButtonGroup, Center } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";
import { useState } from "react";
import { Badge } from "@chakra-ui/react";

export default function ScoreKeeper({ player, goal }) {
  const [scores, setScores] = useState(new Array(player).fill(0));

  const incrementScore = (index) => {
    setScores((oldScores) => {
      const newScores = [...oldScores];
      newScores[index]++;
      return newScores;
    });
  };

  const resetScore = () => {
    setScores(new Array(player).fill(0));
  };

  return (
    <Flex
      direction={"column"}
      align={"center"}
      justify={"center"}
      height={"100vh"}
    >
      <ul>
        {scores.map((score, index) => {
          return (
            <li key={index}>
              Player {index + 1}: {score}
              <Button
                colorScheme="gray"
                variant="solid"
                onClick={() => incrementScore(index)}
              >
                +1
              </Button>
              {score >= goal && <Badge colorScheme="green">Winner!</Badge>}
            </li>
          );
        })}
      </ul>
      <Button colorScheme="gray" variant="solid" onClick={resetScore}>
        reset
      </Button>
    </Flex>
  );
}
