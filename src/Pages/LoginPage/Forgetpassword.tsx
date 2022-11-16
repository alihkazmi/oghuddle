import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useFormik } from 'formik';
import * as yup from "yup";
import { Link } from 'react-router-dom';

import CircularProgress from '@mui/material/CircularProgress';

import CustomizedSnackbars from '../../Components/Toast';
import { useForget } from '../../Hooks/useForget';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" to="https://mui.com/">
        HuddleBooth
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Forgetpassword() {

  const [showConfirmPassword, setShowConfirmPassword] = React.useState(true)
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  }; const [loading, setLoading] = React.useState(false)
  const [toastOpen, setToastOpen] = React.useState(false)
  const [forgotResponse, setForgotResponse] = React.useState('')


  const validationSchema = yup.object({

    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),

  });
  const { Forget } = useForget();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      Forget(values.email, setLoading, setToastOpen, setForgotResponse);
    },
  });



  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            // bgcolor: '#f9c712'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#303030' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" >
            Forgot Password         </Typography>
          <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 3, }}>
            <Grid container spacing={2}>



              <Grid item xs={12} sx={{ m: 3, width: '45ch' }}>
                <TextField
                  required
                  fullWidth
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  id="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  onBlur={formik.handleBlur}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 5, backgroundColor: '#f9c712', "&:hover": { backgroundColor: '#bf980c' } }}
            >
              Forget Password
            </Button>

            <Grid container justifyContent="flex-end" sx={{ color: '#303030' }}>
              <Grid item>
                <Link to='/' style={{ color: '#303030' }}>
                  Login Instead               </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}