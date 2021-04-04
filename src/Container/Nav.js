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
import useAuth from 'Context/UserContext';
import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { NavLink, useLocation } from 'react-router-dom';

const Nav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { pathname } = useLocation();
  const { user, token, logout } = useAuth();
  console.log(user);
  return (
    <Flex
      align='center'
      justify='space-between'
      py={10}
      px={20}
      pos='relative'
      zIndex={50}
      color={pathname === '/' || pathname === '/tours' ? 'white' : 'gray.800'}
      textTransform='uppercase'
    >
      <SearchDrawer onClose={onClose} isOpen={isOpen} />
      <Link as={NavLink} to='/' _hover={{ textDecor: 'none' }}>
        <Text fontSize='2xl'>Adventour</Text>
      </Link>
      <Flex as='ul' listStyleType='none' align='center'>
        <Link as={NavLink} to='/' _hover={{ textDecor: 'none' }}>
          <Box as='li' px={8} fontSize='sm'>
            Home
          </Box>
        </Link>
        <Link as={NavLink} to='/tours' _hover={{ textDecor: 'none' }}>
          <Box as='li' px={8} fontSize='sm'>
            Tours
          </Box>
        </Link>

        {!token && (
          <>
            <Link as={NavLink} to='signin' _hover={{ textDecor: 'none' }}>
              <Box as='li' px={8} fontSize='sm'>
                Sign in
              </Box>
            </Link>
            <Link as={NavLink} to='/signup' _hover={{ textDecor: 'none' }}>
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
          </>
        )}

        {token && (
          <Box as='li' px={8} fontSize='sm' cursor='pointer' onClick={logout}>
            Logout
          </Box>
        )}

        {user && (
          <Link as={NavLink} to='/profile' _hover={{ textDecor: 'none' }}>
            <Flex as='li' align='center'>
              <Text pr={4} fontSize='sm'>
                {user?.name}
              </Text>
              <Avatar
                size='sm'
                src={`require('../Assets/images/tours/${user?.photo}')`.default}
              />
            </Flex>
          </Link>
        )}

        <Box px={8} as='button' role='button' onClick={onOpen}>
          <Icon as={FiSearch} />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Nav;
