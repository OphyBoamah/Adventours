import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const MyReviews = () => {
  return (
    <Box>
      <Box mb={10}>
        <Heading as='h3' fontSize={{ md: '3xl' }}>
          My Reviews
        </Heading>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, in.
        </Text>
      </Box>
    </Box>
  );
};

export default MyReviews;
