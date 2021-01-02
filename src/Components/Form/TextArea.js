import { FormControl, FormLabel, Textarea } from '@chakra-ui/react';
import React from 'react';

const FormTextArea = ({ label, placeholder, isRequired, ...rest }) => {
  return (
    <FormControl isRequired={isRequired}>
      <FormLabel>{label}</FormLabel>
      <Textarea
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

export default FormTextArea;
