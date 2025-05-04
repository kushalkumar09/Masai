import React, { useState } from "react";
import { Routes, Route, Link as RouterLink, NavLink } from "react-router-dom";
import { Box, Flex, Link, Button, SkipNavLink } from "@chakra-ui/react";
import Question11 from "./Pages/question11/Question11";
import Question12 from "./Pages/question12/Question12";
import Question13 from "./Pages/question13/Question13";
import {Question14} from "./Pages/question14/Question14";


import Question15 from "./Pages/question15/Question15";

const App = () => {
  const [name, setName] = useState("");

  const questionRoutes = [
    "question11",
    "question12",
    "question13",
    "question14",
    "question15",
  ];

  return (
    <Box>
      <Flex
        as="nav"
        bg="gray.100"
        p={4}
        gap={4}
        align="center"
        wrap="wrap"
        borderBottom="1px solid"
        borderColor="gray.200"
      >
        <Link
          as={RouterLink}
          to="/question11"
          fontWeight="bold"
          color="teal.500"
          _hover={{ textDecoration: "none" }}
        >
          Home
        </Link>
        {questionRoutes.map((q) => (
          <Button
            as={RouterLink}
            key={q}
            to={`/${q}`}
            colorScheme="teal"
            size="sm"
            variant="solid"
            _hover={{ bg: "teal.600", color: "white" }}
          >
            {q.toUpperCase()}
          </Button>
        ))}
      </Flex>

      {/* Placeholder for Routes */}
      <Routes>
        <Route path="/question11" element={<Question11 />} />
        <Route path="/question12" element={<Question12 />} />
        <Route path="/question13" element={<Question13 />} />
        <Route path="/question14" element={<Question14 />} />
        <Route path="/question15" element={<Question15 />} />
      </Routes>
    </Box>
  );
};

export default App;
