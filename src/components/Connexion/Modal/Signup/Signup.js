import { useState } from "react";
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
} from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({}));

const Signup = () => {
  const classes = useStyles();

  const [value, setValue] = useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Grid align="center">
      <Avatar style={{ background: "rgb(238, 82, 83)" }}>
        <AddCircleOutlineIcon />
      </Avatar>
      <h2 style={{ margin: 0 }}>Sign Up</h2>
      <Typography variant="caption">
        Please fill this form to create an account
      </Typography>
      <form>
        <TextField fullWidth label="Name" placeholder="Enter your name" />
        <TextField fullWidth label="Email" placeholder="Enter your email" />
        <FormControl fullWidth component="fieldset" style={{ marginTop: 20 }}>
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            style={{ flexDirection: "row" }}
            aria-label="gender"
            name="gender"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
        </FormControl>
        <TextField
          fullWidth
          label="Password"
          placeholder="Enter your password"
        />
        <TextField
          fullWidth
          label="Confirm Password"
          placeholder="Confirm your password"
        />
        <FormControlLabel
          style={{ width: "100%", marginTop: 10 }}
          control={<Checkbox name="checkedA" />}
          label="I accept the terms and conditions"
        />
        <Button
          fullWidth
          style={{
            background: "rgb(238, 82, 83)",
            color: "white",
            marginTop: 20,
          }}
          type="submit"
          variant="contained"
        >
          Sign Up
        </Button>
      </form>
    </Grid>
  );
};

export default Signup;
