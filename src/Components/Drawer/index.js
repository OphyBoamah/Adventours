import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  Box,
  Heading,
} from '@chakra-ui/react';

const SearchDrawer = ({ isOpen, onClose }) => {
  const btnRef = React.useRef();

  return (
    <Drawer
      isOpen={isOpen}
      placement='top'
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
            <Box px={32} py={20}>
              <Heading mb={6}>Find Your Adventure</Heading>
              <Input
                width={108}
                borderWidth={0}
                borderBottomWidth={1}
                borderBottomColor='gray.200'
                _hover={{
                  borderWidth: 0,
                  borderBottomWidth: 1,
                  borderBottomColor: 'gray.200',
                }}
                _focus={{
                  borderWidth: 0,
                  borderBottomWidth: 1,
                  borderBottomColor: 'gray.200',
                }}
                placeholder='Search here for activities or tours'
                fontWeight={200}
                fontSize='2xl'
              />
            </Box>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default SearchDrawer;
