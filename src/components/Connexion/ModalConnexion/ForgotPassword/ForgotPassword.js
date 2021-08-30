import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useAuth } from "../../../../contexts/AuthContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { Grid, Avatar, Link, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Alert from "@material-ui/lab/Alert";
import LockOpenIcon from "@material-ui/icons/LockOpen";

const useStyles = makeStyles(() => ({
  dialog: {
    height: "500px",
    width: "340px",
  },
  errorMessage: {
    color: "rgb(238, 82, 83)",
  },
}));

const ForgotPassword = ({ openDialog, handleCloseDialog }) => {
  const classes = useStyles();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const initialValues = {
    email: "",
  };

  const { resetPassword } = useAuth();

  // const history = useHistory();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Please enter valid email").required("Required"),
  });

  async function onSubmit(values, props) {
    try {
      setError("");
      await resetPassword(values.email);
      props.resetForm();
      props.setSubmitting(false);
      setTimeout(() => {
        handleCloseDialog();
        setMessage("");
      }, 3000);
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("this email doesn't exist");
    }
  }

  return (
    <Dialog
      open={openDialog}
      onClose={handleCloseDialog}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent className={classes.dialog}>
        <Grid align="center">
          <Avatar style={{ background: "rgb(238, 82, 83)" }}>
            <LockOpenIcon />
          </Avatar>
          <h2 style={{ marginBottom: 0 }}>Reset Password</h2>
          <Typography variant="caption">
            Please fill this form to reset password
          </Typography>
          {error && (
            <Alert style={{ margin: "10px 0px" }} severity="error">
              {error}
            </Alert>
          )}
          {message && (
            <Alert style={{ margin: "10px 0px" }} severity="success">
              {message}
            </Alert>
          )}
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {(props) => (
              <Form style={{ marginTop: "50px" }}>
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
                  {props.isSubmitting ? "Loading" : "Reset Password"}
                </Button>
              </Form>
            )}
          </Formik>
          <Typography style={{ marginTop: 40 }}>
            <Link
              style={{ color: "rgb(118, 118, 118)" }}
              href="#"
              onClick={handleCloseDialog}
            >
              Login
            </Link>
          </Typography>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default ForgotPassword;
