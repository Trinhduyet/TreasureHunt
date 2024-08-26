import React from 'react';
import { useFormik, FieldArray, FormikProvider, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Grid, Typography, Box } from '@mui/material';

// Validation schema using Yup
const validationSchema = Yup.object({
    // Defining the validation schema for properties n, m, and p
    n: Yup.number()
      // n is a required field
      .required('n must be required')
      // n must be a positive number
      .positive('n must be a positive number')
      // n must be an integer
      .integer('n must be an integer'),
  
    m: Yup.number()
      // m is a required field
      .required('m must be required')
      // m must be a positive number
      .positive('m must be a positive number')
      // m must be an integer
      .integer('m must be an integer'),
  
    p: Yup.number()
      // p is a required field
      .required('p must be required')
      // p must be a positive number
      .positive('p must be a positive number')
      // p must be an integer
      .integer('p must be an integer'),
  });

const MatrixInput = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      n: '',
      m: '',
      p: '',
      matrix: [],
    },
    validationSchema,
    onSubmit: (values) => {
      const matrix = values.matrix.map(row => row.map(cell => parseInt(cell, 10)));
      onSubmit({ row: parseInt(values.n, 10), column: parseInt(values.m, 10), chestNumber: parseInt(values.p, 10), matrix });
    },
  });

  return (
    <FormikProvider value={formik}>
      <Form onSubmit={formik.handleSubmit}>
        <Box sx={{ padding: 2 }}>
          <Typography variant="h5">Treasure Hunt Input</Typography>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="Rows (n)"
                name="n"
                type="number"
                value={formik.values.n}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.n && Boolean(formik.errors.n)}
                helperText={formik.touched.n && formik.errors.n}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="Columns (m)"
                name="m"
                type="number"
                value={formik.values.m}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.m && Boolean(formik.errors.m)}
                helperText={formik.touched.m && formik.errors.m}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="Chest number in each island (P)"
                name="p"
                type="number"
                value={formik.values.p}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.p && Boolean(formik.errors.p)}
                helperText={formik.touched.p && formik.errors.p}
              />
            </Grid>
          </Grid>

          <Box mt={2}>
            <FieldArray
              name="matrix"
              render={({ push, remove }) => (
                <div>
                  {Array.from({ length: parseInt(formik.values.n, 10) || 0 }).map((_, rowIndex) => (
                    <Grid container spacing={1} key={rowIndex}>
                      {Array.from({ length: parseInt(formik.values.m, 10) || 0 }).map((_, colIndex) => (
                        <Grid item xs={1} key={colIndex}>
                          <Field
                            as={TextField}
                            label={`Cell ${rowIndex + 1}:${colIndex + 1}`}
                            name={`matrix[${rowIndex}][${colIndex}]`}
                            type="number"
                            margin="normal"
                            fullWidth
                          />
                        </Grid>
                      ))}
                    </Grid>
                  ))}
                </div>
              )}
            />
          </Box>

          <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
            Submit
          </Button>
        </Box>
      </Form>
    </FormikProvider>
  );
};

export default MatrixInput;
