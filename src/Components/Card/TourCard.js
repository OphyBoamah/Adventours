import { Box, Flex, Heading, Icon, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { Calendar, Duration } from 'theme/Icons';

const TourCard = ({ tour }) => {
  return (
    <Box bg='white' rounded='sm' shadow='sm' pos='relative' overflow='hidden'>
      <Image
        h={108}
        w='100%'
        objectFit='cover'
        src={require(`../../Assets/images/tours/${tour.imageCover}`).default}
      />
      <Box p={3} pos='absolute' left={0} w='80%' top='350px' bg='white'>
        <Text textTransform='uppercase' fontSize='sm'>
          By Adventour
        </Text>
        <Heading as='h4' fontSize='3xl' isTruncated>
          {tour.name}
        </Heading>
      </Box>
      <Flex align='center' justify='space-between' py={10} px={2}>
        <Flex align='center'>
          <Icon as={Calendar} boxSize={8} />
          <Text ml={2} color='gray.500'>
            All Year
          </Text>
        </Flex>

        <Flex align='center'>
          <Icon as={Duration} boxSize={8} />
          <Text ml={2} color='gray.500'>
            {tour.duration} days
          </Text>
        </Flex>

        <Flex>
          <Flex
            align='center'
            justify='center'
            color='orange.500'
            w={8}
            h={8}
            borderWidth={1}
            borderColor='orange.500'
            rounded='sm'
          >
            $
          </Flex>
          <Text ml={2} color='gray.500'>
            From: {tour.price}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default TourCard;
