import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import React from 'react';

const IconBox = ({ icon, title, text }) => {
  return (
    <Flex align='center'>
      <Icon as={icon} boxSize={14} />
      <Box ml={4}>
        <Text textTransform='uppercase' fontWeight='medium' fontSize='sm'>
          {title}
        </Text>
        <Text fontWeight={200} mt={-1}>
          {text}
        </Text>
      </Box>
    </Flex>
  );
};

export default IconBox;
