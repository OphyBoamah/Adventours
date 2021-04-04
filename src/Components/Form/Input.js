import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import React from 'react';

const FormInput = ({ label, placeholder, isRequired, ...rest }) => {
  return (
    <FormControl isRequired={isRequired}>
      <FormLabel>{label}</FormLabel>
      <Input
        placeholder={placeholder}
        {...rest}
        borderWidth={1}
        rounded='none'
        borderColor='gray.700'
        _hover={{ borderColor: 'gray.700' }}
        _focus={{ borderColor: 'gray.700' }}
      />
    </FormControl>
  );
};

export default FormInput;
