import React from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
  CircularProgress,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import * as yup from "yup";
import { useFormik } from "formik";
import { useForget } from "../../Hooks/useForget";
import CustomizedSnackbars from "../../Components/Toast";
import { Link } from "react-router-dom";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
});

export const ForgetPassword = () => {


  const [toastOpen, setToastOpen] = React.useState<boolean>(false);
  const [duration, setDuration] = React.useState<boolean>(false);
  const [forgetResponse, setForgetResponse] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);
  const { Forget } = useForget();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setLoading(true);
      Forget(values.email, setToastOpen, setLoading, setForgetResponse);
    },
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <CustomizedSnackbars
        open={toastOpen}
        setOpen={setToastOpen}
        autoHideDuration={setDuration}
        text={
          forgetResponse
            ? "A code to reset password has been sent to your email"
            : "Email does not exist"
        }
        severity={forgetResponse ? "success" : "error"}
      />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        color="primary.main"
      >
        <Avatar sx={{ m: 1, bgcolor: '#303030' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" sx={{ m: 1, color: '#303030' }}>
          Forgot Password
        </Typography>
        <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            onBlur={formik.handleBlur}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, textTransform: "none", backgroundColor: '#f9c712', "&:hover": { backgroundColor: '#bf980c' } }}
          >
            Send Password Link
          </Button>
          {loading && (
            <Grid container justifyContent="center">
              <CircularProgress color="secondary" />
            </Grid>
          )}
          <Grid container>
            <Grid item xs>
              <Link to="/" style={{ fontSize: "0.75rem", color: "#303030" }}>
                Go back to Sign In
              </Link>
            </Grid>
            <Grid item>
              <Link
                to="/signup"
                style={{ fontSize: "0.75rem", color: "#303030" }}
              >
                Not a member? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};