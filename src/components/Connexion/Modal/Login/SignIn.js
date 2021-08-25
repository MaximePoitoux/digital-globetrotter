import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  TextField,
  Typography,
} from "@material-ui/core";
import LockOpenIcon from "@material-ui/icons/LockOpen";

const useStyles = makeStyles(() => ({
  errorMessage: {
    color: "rgb(238, 82, 83)",
  },
}));

const SignIn = ({ handleChange }) => {
  const classes = useStyles();

  const initialValues = {
    email: "",
    password: "",
    remember: false,
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Please enter valid email").required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = (values, props) => {
    setTimeout(() => {
      console.log(values);
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);
  };

  return (
    <Grid style={{ marginTop: 20 }}>
      <Grid align="center">
        <Avatar style={{ background: "rgb(238, 82, 83)" }}>
          <LockOpenIcon />
        </Avatar>
        <h2 style={{ marginBottom: 0 }}>Sign In</h2>
        <Typography variant="caption">
          Please fill this form to log in
        </Typography>
      </Grid>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(props) => (
          <Form>
            <Field
              as={TextField}
              label="Email"
              name="email"
              placeholder="Enter email"
              helperText={
                <ErrorMessage
                  component="div"
                  className={classes.errorMessage}
                  name="email"
                />
              }
              fullWidth
              required
            />
            <Field
              as={TextField}
              label="Password"
              name="password"
              placeholder="Enter password"
              helperText={
                <ErrorMessage
                  component="div"
                  className={classes.errorMessage}
                  name="password"
                />
              }
              fullWidth
              type="password"
              required
            />
            <Field
              style={{ marginTop: "10px" }}
              as={FormControlLabel}
              name="remember"
              control={<Checkbox style={{ color: "rgb(238, 82, 83)" }} />}
              label="Remember me"
            />
            <Button
              style={{
                background: "rgb(238, 82, 83)",
                color: "white",
                marginTop: "40px",
              }}
              type="submit"
              variant="contained"
              fullWidth
              disabled={props.isSubmitting}
            >
              {props.isSubmitting ? "Loading" : "Sign in"}
            </Button>
          </Form>
        )}
      </Formik>
      <Typography style={{ marginTop: "40px" }}>
        <Link href="#">Forgot password ?</Link>
      </Typography>
      <Typography style={{ marginTop: "5px" }}>
        Do you have an account ?
        <Link href="#" onClick={() => handleChange("event", 1)}>
          Sign Up
        </Link>
      </Typography>
    </Grid>
  );
};

export default SignIn;
