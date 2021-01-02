import React from 'react';
import { Grid, Box, Button } from '@chakra-ui/react';
import { Formik } from 'formik';
import FormInput from 'Components/Form/Input';
import FormUpload from 'Components/Form/Upload';
import DatePicker from 'Components/Form/DatePicker';
import ImageUpload from 'Components/Form/ImageUpload';
import FormTextArea from 'Components/Form/TextArea';

const AddTour = () => {
  const [files, setFiles] = React.useState([]);

  return (
    <Formik initialValues={{ name: '' }}>
      <form>
        <Grid templateColumns={{ md: 'repeat(2, 1fr)' }} gap={4}>
          <FormInput label='Name' />
          <FormInput label='Duration' />
          <FormInput label='Price' />
          <FormInput label='Price Discount' />

          <DatePicker label='Start Dates' />
          <Grid gap={4}>
            <FormInput label='Group Size' />
            <FormInput label='Ratings Average' />
            <FormInput label='Ratings Quantity' />
            <FormUpload label='Cover Image' />
          </Grid>
        </Grid>
        <Box my={4}>
          <ImageUpload files={files} setFiles={setFiles} />
        </Box>
        <Box>
          <FormInput label='Summary' />
        </Box>
        <Box my={4}>
          <FormTextArea label='Description' />
        </Box>
        <Box textAlign='right' mt={6}>
          <Button colorScheme='orange' w={80} h={12} rounded='none'>
            Add new tour
          </Button>
        </Box>
      </form>
    </Formik>
  );
};

export default AddTour;
