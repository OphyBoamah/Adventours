import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import IconBox from 'Components/IconBox';
import Review from 'Components/Review';
import Layout from 'Container/Layout';
import React, { useState, useEffect } from 'react';
import { Calendar, Duration, Easy, Group, Map, Point } from 'theme/Icons';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

const TourDetail = () => {
  const [detail, setDetail] = useState({});
  const { location } = useHistory();
  const id = location.state;
  const fetchDetail = async () => {
    const result = await axios.get(
      `${process.env.REACT_APP_API_KEY}/tours/${id}`
    );
    setDetail(result.data.data.data);
  };

  useEffect(() => {
    fetchDetail();
  }, []);
  console.log('detailsData ', detail);
  return (
    <Layout>
      <Container maxW='7xl' mt={40} mb={20}>
        <Flex justify='space-between'>
          <Box w={125}>
            <Text textTransform='uppercase' fontSize='sm'>
              From Mýrdalsjökull
            </Text>
            <Heading as='h3' mt={10} fontSize='6xl'>
              {detail.name}
            </Heading>

            <Flex align='center' mt={20}>
              <Text>
                Rating:{' '}
                <Text as='span' color='orange.500'>
                  {detail.ratingsAverage}
                </Text>
              </Text>
              <Text mx={14}>
                Price from:{' '}
                <Text as='span' color='orange.500'>
                  ${detail.price}
                </Text>
              </Text>
              <Text>
                Start Date:{' '}
                <Text as='span' color='orange.500'>
                  {moment(detail?.startDates[0]).format('LL')}
                </Text>
              </Text>
            </Flex>
          </Box>

          <Box w={80}>
            <Text fontSize='lg' fontWeight={200} lineHeight='tall'>
              {detail.summary}
            </Text>
            <Button mt={8} colorScheme='orange' w='100%' h={14} rounded='0px'>
              Book Now
            </Button>
          </Box>
        </Flex>
      </Container>
      <Box>
        <Image
          h='80vh'
          w='100vw'
          objectFit='cover'
          src={require('../Assets/images/tours/tour-1-cover.jpg').default}
        />
      </Box>
      <Container maxW='4xl' my={32}>
        <Box>
          <Heading as='h3' fontSize='6xl' textAlign='center'>
            {detail.name}
          </Heading>
          <Box mt={10}>
            <Text
              fontWeight={200}
              lineHeight='tall'
              fontSize='lg'
              textAlign='center'
            >
              {detail.description}
            </Text>
          </Box>
        </Box>

        <Box my={20}>
          <Grid templateColumns={{ md: 'repeat(3, 1fr)' }} gap={10}>
            <IconBox icon={Calendar} title='Availability' text='All-year' />
            <IconBox
              icon={Duration}
              title='Duration'
              text={`${detail.duration} day tour`}
            />
            <IconBox
              icon={Point}
              title='Meeting Point'
              text={detail.startLocation.description}
            />
            <IconBox
              icon={Map}
              title='Location'
              text={detail.startLocation.address}
            />
            <IconBox icon={Easy} title='Difficulty' text={detail.difficulty} />
            <IconBox
              icon={Group}
              title='Group Size'
              text={`Up to ${detail.maxGroupSize} people`}
            />
          </Grid>
        </Box>

        <Box>
          <Heading as='h4' fontSize={{ md: '4xl' }} textAlign='center' mb={14}>
            Tour Gallery
          </Heading>
          <Grid templateColumns={{ md: 'repeat(4, 1fr)' }} gap={4}>
            {detail?.images?.map((image) => (
              <Box key={image} h={108} w={70}>
                <Image
                  h='100%'
                  w='100%'
                  objectFit='cover'
                  src={require(`../Assets/images/tours/${image}`).default}
                />
              </Box>
            ))}
          </Grid>
        </Box>

        <Box mt={20}>
          <Heading as='h4' fontSize='4xl' textAlign='center'>
            Customer Reviews
          </Heading>

          <Review />
        </Box>
      </Container>
    </Layout>
  );
};

export default TourDetail;
