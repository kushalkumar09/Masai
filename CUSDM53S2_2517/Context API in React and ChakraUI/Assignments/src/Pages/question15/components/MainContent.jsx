import { useContext } from 'react';
import { Grid, Box, Text } from '@chakra-ui/react';
import { ThemeContext } from '../contexts/ThemeContext';

const products = ['Product A', 'Product B', 'Product C', 'Product D'];

const MainContent = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Grid
      templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
      gap={4}
      p={4}
      flex="1"
    >
      {products.map((item, i) => (
        <Box
          key={i}
          p={6}
          bg={theme === 'light' ? 'gray.200' : 'gray.600'}
          borderRadius="md"
          boxShadow="md"
          color="black"
        >
          <Text>{item}</Text>
        </Box>
      ))}
    </Grid>
  );
};

export default MainContent;
