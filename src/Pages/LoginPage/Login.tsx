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
import { Link, useParams } from 'react-router-dom';
import { useLogin } from '../../Hooks/useLogin';
import CustomizedSnackbars from '../../Components/Toast';
import CircularProgress from '@mui/material/CircularProgress';
import { Navigate } from "react-router-dom";


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
  let { userType } = useParams();
  const { Login } = useLogin(userType);
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
      setLoading(true);
      Login(values.email, values.password, setToastOpen, setLoading)
    },
  });
  if (userType !== "customer" && userType !== "admin" && userType !== "brand") {
    return <Navigate to="/404_Not_Found" />;
  }

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
            Login as {userType}
          </Typography>
          <Box component="form" sx={{ mt: 3, }} onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  InputLabelProps={{ shrink: true }}
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
                  InputLabelProps={{ shrink: true }} // username overlapping using issue solved through this
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
            {loading && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: "-1rem",
                }}
              >
                <CircularProgress></CircularProgress>
              </Box>
            )}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{ fontSize: "0.75rem", color: "#303030" }}
              sx={{ mt: 2, mb: 5, backgroundColor: '#f9c712', "&:hover": { backgroundColor: '#bf980c' } }}
            >
              Login
            </Button>

            <Grid container justifyContent="flex-end" sx={{ color: '#303030' }}>
              <Grid item xs>
                <Link to="/forgetpassword" style={{ fontSize: "0.75rem", color: "#303030" }}>
                  Forgot password?
                </Link>
                <br></br>
                <Link to="/brand/login" style={{ fontSize: "0.75rem", color: "#303030" }}>
                  Login as Brand                </Link>
                <br></br>

                <Link to="/admin/login" style={{ fontSize: "0.75rem", color: "#303030" }}>
                  Login as Admin                </Link>
                <br></br>

                <Link to="/customer/login" style={{ fontSize: "0.75rem", color: "#303030" }}>
                  Login as Customer                </Link>

              </Grid>







              <Grid item>

                <Link to='/admin/signup' style={{ fontSize: "0.75rem", color: "#303030" }}> Don't have an account? Signup!</Link>

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