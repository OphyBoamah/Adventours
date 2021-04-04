import {
  Box,
  Container,
  Grid,
  Heading,
  Image,
  Skeleton,
} from '@chakra-ui/react';
import TourCard from 'Components/Card/TourCard';
import SearchAndFilter from 'Components/SearchAndFilter';
import Layout from 'Container/Layout';
import useAPI from 'Context/APIContext';

const Tours = () => {
  const { tours, loading } = useAPI();
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
        {loading ? (
          <Grid templateColumns={{ md: 'repeat(3, 1fr)' }} gap={6}>
            {tours.slice(0, 6).map((tour) => (
              <Skeleton key={tour._id} height={90} />
            ))}
          </Grid>
        ) : (
          <Grid templateColumns={{ md: 'repeat(3, 1fr)' }} gap={6} mt={40}>
            {tours.map((tour) => (
              <TourCard key={tour._id} tour={tour} />
            ))}
          </Grid>
        )}
      </Container>
    </Layout>
  );
};

export default Tours;
