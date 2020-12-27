import { Avatar, Box, Flex, Icon, Text, useDisclosure } from '@chakra-ui/react';
import SearchDrawer from 'Components/Drawer';
import React from 'react';
import { FiSearch } from 'react-icons/fi';

const Nav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      align='center'
      justify='space-between'
      py={10}
      px={20}
      pos='relative'
      zIndex={50}
      color='white'
      textTransform='uppercase'
    >
      <SearchDrawer onClose={onClose} isOpen={isOpen} />
      <Box>
        <Text fontSize='2xl'>Aventour</Text>
      </Box>
      <Flex as='ul' listStyleType='none' align='center'>
        <Box as='li' px={8} fontSize='sm'>
          Home
        </Box>
        <Box as='li' px={8} fontSize='sm'>
          Tours
        </Box>
        <Box as='li' px={8} fontSize='sm'>
          Sign in
        </Box>
        <Box
          cursor='pointer'
          bg='orange.500'
          color='white'
          py={2}
          rounded='md'
          as='li'
          px={8}
          fontSize='sm'
        >
          Sign up
        </Box>
        <Box as='li' px={8} fontSize='sm'>
          Logout
        </Box>
        <Flex as='li' align='center'>
          <Text pr={4} fontSize='sm'>
            User name
          </Text>
          <Avatar
            size='sm'
            src='https://images.unsplash.com/photo-1552663651-2e4250e6c7c8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmVtYWxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'
          />
        </Flex>
        <Box px={8} as='button' role='button' onClick={onOpen}>
          <Icon as={FiSearch} />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Nav;
