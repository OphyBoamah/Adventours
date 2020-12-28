import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import Nav from './Nav';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  return (
    <Box pos='relative' fontFamily='body'>
      <Nav />
      <Box>{children}</Box>
      {pathname !== 'signup' ||
        (pathname !== 'signin' && (
          <Flex as='footer' align='center' justify='center' py={14}>
            <Text fontSize='sm'>
              &copy; 2020. AdvenTour. All rights reserved.
            </Text>
          </Flex>
        ))}
    </Box>
  );
};

export default Layout;
