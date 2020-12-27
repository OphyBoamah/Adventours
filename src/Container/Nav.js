import {
  Avatar,
  Box,
  Flex,
  Icon,
  Link,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import SearchDrawer from 'Components/Drawer';
import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

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
      <Link as={NavLink} to='/'>
        <Text fontSize='2xl'>Adventour</Text>
      </Link>
      <Flex as='ul' listStyleType='none' align='center'>
        <Link as={NavLink} to='/'>
          <Box as='li' px={8} fontSize='sm'>
            Home
          </Box>
        </Link>
        <Link as={NavLink} to='/tours'>
          <Box as='li' px={8} fontSize='sm'>
            Tours
          </Box>
        </Link>
        <Link as={NavLink} to='/signin'>
          <Box as='li' px={8} fontSize='sm'>
            Sign in
          </Box>
        </Link>
        <Link as={NavLink} to='/signup'>
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
        </Link>
        <Box as='li' px={8} fontSize='sm'>
          Logout
        </Box>
        <Link as={NavLink} to='/profile'>
          <Flex as='li' align='center'>
            <Text pr={4} fontSize='sm'>
              User name
            </Text>
            <Avatar
              size='sm'
              src='https://images.unsplash.com/photo-1552663651-2e4250e6c7c8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmVtYWxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'
            />
          </Flex>
        </Link>
        <Box px={8} as='button' role='button' onClick={onOpen}>
          <Icon as={FiSearch} />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Nav;
