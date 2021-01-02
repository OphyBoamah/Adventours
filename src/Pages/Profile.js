import { Box, Container, Flex, Icon } from '@chakra-ui/react';
import Layout from 'Container/Layout';
import { BiBriefcase, BiUser } from 'react-icons/bi';
import { FaReceipt } from 'react-icons/fa';
import React from 'react';
import { FiUsers } from 'react-icons/fi';
import DynamicSections from 'Components/Dynamic';
import { BsCardList, BsCardText } from 'react-icons/bs';

const Profile = () => {
  const [tab, setTab] = React.useState('compA');

  return (
    <Layout>
      <Container maxW='7xl' mt={10}>
        <Flex>
          <Box w={{ md: '20%' }} mr={{ md: '5%' }}>
            <Flex
              bg={tab === 'compA' ? 'orange.500' : 'none'}
              borderLeftWidth={tab === 'compA' && 4}
              borderLeftColor='orange.700'
              color={tab === 'compA' && 'white'}
              align='center'
              py={3}
              fontSize={{ md: 'lg' }}
              px={6}
              cursor='pointer'
              onClick={() => setTab('compA')}
            >
              <Icon as={BiUser} mr={2} /> Profile
            </Flex>

            <Flex
              align='center'
              bg={tab === 'compB' ? 'orange.500' : 'none'}
              borderLeftWidth={tab === 'compB' && 4}
              borderLeftColor='orange.700'
              color={tab === 'compB' && 'white'}
              px={6}
              py={3}
              cursor='pointer'
              fontSize={{ md: 'lg' }}
              onClick={() => setTab('compB')}
            >
              <Icon as={FaReceipt} mr={2} /> My Bookings
            </Flex>
            <Flex
              align='center'
              bg={tab === 'compC' ? 'orange.500' : 'none'}
              borderLeftWidth={tab === 'compC' && 4}
              borderLeftColor='orange.700'
              color={tab === 'compC' && 'white'}
              px={6}
              py={3}
              cursor='pointer'
              fontSize={{ md: 'lg' }}
              onClick={() => setTab('compC')}
            >
              <Icon as={BsCardText} mr={2} /> My Reviews
            </Flex>
            <Box
              mt={{ md: 10 }}
              px={6}
              mb={2}
              fontWeight={900}
              color='orange.600'
            >
              Admin
            </Box>
            <Flex
              align='center'
              bg={tab === 'compD' ? 'orange.500' : 'none'}
              borderLeftWidth={tab === 'compD' && 4}
              borderLeftColor='orange.700'
              color={tab === 'compD' && 'white'}
              px={6}
              py={3}
              cursor='pointer'
              fontSize={{ md: 'lg' }}
              onClick={() => setTab('compD')}
            >
              <Icon as={BiBriefcase} mr={2} /> Manage Tours
            </Flex>
            <Flex
              align='center'
              bg={tab === 'compE' ? 'orange.500' : 'none'}
              borderLeftWidth={tab === 'compE' && 4}
              borderLeftColor='orange.700'
              color={tab === 'compE' && 'white'}
              px={6}
              py={3}
              cursor='pointer'
              fontSize={{ md: 'lg' }}
              onClick={() => setTab('compE')}
            >
              <Icon as={FaReceipt} mr={2} /> Manage Bookings
            </Flex>
            <Flex
              align='center'
              bg={tab === 'compF' ? 'orange.500' : 'none'}
              borderLeftWidth={tab === 'compF' && 4}
              borderLeftColor='orange.700'
              color={tab === 'compF' && 'white'}
              px={6}
              py={3}
              cursor='pointer'
              fontSize={{ md: 'lg' }}
              onClick={() => setTab('compF')}
            >
              <Icon as={FiUsers} mr={2} /> Manage Users
            </Flex>
            <Flex
              align='center'
              bg={tab === 'compG' ? 'orange.500' : 'none'}
              borderLeftWidth={tab === 'compG' && 4}
              borderLeftColor='orange.700'
              color={tab === 'compG' && 'white'}
              px={6}
              py={3}
              cursor='pointer'
              fontSize={{ md: 'lg' }}
              onClick={() => setTab('compG')}
            >
              <Icon as={BsCardList} mr={2} /> Manage Reviews
            </Flex>
          </Box>
          <Box w={{ md: '75%' }}>
            <DynamicSections tab={tab} setState={setTab} />
          </Box>
        </Flex>
      </Container>
    </Layout>
  );
};

export default Profile;
