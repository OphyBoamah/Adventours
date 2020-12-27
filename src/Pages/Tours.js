import { Box, Container, Grid, Heading, Image } from '@chakra-ui/react';
import axios from 'axios';
import TourCard from 'Components/Card/TourCard';
import SearchAndFilter from 'Components/SearchAndFilter';
import Layout from 'Container/Layout';
import React, { useState, useEffect } from 'react';

const Tours = () => {
  const [tourData, setTourData] = useState([]);
  const fetchData = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_KEY}/tours`);
    setTourData(res.data.data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Layout>
      <Box as='header' pos='absolute' top={0}>
        <Image
          src={require('../Assets/images/slide-1.jpg').default}
          h='40vh'
          w='100vw'
          objectFit='cover'
        />
        <Box
          pos='absolute'
          top={0}
          bg='rgba(0,0,0, 0.5)'
          left={0}
          bottom={0}
          right={0}
        ></Box>
        <Box pos='absolute' zIndex={10} top={40} left={20} color='white'>
          <Heading as='h2' fontWeight={900} fontSize='7xl'>
            See all our adventure tours
          </Heading>
        </Box>
      </Box>
      <Container maxW='6xl' mt={80}>
        <SearchAndFilter />
      </Container>
      <Container maxW='6xl' mt={20}>
        <Grid templateColumns='repeat(3, 1fr)' gap={6}>
          {tourData.map((tour) => (
            <TourCard key={tour._id} tour={tour} />
          ))}
        </Grid>
      </Container>
    </Layout>
  );
};

export default Tours;
