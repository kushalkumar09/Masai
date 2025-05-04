import { Flex } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import { AuthContextProvider } from "./contexts/AuthContext";
import { ThemeContextProvider, ThemeContext } from "./contexts/ThemeContext";
import { useContext } from "react";

function Question15() {
  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </AuthContextProvider>
  );
}

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <Flex
      direction="column"
      minH="100vh"
      bg={theme === "light" ? "white" : "gray.900"}
      color="black"
    >
      <Navbar />
      <Flex flex="1" direction={{ base: "column", md: "row" }}>
        <Sidebar />
        <MainContent />
      </Flex>
      <Footer />
    </Flex>
  );
}

export default Question15;
