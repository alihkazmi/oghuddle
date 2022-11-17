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
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import FormHelperText from '@mui/material/FormHelperText';
import CircularProgress from '@mui/material/CircularProgress';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import CustomizedSnackbars from '../../Components/Toast';
import { FormLabel } from '@mui/material';
import { useResetPassword } from '../../Hooks/useReset';

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

export default function Resetpassword() {
  const token = window.localStorage.getItem("token")

  const { ResetPassword } = useResetPassword();
  const [showPassword, setShowPassword] = React.useState(true)
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(true)
  const [loading, setLoading] = React.useState(false)
  const [toastOpen, setToastOpen] = React.useState(false)
  const [resetResponse, setResetResponse] = React.useState<number | null>(null)




  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };


  const validationSchema = yup.object({
    password: yup
      .string()
      .min(6, "Password should be of minimum 6 characters length")
      .oneOf([yup.ref("password")], "Passwords do not match") // yup.ref use horaha hai password match karwanay k liye
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .min(6, "Password should be of minimum 6 characters length")
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm your password"),
  });
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      ResetPassword(values.password, setLoading, setToastOpen, setResetResponse)
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
            Enter New Password
          </Typography>
          <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 3, }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                {/* <FormControl fullWidth margin="normal" variant="outlined">
                  <InputLabel>Reset Token Code</InputLabel>
                  <OutlinedInput
                    fullWidth
                    id="code"
                    name="code"
                    label="code"
                    type={"text"}
                    value={formik.values.code}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.code &&
                      Boolean(formik.errors.code)
                    }
                    onBlur={formik.handleBlur}

                  />
                  <FormHelperText error>
                    {formik.touched.code && formik.errors.code}
                  </FormHelperText>
                </FormControl> */}

                <FormControl fullWidth margin="normal" variant="outlined">
                  <InputLabel>Password</InputLabel>
                  <OutlinedInput
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    type={!showPassword ? "text" : "password"}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.password &&
                      Boolean(formik.errors.password)
                    }
                    onBlur={formik.handleBlur}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => {
                            setShowPassword(!showPassword);
                          }}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  <FormHelperText error>
                    {formik.touched.password && formik.errors.password}
                  </FormHelperText>
                </FormControl>

              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth margin="normal" variant="outlined">
                  <InputLabel>Confirm New Password</InputLabel>
                  <OutlinedInput
                    fullWidth
                    id="confirmPassword"
                    name="confirmPassword"
                    label="Confirm New Password"
                    type={!showConfirmPassword ? "text" : "password"}
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.password &&
                      Boolean(formik.errors.confirmPassword)
                    }
                    onBlur={formik.handleBlur}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => {
                            setShowConfirmPassword(!showConfirmPassword);
                          }}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  <FormHelperText error>
                    {formik.touched.confirmPassword && formik.errors.confirmPassword}
                  </FormHelperText>
                </FormControl>
                {loading && (
                  <Grid container justifyContent="center">
                    <CircularProgress color="secondary" />
                  </Grid>
                )}
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 5, backgroundColor: '#f9c712', "&:hover": { backgroundColor: '#bf980c' } }}
            >
              Submit Password
            </Button>
            <CustomizedSnackbars setToastOpen={true} text={"success"}></CustomizedSnackbars>
            <Grid container justifyContent="flex-end" sx={{ color: '#303030' }}>
              <Grid item>
                <Link to='/' style={{ color: '#303030' }}>
                  Back to Login Page              </Link>
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