import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  Image,
  Input,
} from '@chakra-ui/react';
import Layout from 'Container/Layout';
import useAuth from 'Context/UserContext';
import { Formik } from 'formik';
import React from 'react';

const ResetPassword = () => {
  const { resetPassword } = useAuth();
  const onSubmit = async (
    values,
    { setSubmitting, setErrors, setStatus, resetForm }
  ) => {
    try {
      resetPassword(
        'ef2abf091e1548fcec4bec7580fd30b2117ee93e35911bb8d5a71e2ff4f662c1',
        values
      );
      resetForm({});
      setStatus({ success: true });
    } catch (error) {
      setStatus({ success: false });
      setSubmitting(false);
      setErrors({ submit: error.message });
    }
  };

  return (
    <Layout>
      <Flex overflow='hidden'>
        <Box w='40%' py={32} px={32}>
          <Box>
            <Heading
              as='h3'
              fontSize='4xl'
              fontWeight='900'
              mb={10}
              lineHeight='normal'
            >
              Confirm your new password to reset
            </Heading>
          </Box>
          <Formik
            initialValues={{
              password: '',
              passwordConfirm: '',
            }}
            onSubmit={onSubmit}
          >
            {({
              values,
              handleChange,
              handleSubmit,
              handleBlur,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit}>
                <Grid gap={6}>
                  <FormControl isRequired>
                    <FormLabel htmlFor='password'>Password</FormLabel>
                    <Input
                      placeholder='Password'
                      name='password'
                      type='password'
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel htmlFor='passwordConfirm'>
                      Confirm Password
                    </FormLabel>
                    <Input
                      placeholder='Confirm Password'
                      name='passwordConfirm'
                      type='password'
                      value={values.passwordConfirm}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </FormControl>
                  <Box>
                    <Button
                      colorScheme='orange'
                      w='100%'
                      h={12}
                      rounded='0px'
                      type='submit'
                      isLoading={isSubmitting}
                    >
                      Reset password
                    </Button>
                  </Box>
                </Grid>
              </form>
            )}
          </Formik>
        </Box>
        <Box pos='absolute' top={0} right={0} w='60%'>
          <Image
            h='100vh'
            w='100%'
            objectFit='cover'
            src='https://images.unsplash.com/photo-1534534573898-db5148bc8b0c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80'
          />
          <Box
            pos='absolute'
            top={0}
            right={0}
            bottom={0}
            bg='rgba(255,255,255,.5)'
          ></Box>
        </Box>
      </Flex>
    </Layout>
  );
};

export default ResetPassword;
