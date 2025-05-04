import React, { useContext } from 'react';
import {

  Box,
  Flex,
  Grid,
  Button,
  Text,
  Theme,
} from '@chakra-ui/react';
import { AuthContextProvider, AuthContext } from './AuthContext';
import { ThemeContextProvider, ThemeContext } from './ThemeContext';

export const Question14 = () => {
  return (
    <AuthContextProvider>
      <ThemeContextProvider>
      
          <AppContent />
  
      </ThemeContextProvider>
    </AuthContextProvider>
  );
};


const AppContent = () => {
  const { isLoggedIn, toggleAuth } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const bgColor = theme === 'light' ? 'gray.100' : 'gray.700';
  const cardBg = theme === 'light' ? 'gray.200' : 'gray.600';
  const footerBg = theme === 'light' ? 'gray.300' : 'gray.800';
  const textColor = 'black';

  return (
    <Theme appearance={theme}> {/* Setting the appearance here */}
      <Box bg={bgColor} minH="100vh" color={textColor}>
        {/* Navbar */}
        <Flex
          as="nav"
          p="4"
          justifyContent="space-between"
          alignItems="center"
          bg={bgColor}
          boxShadow="sm"
        >
          <Button onClick={toggleAuth}>
            {isLoggedIn ? 'Log Out' : 'Log In'}
          </Button>
          <Button onClick={toggleTheme}>
            Toggle to {theme === 'light' ? 'Dark' : 'Light'} Theme
          </Button>
        </Flex>

        {/* Grid */}
        <Grid
          templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}
          gap={4}
          p={4}
        >
          {['Card 1', 'Card 2', 'Card 3'].map((card) => (
            <Box
              key={card}
              p={6}
              bg={cardBg}
              boxShadow="md"
              borderRadius="md"
              color={textColor}
            >
              <Text fontWeight="bold">{card}</Text>
              <Text mt={2}>This is a sample card in the {theme} theme.</Text>
            </Box>
          ))}
        </Grid>

        {/* Footer */}
        <Box as="footer" p="4" bg={footerBg} textAlign="center" color={textColor}>
          <Text>
            {isLoggedIn ? '✅ Welcome, User' : '🔒 Please log in'}
          </Text>
        </Box>
      </Box>
    </Theme>
  );
};
