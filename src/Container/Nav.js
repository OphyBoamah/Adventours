import {
  Avatar,
  Box,
  Flex,
  Icon,
  Link,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { Menu } from '@headlessui/react';
import SearchDrawer from 'Components/Drawer';
import useAuth from 'Context/UserContext';
import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { HiMenuAlt4 } from 'react-icons/hi';
import { NavLink, useLocation } from 'react-router-dom';

const mobileMenu = [
  { id: 1, name: 'Home', path: '/' },
  { id: 2, name: 'Tours', path: '/tours' },
];

const Nav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { pathname } = useLocation();
  const { user, token, logout } = useAuth();

  return (
      <Box pos='relative'>
        <Flex
            align='center'
            justify='space-between'
            py={{ base: 3, md: 10 }}
            px={{ base: 4, md: 20 }}
            pos='relative'
            zIndex={50}
            color={pathname === '/' || pathname === '/tours' ? 'white' : 'gray.800'}
            textTransform='uppercase'
        >
          <SearchDrawer onClose={onClose} isOpen={isOpen} />
          <Link as={NavLink} to='/' _hover={{ textDecor: 'none' }}>
            <Text fontSize={{ base: 'lg', md: '2xl' }}>Adventour</Text>
          </Link>

          <Menu as={Box} d={{ base: 'block', md: 'none' }} userSelect='none'>
            <Menu.Button as={Box} _active={{ outline: 'none' }}>
              <Flex>
                <Box>
                  {user && (
                      <Flex as='li' align='center'>
                        <Text pr={4} fontSize='sm'>
                          {user?.name}
                        </Text>
                        <Avatar
                            size='sm'
                            src={
                              `require('../Assets/images/tours/${user?.photo}')`
                                  .default
                            }
                        />
                      </Flex>
                  )}
                </Box>
                <Box>
                  <Icon as={HiMenuAlt4} boxSize={6} />
                </Box>
              </Flex>
            </Menu.Button>
            <Menu.Items
                as={Box}
                bg='white'
                pos='absolute'
                minW={82}
                right={6}
                left={6}
                top={14}
                color='gray.700'
                fontSize='md'
                fontWeight={300}
                outline='none'
                rounded='md'
            >
              <Menu.Item as={Box} px={6} pt={4} _hover={{ bg: 'gray.100' }}>
                {mobileMenu.map((item) => (
                    <Link
                        key={item.id}
                        as={NavLink}
                        to={item.path}
                        _hover={{ textDecor: 'none' }}
                    >
                      <Box pb={4} fontSize='sm'>
                        {item.name}
                      </Box>
                    </Link>
                ))}
              </Menu.Item>
              {!token && (
                  <Box px={6}>
                    <Menu.Item as={Box} _hover={{ bg: 'gray.100' }}>
                      <Link
                          as={NavLink}
                          to='/signin'
                          _hover={{ textDecor: 'none' }}
                      >
                        <Box pb={4} fontSize='sm'>
                          Sign in
                        </Box>
                      </Link>
                    </Menu.Item>

                    <Menu.Item as={Box} _hover={{ bg: 'gray.100' }}>
                      <Link
                          as={NavLink}
                          to='/signup'
                          _hover={{ textDecor: 'none' }}
                      >
                        <Box pb={4} fontSize='sm'>
                          Sign up
                        </Box>
                      </Link>
                    </Menu.Item>
                  </Box>
              )}
              <Menu.Item as={Box} bg='red' color='white' textAlign='center'>
                {token && (
                    <Box
                        as='li'
                        px={8}
                        fontSize='sm'
                        cursor='pointer'
                        onClick={logout}
                    >
                      Logout
                    </Box>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>

          <Flex
              as='ul'
              listStyleType='none'
              align='center'
              d={{ base: 'none', md: 'flex' }}
          >
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
                        src={
                          `require('../Assets/images/tours/${user?.photo}')`.default
                        }
                    />
                  </Flex>
                </Link>
            )}

            <Box px={8} as='button' role='button' onClick={onOpen}>
              <Icon as={FiSearch} />
            </Box>
          </Flex>
        </Flex>
      </Box>
  );
};

export default Nav;
