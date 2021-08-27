import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Grid,
  Typography,
  Avatar,
  TextField,
  Button,
  Checkbox,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormHelperText,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { useAuth } from "../../../../contexts/AuthContext";

const useStyles = makeStyles(() => ({
  errorMessage: {
    color: "rgb(238, 82, 83)",
  },
}));

const SignUp = ({ handleChange }) => {
  const classes = useStyles();
  const { signup } = useAuth();
  const [error, setError] = useState("");

  const initialValues = {
    name: "",
    email: "",
    gender: "",
    password: "",
    confirmPassword: "",
    termsAndConditions: false,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Your name must be at least 3 characters in length")
      .required("Required"),
    email: Yup.string().email("Please enter valid email").required("Required"),
    gender: Yup.string().oneOf(["male", "female"]).required("Required"),
    password: Yup.string()
      .min(8, "Your password must be at least 8 characters in length")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Password do not match")
      .required("Required"),
    termsAndConditions: Yup.string().oneOf(
      ["true"],
      "Accept terms & conditions"
    ),
  });

  async function onSubmit(values, props) {
    try {
      setError("");
      await signup(values.email, values.password);
      props.resetForm();
      props.setSubmitting(false);
      handleChange("event", 0);
    } catch {
      setError("The email address is already used");
    }
  }

  return (
    <Grid style={{ marginTop: 20 }}>
      <Grid align="center">
        <Avatar style={{ background: "rgb(238, 82, 83)" }}>
          <AddCircleOutlineIcon />
        </Avatar>
        <h2 style={{ marginBottom: 0 }}>Sign Up</h2>
        <Typography variant="caption">
          Please fill this form to create an account
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
              fullWidth
              label="Name"
              name="name"
              placeholder="Enter your name"
              helperText={
                <ErrorMessage
                  component="div"
                  className={classes.errorMessage}
                  name="name"
                />
              }
              required
            />
            <Field
              as={TextField}
              fullWidth
              label="Email"
              name="email"
              placeholder="Enter your email"
              helperText={
                <ErrorMessage
                  component="div"
                  className={classes.errorMessage}
                  name="email"
                />
              }
              required
            />
            <FormControl
              fullWidth
              component="fieldset"
              style={{ marginTop: 20 }}
            >
              <FormLabel component="legend">Gender</FormLabel>
              <Field
                as={RadioGroup}
                style={{ display: "initial" }}
                aria-label="gender"
                name="gender"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
              </Field>
            </FormControl>
            <FormHelperText className={classes.errorMessage}>
              <ErrorMessage name="gender" />
            </FormHelperText>
            <Field
              as={TextField}
              fullWidth
              label="Password"
              name="password"
              placeholder="Enter your password"
              helperText={
                <ErrorMessage
                  component="div"
                  className={classes.errorMessage}
                  name="password"
                />
              }
              type="password"
              required
            />
            <Field
              as={TextField}
              fullWidth
              label="Confirm Password"
              name="confirmPassword"
              placeholder="Confirm your password"
              helperText={
                <ErrorMessage
                  component="div"
                  className={classes.errorMessage}
                  name="confirmPassword"
                />
              }
              type="password"
              required
            />
            <FormControlLabel
              style={{ marginTop: 10 }}
              control={<Field as={Checkbox} name="termsAndConditions" />}
              label="I accept the terms and conditions"
            />
            <FormHelperText className={classes.errorMessage}>
              <ErrorMessage name="termsAndConditions" />
            </FormHelperText>
            <Button
              fullWidth
              style={{
                background: "rgb(238, 82, 83)",
                color: "white",
                marginTop: 20,
              }}
              type="submit"
              variant="contained"
              disabled={props.isSubmitting}
            >
              {props.isSubmitting ? "Loading" : "Sign up"}
            </Button>
          </Form>
        )}
      </Formik>
    </Grid>
  );
};

export default SignUp;
