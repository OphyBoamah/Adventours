import { Flex, FormControl, FormLabel, Input, Text } from '@chakra-ui/react';
import React from 'react';

const FormUpload = ({ label, placeholder, isRequired, ...rest }) => {
  return (
    <FormControl isRequired={isRequired}>
      <FormLabel>{label}</FormLabel>
      <Flex
        as='label'
        bg='gray.100'
        w='100%'
        px={6}
        py={2}
        cursor='pointer'
        color='gray.400'
      >
        <Input d='none' placeholder={placeholder} {...rest} type='file' />
        <Text>Select image</Text>
      </Flex>
    </FormControl>
  );
};

export default FormUpload;
