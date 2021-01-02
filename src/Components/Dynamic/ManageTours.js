import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import Table from 'Components/Table';
import React from 'react';

const ManageTours = ({ tab, setState }) => {
  console.log('tab', tab);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Flex justify='space-between'>
        <Box mb={10}>
          <Heading as='h3' fontSize={{ md: '3xl' }}>
            Manage Tours
          </Heading>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, in.
          </Text>
        </Box>

        <Box>
          <Button
            colorScheme='orange'
            rounded='none'
            w={64}
            onClick={() => setState('compH')}
          >
            Add a tour
          </Button>
        </Box>
      </Flex>

      <Box mt={10}>
        <Table />
      </Box>
    </Box>
  );
};

export default ManageTours;
