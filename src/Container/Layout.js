import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import Nav from './Nav';

const Layout = ({ children }) => {
  return (
    <Box pos='relative' fontFamily='body'>
      <Nav />
      <Box>{children}</Box>
      <Flex align='center' justify='center' py={14}>
        <Text fontSize='sm'>&copy; 2020. AdvenTour. All rights reserved.</Text>
      </Flex>
    </Box>
  );
};

export default Layout;
