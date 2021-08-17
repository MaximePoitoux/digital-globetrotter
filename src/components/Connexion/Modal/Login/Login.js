import {
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  TextField,
  Typography,
} from "@material-ui/core";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  errorMessage: {
    color: "rgb(238, 82, 83)",
  },
}));

const Login = () => {
  const classes = useStyles();

  const initialValues = {
    username: "",
    password: "",
    remember: false,
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .email("Please enter valid email")
      .required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = (values, props) => {
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(props) => (
          <Form>
            <Field
              as={TextField}
              label="Username"
              name="username"
              placeholder="Enter username"
              helperText={
                <ErrorMessage
                  component="div"
                  className={classes.errorMessage}
                  name="username"
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
        Do you have an account ?<Link href="#">Sign Up</Link>
      </Typography>
    </>
  );
};

export default Login;
