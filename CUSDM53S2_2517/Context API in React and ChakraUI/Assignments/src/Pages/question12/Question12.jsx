import React, { createContext, useContext, useState } from "react";
import { Box, Button, VStack, Heading } from "@chakra-ui/react";

// 1. Create ThemeContext
const ThemeContext = createContext();

// 2. Theme Provider Component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Custom hook (optional, but cleaner)
const useTheme = () => useContext(ThemeContext);

// 4. Main App Component
const Question12 = () => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
};

export default Question12;

const App = () => {
  const { theme, toggleTheme } = useTheme();

  const bg = theme === "light" ? "gray.100" : "gray.700";
  const color = theme === "light" ? "black" : "white";

  return (
    <Box bg={bg} color={color} minH="100vh" p={6}>
      <VStack spacing={6} align="stretch">
        <Heading size="lg">Context API - Question 12</Heading>
        <Button onClick={toggleTheme} colorScheme="teal">
          Toggle Theme
        </Button>
        <BoxOne />
      </VStack>
    </Box>
  );
};

// 5. Nested Components
const BoxOne = () => {
  const { theme } = useTheme();
  return (
    <Box
      p={4}
      bg={theme === "light" ? "white" : "gray.600"}
      borderRadius="md"
      boxShadow="md"
    >
      <Heading size="md">Box One</Heading>
      <BoxTwo />
    </Box>
  );
};

const BoxTwo = () => {
  const { theme } = useTheme();
  return (
    <Box
      mt={3}
      p={4}
      bg={theme === "light" ? "gray.50" : "gray.500"}
      borderRadius="md"
    >
      <Heading size="sm">Box Two</Heading>
      <BoxThree />
    </Box>
  );
};

const BoxThree = () => {
  const { theme } = useTheme();
  return (
    <Box
      mt={3}
      p={4}
      bg={theme === "light" ? "gray.200" : "gray.400"}
      borderRadius="md"
    >
      <Heading size="xs">Box Three</Heading>
    </Box>
  );
};
