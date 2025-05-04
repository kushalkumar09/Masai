import { useContext } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext';

const Sidebar = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);

  return (
    <Box
      w={{ base: 'full', md: '250px' }}
      bg={theme === 'light' ? 'gray.100' : 'gray.800'}
      p="4"
    >
      <Text fontWeight="bold">Sidebar</Text>
      {isLoggedIn && <Text mt="2">Welcome, User!</Text>}
    </Box>
  );
};

export default Sidebar;
