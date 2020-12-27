import React, { useState } from 'react';
import Layout from 'Container/Layout';
import {
  Box,
  Container,
  Divider,
  Flex,
  Grid,
  Heading,
  Icon,
  Image,
  Input,
  Text,
} from '@chakra-ui/react';
import { BsArrowRightShort } from 'react-icons/bs';
import { Quote } from 'theme/Icons';
import TourCard from 'Components/Card/TourCard';
import axios from 'axios';

const Homepage = () => {
  const [data, setData] = useState([]);

  console.log('data', data);
  const fetchData = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_KEY}/tours`);
    setData(res.data.data.data);
  };

  React.useEffect(() => {
    fetchData();
  }, []);
  return (
    <Layout>
      <Box as='header' pos='absolute' top={0}>
        <Image
          src={require('../Assets/images/slide-1.jpg').default}
          h='100vh'
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
        <Box pos='absolute' zIndex={10} top={64} left={20} color='white'>
          <Heading as='h2' fontWeight={900} fontSize='7xl'>
            Your Adventure <br />
            Travel & Tour <br />
            Expert
          </Heading>
          <Flex as='button' align='center' mt={10} fontSize='lg'>
            Learn more{' '}
            <Flex
              align='center'
              justify='center'
              w={10}
              h={10}
              bg='orange.500'
              color='white'
              rounded='100%'
              ml={4}
            >
              <Icon boxSize={6} as={BsArrowRightShort} />
            </Flex>
          </Flex>
        </Box>
      </Box>

      <Box bg='gray.50' py={20}>
        <Container maxW='6xl' mt={130}>
          <Flex>
            <Box>
              <Heading mb={6}>Find Your Adventure</Heading>
              <Input
                borderWidth={0}
                _hover={{ borderWidth: 0 }}
                _focus={{ borderWidth: 0 }}
                placeholder='Search here for activities or tours'
                fontWeight={200}
                fontSize='2xl'
              />
            </Box>
          </Flex>
          <Divider
            w='100%'
            borderBottomWidth={1}
            borderBottomColor='gray.400'
            my={4}
          />
          <Flex justify='space-between' mt={20}>
            <Heading>
              Tours Available for <br />
              Booking
            </Heading>

            <Box w={108}>
              <Text fontWeight={200} fontSize='lg' lineHeight='tall'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quibusdam maiores harum culpa deleniti dolor nihil rem
                aspernatur, dolore exercitationem veritatis! Fugit, cupiditate.
                Atque ipsa saepe deserunt maxime veniam nam ullam.
              </Text>
            </Box>
          </Flex>
          <Grid templateColumns={{ md: 'repeat(3, 1fr)' }} gap={6} mt={40}>
            {data.slice(0, 6).map((tour) => (
              <TourCard key={tour._id} tour={tour} />
            ))}
          </Grid>
        </Container>
      </Box>

      <Container maxW='6xl'>
        <Grid templateColumns={{ md: 'repeat(2, 1fr)' }}>
          <Box px={20} py={40}>
            <Heading>
              Guiding with <br />
              Passion Since 1994
            </Heading>
            <Text mt={16} lineHeight='taller' fontWeight={200} fontSize='lg'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              quidem deserunt minus, alias veniam doloribus debitis aperiam
              ipsam dolorum dolore quo perspiciatis facilis officiis consectetur
              qui quis sed mollitia illum quae? Numquam quaerat quas temporibus
              earum tenetur, accusamus maiores commodi.
            </Text>
          </Box>
          <Box>
            <Image src={require('../Assets/images/1.webp').default} />
          </Box>
          <Box mt={-6}>
            <Image src={require('../Assets/images/2.webp').default} />
          </Box>
          <Box px={20} py={40}>
            <Heading>
              The Highest Safety <br />
              Standards
            </Heading>
            <Text mt={16} lineHeight='taller' fontWeight={200} fontSize='lg'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
              harum consequatur neque. Minima aperiam, sit libero laudantium
              reprehenderit dolorem non? Sed, ipsa cum! Quia id veniam dolor
              velit modi reiciendis doloribus, ipsa nulla labore, odit illo eum
              quasi alias repudiandae, molestias nostrum.
            </Text>
          </Box>
          <Box px={20} py={40}>
            <Heading>
              Carbon Neutral <br />
              Tours
            </Heading>
            <Text mt={16} lineHeight='taller' fontWeight={200} fontSize='lg'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Molestias laborum amet expedita nemo repellat maiores excepturi
              quos enim sapiente earum magnam fuga, dolore eaque magni,
              reiciendis laboriosam nesciunt ea quasi eum voluptate nulla quam
              sunt veritatis exercitationem! Esse ab voluptatum alias nobis?
            </Text>
          </Box>
          <Box mt={-12}>
            <Image src={require('../Assets/images/3.webp').default} />
          </Box>
        </Grid>
      </Container>

      <Box bg='gray.50' py={20}>
        <Container maxW='6xl'>
          <Box mt={32}>
            <Heading>Customer Reviews</Heading>
            <Flex justify='space-between' mt={16}>
              <Box>
                <Icon as={Quote} boxSize={16} />
              </Box>
              <Box ml={40}>
                <Text fontSize='lg' lineHeight='taller' fontWeight={200}>
                  Absolutely brilliant. Don't use any other tour guide or
                  company, these guys are the best of the best. Our guide Sölvi
                  was, as you can tell from the other glowing reviews, excellent
                  to say the least. Icelandic Mountain Guides and Iceland Rovers
                  were fantastic - personable, easy to deal with, enthusiastic,
                  knowledgable, and just plain nice people. It made a huge
                  difference on our trip, we're VERY glad we went with them!
                </Text>
                <Text mt={10} fontSize='sm'>
                  theUSJourneyman — 2020-01-24
                </Text>
              </Box>
            </Flex>
          </Box>
        </Container>
      </Box>

      <Flex
        direction='column'
        align='center'
        justify='center'
        textAlign='center'
        py={24}
        w={122}
        mx='auto'
      >
        <Heading>The Most Awarded Adventure Tour Company in the World</Heading>
        <Text mt={10} fontSize='lg' fontWeight={200} lineHeight='taller'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          voluptatum est eius, soluta quibusdam cupiditate.
        </Text>
      </Flex>
    </Layout>
  );
};

export default Homepage;
