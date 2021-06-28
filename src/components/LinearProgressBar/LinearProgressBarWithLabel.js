import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { BsFillHouseFill } from "react-icons/bs";
import { BiDollar } from "react-icons/bi";
import { IoRocketSharp } from "react-icons/io5";
import { GiReceiveMoney } from "react-icons/gi";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaSubway } from "react-icons/fa";
import { IoBusiness } from "react-icons/io5";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { GiHealthNormal } from "react-icons/gi";
import { IoSchoolSharp } from "react-icons/io5";
import { FaLeaf } from "react-icons/fa";
import { RiExchangeDollarFill } from "react-icons/ri";
import { FaCoins } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { FaTheaterMasks } from "react-icons/fa";
import { GiLovers } from "react-icons/gi";
import { BiDrink } from "react-icons/bi";

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
const LinearProgressBarWithLabel = (props) => {
  const { name, value, color } = props;
  const classes = useStyles(props);

  const chooseCategoryIcon = () => {
    let categoryIcon;

    switch (name) {
      case "Housing":
        categoryIcon = (
          <BsFillHouseFill color={color} style={{ marginRight: "4px" }} />
        );
        break;
      case "Cost of Living":
        categoryIcon = (
          <BiDollar color={color} style={{ marginRight: "4px" }} />
        );
        break;
      case "Startups":
        categoryIcon = (
          <IoRocketSharp color={color} style={{ marginRight: "4px" }} />
        );
        break;
      case "Venture Capital":
        categoryIcon = (
          <GiReceiveMoney color={color} style={{ marginRight: "4px" }} />
        );
        break;
      case "Travel Connectivity":
        categoryIcon = (
          <AiOutlineGlobal color={color} style={{ marginRight: "4px" }} />
        );
        break;
      case "Commute":
        categoryIcon = (
          <FaSubway color={color} style={{ marginRight: "4px" }} />
        );
        break;
      case "Business Freedom":
        categoryIcon = (
          <IoBusiness color={color} style={{ marginRight: "4px" }} />
        );
        break;
      case "Safety":
        categoryIcon = (
          <AiFillSafetyCertificate
            color={color}
            style={{ marginRight: "4px" }}
          />
        );
        break;
      case "Healthcare":
        categoryIcon = (
          <GiHealthNormal color={color} style={{ marginRight: "4px" }} />
        );
        break;
      case "Education":
        categoryIcon = (
          <IoSchoolSharp color={color} style={{ marginRight: "4px" }} />
        );
        break;
      case "Environmental Quality":
        categoryIcon = <FaLeaf color={color} style={{ marginRight: "4px" }} />;
        break;
      case "Economy":
        categoryIcon = (
          <RiExchangeDollarFill color={color} style={{ marginRight: "4px" }} />
        );
        break;
      case "Taxation":
        categoryIcon = <FaCoins color={color} style={{ marginRight: "4px" }} />;
        break;
      case "Internet Access":
        categoryIcon = <FaWifi color={color} style={{ marginRight: "4px" }} />;
        break;
      case "Leisure & Culture":
        categoryIcon = (
          <FaTheaterMasks color={color} style={{ marginRight: "4px" }} />
        );
        break;
      case "Tolerance":
        categoryIcon = (
          <GiLovers color={color} style={{ marginRight: "4px" }} />
        );
        break;
      case "Outdoors":
        categoryIcon = <BiDrink color={color} style={{ marginRight: "4px" }} />;
        break;
      default:
        return null;
    }

    return categoryIcon;
  };

  return (
    <div className={classes.root}>
      <Box display="flex" alignItems="center">
        <Box display="flex" alignItems="center" minWidth={170}>
          {chooseCategoryIcon()}
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
    </div>
  );
};

LinearProgressBarWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

export default LinearProgressBarWithLabel;

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
