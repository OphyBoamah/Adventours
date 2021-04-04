import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  Input,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { Formik } from 'formik';
import useAuth from 'Context/UserContext';

const Profile = () => {
  const { user, updateUser } = useAuth();
  const [selectedFile, setSelectedFile] = React.useState();
  const [preview, setPreview] = React.useState();

  const initialValues = {
    name: user?.name,
    email: user?.email,
    photo: user?.photo,
  };

  // console.log(user);
  React.useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
  };

  const onSubmit = async (
    values,
    { setSubmitting, setErrors, setStatus, resetForm }
  ) => {
    try {
      updateUser(values);
      resetForm({});
      setStatus({ success: true });
    } catch (error) {
      setStatus({ success: false });
      setSubmitting(false);
      setErrors({ submit: error.message });
    }
  };
  return (
    <Box>
      <Container maxW='2xl'>
        <Box mb={10}>
          <Heading as='h3' fontSize={{ md: '3xl' }}>
            Profile Settings
          </Heading>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, in.
          </Text>
        </Box>
        <Formik
          enableReinitialize={true}
          initialValues={initialValues}
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
              <Grid gap={6} templateColumns={{ md: '55% 45%' }}>
                <Grid gap={6}>
                  <FormControl>
                    <FormLabel>Name</FormLabel>
                    <Input
                      name='name'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      rounded='none'
                      value={values.name}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input
                      name='email'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      rounded='none'
                      value={values.email}
                      disabled
                    />
                  </FormControl>
                </Grid>
                <FormControl
                  d='flex'
                  alignItems='center'
                  flexDirection='column'
                >
                  <Avatar
                    size='2xl'
                    src={
                      require(`../../Assets/images/tours/${values.photo}`)
                        .default || preview
                    }
                  />
                  <Flex
                    as='label'
                    bg='orange.500'
                    _hover={{ bg: 'orange.600' }}
                    color='white'
                    rounded='0px'
                    px={10}
                    py={2}
                    cursor='pointer'
                    mt={4}
                  >
                    <Input type='file' d='none' onChange={onSelectFile} />
                    <Text>Change profile photo</Text>
                  </Flex>
                </FormControl>
              </Grid>
              <Box textAlign='right'>
                <Button
                  type='submit'
                  colorScheme='orange'
                  isLoading={isSubmitting}
                  rounded='0px'
                  mt={10}
                >
                  Save Changes
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Container>

      <Divider orientation='vertical' borderColor='gray.800' my={20} />

      <Container maxW='xl'>
        <Box mb={10}>
          <Heading as='h3' fontSize={{ md: '3xl' }}>
            Change Password
          </Heading>
        </Box>

        <Formik initialValues={{ password: '', passwordConfirm: '' }}>
          {({ handleChange, handleSubmit, handleBlur, isSubmitting }) => (
            <form onSubmit={handleSubmit}>
              <Grid gap={6}>
                <FormControl>
                  <FormLabel>Password</FormLabel>
                  <Input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rounded='none'
                    type='password'
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Confirm Password</FormLabel>
                  <Input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rounded='none'
                    type='password'
                  />
                </FormControl>
              </Grid>
              <Box textAlign='right'>
                <Button
                  colorScheme='orange'
                  isLoading={isSubmitting}
                  rounded='0px'
                  mt={10}
                >
                  Change Password
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Container>
    </Box>
  );
};

export default Profile;
