import { Box, Container, Grid, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const MyBookings = () => {
  return (
    <Box>
      <Box mb={10}>
        <Heading as='h3' fontSize={{ md: '3xl' }}>
          My Bookings
        </Heading>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, in.
        </Text>
      </Box>

      <Container maxW='5xl'>
        <Grid templateColumns={{ md: 'repeat(3, 1fr)' }} gap={6}></Grid>
      </Container>
    </Box>
  );
};

export default MyBookings;
