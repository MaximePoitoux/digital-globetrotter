import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

const useStyles = makeStyles({
  root: (props) => ({
    height: "20px",
    borderRadius: 8,
    "&.MuiLinearProgress-colorPrimary:not(.MuiLinearProgress-buffer)": {
      backgroundColor: "#dfe4ea",
    },
    "& .MuiLinearProgress-colorPrimary": {
      backgroundColor: "#dfe4ea",
    },
    "& .MuiLinearProgress-barColorPrimary": {
      backgroundColor: props.color,
    },
    "& .MuiLinearProgress-dashedColorPrimary": {
      backgroundImage:
        "radial-gradient(#f6ce95 0%, #f6ce95 16%, transparent 42%)",
    },
  }),
});

function LinearProgressWithLabel(props) {
  const classes = useStyles(props);
  const { name, value } = props;

  return (
    <Box display="flex" alignItems="center">
      <Box minWidth={160}>
        <Typography variant="body2" color="textSecondary">
          {name}
        </Typography>
      </Box>
      <Box width="100%" mr={1}>
        <LinearProgress
          variant="determinate"
          value={value}
          // valueBuffer={100}
          classes={{
            root: classes.root,
          }}
        />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">
          {`${Math.round(value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

export default function LinearWithValueLabel(props) {
  const classes = useStyles();
  const { name, value, color } = props;

  return (
    <div className={classes.root}>
      <LinearProgressWithLabel name={name} value={value} color={color} />
    </div>
  );
}

// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import LinearProgress from "@material-ui/core/LinearProgress";
// import Typography from "@material-ui/core/Typography";
// import Box from "@material-ui/core/Box";

// // let backgroundColorBar;

// const useStyles = makeStyles({
//   root: {
//     width: "100%",
//   },
//   linearProgress: (props) => ({
//     height: 10,
//     // backgroundColor: props.color,
//     borderRadius: 4,
//   }),
// });

// function LinearProgressWithLabel(props) {
//   const classes = useStyles(props);
//   const { value } = props;

//   return (
//     <Box display="flex" alignItems="center">
//       <Box width="100%" mr={1}>
//         <LinearProgress
//           // className={classes.linearProgress}
//           variant="determinate"
//           {...props}
//         />
//       </Box>
//       <Box minWidth={35}>
//         <Typography variant="body2" color="textSecondary">
//           {`${Math.round(value)}%`}
//         </Typography>
//       </Box>
//     </Box>
//   );
// }

// export default function LinearProgressBar(props) {
//   const classes = useStyles();
//   const { name, value, color } = props;
//   // const [progressColor, setProgressColor] = React.useState({ color: color });

//   // if (value > 55) {
//   //   backgroundColorBar = "green";
//   // } else if (value < 55 && value > 30) {
//   //   backgroundColorBar = "orange";
//   // } else if (value < 30) {
//   //   backgroundColorBar = "red";
//   // } else {
//   //   backgroundColorBar = "grey";
//   // }

//   return (
//     <div className={classes.root}>
//       <LinearProgressWithLabel value={value} color={color} />
//       {name}
//     </div>
//   );
// }
