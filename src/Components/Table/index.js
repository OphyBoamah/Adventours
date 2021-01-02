import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

const Table = () => {
  return (
    <Flex direction='column'>
      <Box my={-2} overflowX='auto' mx={{ sm: -6, lg: -8 }}>
        <Box
          d='inline-block'
          py={2}
          verticalAlign='middle'
          minW='100%'
          px={{ sm: 6, lg: 8 }}
        >
          <Box
            shadow='sm'
            overflow='hidden'
            borderBottomWidth={1}
            borderBottomColor='gray.200'
            rounded={{ sm: 'lg' }}
          >
            <Box as='table' minW='100%' borderY={1} borderColor='gray.200'>
              <Box as='thead' bg='gray.50'>
                <Box as='tr'>
                  <Box
                    as='th'
                    scope='col'
                    px={6}
                    py={3}
                    textAlign='left'
                    fontSize='sm'
                    fontWeight='medium'
                    color='gray.500'
                    textTransform='uppercase'
                    letterSpacing='wider'
                  >
                    Name
                  </Box>

                  <Box
                    as='th'
                    scope='col'
                    px={6}
                    py={3}
                    textAlign='left'
                    fontSize='sm'
                    fontWeight='medium'
                    color='gray.500'
                    textTransform='uppercase'
                    letterSpacing='wider'
                  >
                    Title
                  </Box>

                  <Box
                    as='th'
                    scope='col'
                    px={6}
                    py={3}
                    textAlign='left'
                    fontSize='sm'
                    fontWeight='medium'
                    color='gray.500'
                    textTransform='uppercase'
                    letterSpacing='wider'
                  >
                    Status
                  </Box>

                  <Box
                    as='th'
                    scope='col'
                    px={6}
                    py={3}
                    textAlign='left'
                    fontSize='sm'
                    fontWeight='medium'
                    color='gray.500'
                    textTransform='uppercase'
                    letterSpacing='wider'
                  >
                    Role
                  </Box>
                  <Box
                    as='th'
                    pos='relative'
                    px={6}
                    py={3}
                    scope='col'
                    textAlign='left'
                    fontSize='sm'
                    fontWeight='medium'
                    color='gray.500'
                    textTransform='uppercase'
                    letterSpacing='wider'
                  >
                    <span class='sr-only'>Action</span>
                  </Box>
                </Box>
              </Box>
              <Box as='tbody' bg='white' borderY={1} borderColor='gray.200'>
                <Box as='tr'>
                  <Box as='td' px={6} py={4}>
                    <Box fontSize='sm' fontWeight='medium' color='gray.900'>
                      Jane Cooper
                    </Box>
                  </Box>
                  <Box as='td' px={6} py={4}>
                    <Box fontSize='sm' fontWeight='medium' color='gray.900'>
                      Jane Cooper
                    </Box>
                  </Box>
                  <Box as='td' px={6} py={4}>
                    <Box fontSize='sm' fontWeight='medium' color='gray.900'>
                      Jane Cooper
                    </Box>
                  </Box>
                  <Box as='td' px={6} py={4}>
                    <Box fontSize='sm' fontWeight='medium' color='gray.900'>
                      Jane Cooper
                    </Box>
                  </Box>
                  <Flex align='center' as='td' py={4}>
                    <Box
                      bg='blue.500'
                      color='white'
                      px={4}
                      py={1}
                      cursor='pointer'
                    >
                      Edit
                    </Box>

                    <Box
                      bg='red.500'
                      color='white'
                      px={4}
                      py={1}
                      cursor='pointer'
                      ml={2}
                    >
                      Delete
                    </Box>
                  </Flex>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default Table;
