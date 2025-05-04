import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  Container,
} from "@chakra-ui/react";

const Question11 = () => {
  const [username] = useState("John Doe");

  return (
    <Container maxW="container.md" py={6}>
      <VStack spacing={6} align="start">
        <Heading size="xl" color="teal.600">Props Drilling - Question 11</Heading>
        <TopMain name={username} />
      </VStack>
    </Container>
  );
};

export default Question11;

const TopMain = ({ name }) => (
  <Box>
    <Heading size="lg">TopMain Component</Heading>
    <MiddleMain name={name} />
  </Box>
);

const MiddleMain = ({ name }) => (
  <Box mt={4}>
    <Heading size="md">MiddleMain Component</Heading>
    <BottomMain name={name} />
  </Box>
);

const BottomMain = ({ name }) => (
  <Box mt={4}>
    <Heading size="sm">BottomMain Component</Heading>
    <BottomMainRight name={name} />
  </Box>
);

const BottomMainRight = ({ name }) => (
  <Box mt={4} p={4} bg="green.500" borderRadius="md">
    <Heading size="xs">BottomMainRight Component</Heading>
    <Text fontSize="md" mt={2}>Hello, <b>{name || "Stranger"}</b>!</Text>
  </Box>
);
