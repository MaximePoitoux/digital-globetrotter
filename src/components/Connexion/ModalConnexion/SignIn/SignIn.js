import { useState } from "react";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
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
import Alert from "@material-ui/lab/Alert";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import { useAuth } from "../../../../contexts/AuthContext";

const useStyles = makeStyles(() => ({
  errorMessage: {
    color: "rgb(238, 82, 83)",
  },
}));

const SignIn = ({ handleChange, handleCloseModal }) => {
  const classes = useStyles();
  const [error, setError] = useState("");

  const history = useHistory();

  const initialValues = {
    email: "",
    password: "",
    remember: false,
  };

  const { signin } = useAuth();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Please enter valid email").required("Required"),
    password: Yup.string()
      .min(8, "Your password must be at least 8 characters in length")
      .required("Required"),
  });

  async function onSubmit(values, props) {
    try {
      setError("");
      await signin(values.email, values.password);
      props.resetForm();
      props.setSubmitting(false);
      handleCloseModal();
      history.push("/profile");
    } catch {
      setError("Your email or password are not correct");
    }
  }

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
      {error && (
        <Alert style={{ margin: "10px 0px" }} severity="error">
          {error}
        </Alert>
      )}
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
                marginTop: 20,
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
      <Typography style={{ marginTop: 40 }}>
        <Link style={{ color: "rgb(118, 118, 118)" }} href="#">
          Forgot password ?
        </Link>
      </Typography>
      <Typography style={{ marginTop: "5px", color: "rgb(118, 118, 118)" }}>
        New to Globetrotter ?
        <Link
          style={{ color: "inherit" }}
          href="#"
          onClick={() => handleChange("event", 1)}
        >
          {" "}
          Sign Up
        </Link>
      </Typography>
    </Grid>
  );
};

export default SignIn;
