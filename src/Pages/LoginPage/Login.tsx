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
import { useLogin } from '../../Hooks/useLogin';
import CustomizedSnackbars from '../../Components/Toast';
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

export default function Login() {
  const token = window.localStorage.getItem("token")
  const { Login } = useLogin();
  const [loading, setLoading] = React.useState(false)
  const [toastOpen, setToastOpen] = React.useState(false)
  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string()
      .min(6, "Password should be of minimum 6 characters length")
      .required("Password is required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      Login(values.email, values.password, setToastOpen, setLoading)
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
            Login
          </Typography>
          <Box component="form" sx={{ mt: 3, }} onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
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
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                  onBlur={formik.handleBlur}
                />
              </Grid>
              <Grid item xs={12}>

              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 5, backgroundColor: '#f9c712', "&:hover": { backgroundColor: '#bf980c' } }}
            >
              Login
            </Button>

            <Grid container justifyContent="flex-end" sx={{ color: '#303030' }}>
              <Grid item xs>
                <Link to="/forgetpassword" style={{ color: '#303030' }}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>

                <Link to='/signup' style={{ color: '#303030' }}> Don't have an account? Signup!</Link>

              </Grid>

            </Grid>
            <CustomizedSnackbars open={toastOpen} setOpen={setToastOpen} text={token ? "Logged in successfully" : "Incorrect email or password"} severity={token ? "success" : "error"}></CustomizedSnackbars>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}