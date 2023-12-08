import {
  Card,
  Wrap,
  Image,
  CardBody,
  Stack,
  Text,
  Divider,
  CardFooter,
  Button,
  ButtonGroup,
  Heading,
  Link,
} from "@chakra-ui/react";

import { ExternalLinkIcon, StarIcon } from "@chakra-ui/icons";

export default function ShowsList({ showsData }) {
  return (
    <Wrap justify={{ base: "center", lg: "space-between" }}>
      {showsData.map((data) => {
        return (
          <Card maxW="sm" key={data.show.id}>
            <CardBody>
              {data.show.image && (
                <Image
                  src={data.show.image.medium}
                  alt={data.show.name}
                  borderRadius="lg"
                />
              )}

              <Stack mt="6" spacing="3">
                <Heading size="md">{data.show.name}</Heading>
                <Text
                  dangerouslySetInnerHTML={{ __html: data.show.summary }}
                ></Text>
                <Text color="blue.600" fontSize="2xl">
                  {Math.floor(data.score * 50) / 10} <StarIcon mb={"5px"} />
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                {data.show.url && (
                  <Link href={data.show.url} isExternal>
                    <Button variant="solid" colorScheme="blue">
                      TV maze <ExternalLinkIcon ml={"0.3rem"} />
                    </Button>
                  </Link>
                )}

                {data.show.officialSite && (
                  <Link href={data.show.officialSite} isExternal>
                    <Button variant="ghost" colorScheme="blue">
                      official site <ExternalLinkIcon ml={"0.3rem"} />
                    </Button>
                  </Link>
                )}
              </ButtonGroup>
            </CardFooter>
          </Card>
        );
      })}
    </Wrap>
  );
}
