import { useContext } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { ThemeContext } from '../contexts/ThemeContext';

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Box
      p="4"
      bg={theme === 'light' ? 'gray.300' : 'gray.700'}
      textAlign="center"
    >
      <Text color="black">Footer Content</Text>
    </Box>
  );
};

export default Footer;
