import React, { createContext, useContext, useState } from "react";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";

// 1. Create Auth Context
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleAuth = () => setIsLoggedIn((prev) => !prev);

  return (
    <AuthContext.Provider value={{ isLoggedIn, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook
const useAuth = () => useContext(AuthContext);

// 2. Main App
const Question13 = () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};

export default Question13;

// 3. App Structure
const App = () => {
  return (
    <Box minH="100vh" bg="gray.50" color={"black"} p={6}>
      <Navbar />
      <Main />
      <Footer />
    </Box>
  );
};

// 4. Components
const Navbar = () => {
  const { isLoggedIn, toggleAuth } = useAuth();

  return (
    <Flex justify="space-between" align="center" mb={6} p={4} bg="teal.500" color="white">
      <Heading size="md">Auth Context App</Heading>
      <Button onClick={toggleAuth} colorScheme="whiteAlpha">
        {isLoggedIn ? "Logout" : "Login"}
      </Button>
    </Flex>
  );
};

const Main = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box p={6} bg="white" boxShadow="md" borderRadius="md" mb={6}>
      <Heading size="md">
        {isLoggedIn ? "Welcome back, User!" : "Please log in to continue."}
      </Heading>
    </Box>
  );
};

const Footer = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box textAlign="center" p={4} bg="gray.100" borderRadius="md">
      <Text fontSize="lg">
        {isLoggedIn ? "✅ Welcome, User" : "🔒 Please log in"}
      </Text>
    </Box>
  );
};
