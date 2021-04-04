import { Box, Divider, Flex, Heading, Input } from '@chakra-ui/react';
import React from 'react';

const SearchAndFilter = () => {
  return (
    <Box>
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
    </Box>
  );
};

export default SearchAndFilter;
