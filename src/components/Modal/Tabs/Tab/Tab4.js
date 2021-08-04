import { makeStyles } from "@material-ui/core/styles";
import { FaBaby } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { FaTransgenderAlt } from "react-icons/fa";
import { RiPsychotherapyFill } from "react-icons/ri";
import { FaNotEqual } from "react-icons/fa";
import { BiDonateBlood } from "react-icons/bi";
import { MdWork } from "react-icons/md";
import { FaBalanceScale } from "react-icons/fa";
import { BsFillHouseFill } from "react-icons/bs";
import { GiBigDiamondRing } from "react-icons/gi";
import { AiFillLike } from "react-icons/ai";
import { FaFistRaised } from "react-icons/fa";

const useStyles = makeStyles(() => ({
  "@global": {
    "*::-webkit-scrollbar": {
      width: "0.3em",
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "white",
    },
  },
  lgbtContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflow: "auto",
    whiteSpace: "nowrap",
    height: "500px",
  },
  elementContainer: {
    background: "white",
    width: "95%",
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    padding: "10px",
    margin: "5px",
    fontSize: "0.8em",
    borderRadius: "4px",
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
  },
  valueContainer: {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
    fontWeight: "bold",
    color: "#e17055",
    fontSize: "0.8em",
  },
}));

const Tab4 = ({ city }) => {
  const classes = useStyles();

  const getLgbtDetailAdoption = (city) => {
    return city._embedded["ua:details"].categories
      .filter((category) => category.id === "MINORITIES")
      .map((minority) =>
        minority.data
          .filter((x) => x.id === "LGBT-DETAIL-ADOPTION")
          .map((adoption) => adoption.string_value)
      );
  };

  const getLgbtDetailAgeOfConsent = (city) => {
    return city._embedded["ua:details"].categories
      .filter((category) => category.id === "MINORITIES")
      .map((minority) =>
        minority.data
          .filter((x) => x.id === "LGBT-DETAIL-AGE-OF-CONSENT")
          .map((adoption) => adoption.string_value)
      );
  };

  const getLgbtDetailChangingGender = (city) => {
    return city._embedded["ua:details"].categories
      .filter((category) => category.id === "MINORITIES")
      .map((minority) =>
        minority.data
          .filter((x) => x.id === "LGBT-DETAIL-CHANGING-GENDER")
          .map((adoption) => adoption.string_value)
      );
  };

  const getLgbtDetailConversionTherapy = (city) => {
    return city._embedded["ua:details"].categories
      .filter((category) => category.id === "MINORITIES")
      .map((minority) =>
        minority.data
          .filter((x) => x.id === "LGBT-DETAIL-CONVERSION-THERAPY")
          .map((adoption) => adoption.string_value)
      );
  };

  const getLgbtDetailDiscrimination = (city) => {
    return city._embedded["ua:details"].categories
      .filter((category) => category.id === "MINORITIES")
      .map((minority) =>
        minority.data
          .filter((x) => x.id === "LGBT-DETAIL-DISCRIMINATION")
          .map((adoption) => adoption.string_value)
      );
  };

  const getLgbtDetailDonatingBlood = (city) => {
    return city._embedded["ua:details"].categories
      .filter((category) => category.id === "MINORITIES")
      .map((minority) =>
        minority.data
          .filter((x) => x.id === "LGBT-DETAIL-DONATING-BLOOD")
          .map((adoption) => adoption.string_value)
      );
  };

  const getLgbtDetailEmploymentDiscrimination = (city) => {
    return city._embedded["ua:details"].categories
      .filter((category) => category.id === "MINORITIES")
      .map((minority) =>
        minority.data
          .filter((x) => x.id === "LGBT-DETAIL-EMPLOYMENT-DISCRIMINATION")
          .map((adoption) => adoption.string_value)
      );
  };

  const getLgbtDetailHomosexuality = (city) => {
    return city._embedded["ua:details"].categories
      .filter((category) => category.id === "MINORITIES")
      .map((minority) =>
        minority.data
          .filter((x) => x.id === "LGBT-DETAIL-HOMOSEXUALITY")
          .map((adoption) => adoption.string_value)
      );
  };

  const getLgbtDetailHousingDiscrimination = (city) => {
    return city._embedded["ua:details"].categories
      .filter((category) => category.id === "MINORITIES")
      .map((minority) =>
        minority.data
          .filter((x) => x.id === "LGBT-DETAIL-HOUSING-DISCRIMINATION")
          .map((adoption) => adoption.string_value)
      );
  };

  const getLgbtDetailMarriage = (city) => {
    return city._embedded["ua:details"].categories
      .filter((category) => category.id === "MINORITIES")
      .map((minority) =>
        minority.data
          .filter((x) => x.id === "LGBT-DETAIL-MARRIAGE")
          .map((adoption) => adoption.string_value)
      );
  };

  const getLgbtDetailOpinionPercentInFavor = (city) => {
    return city._embedded["ua:details"].categories
      .filter((category) => category.id === "MINORITIES")
      .map((minority) =>
        minority.data
          .filter((x) => x.id === "LGBT-DETAIL-OPINION-PERCENT-IN-FAVOR")
          .map((adoption) => convertPercentage(adoption.percent_value) + " %")
      );
  };

  const getToleranceTowardsMinorities = (city) => {
    return city._embedded["ua:details"].categories
      .filter((category) => category.id === "MINORITIES")
      .map((minority) =>
        minority.data
          .filter((x) => x.id === "TOLERANCE-TOWARDS-MINORITIES-TELESCORE")
          .map((adoption) => Math.round(adoption.float_value * 100) + " %")
      );
  };

  const convertPercentage = (number) => {
    const num = Number(number);
    const roundedString = num.toFixed(2);
    const rounded = Number(roundedString) * 100;

    return rounded;
  };

  return (
    <div className={classes.lgbtContainer}>
      <div className={classes.elementContainer}>
        <FaBaby
          style={{
            marginRight: "10px",
            fontSize: "1.4em",
            minWidth: "40px",
          }}
        />
        LGBT adoption rights
        <div className={classes.valueContainer}>
          {getLgbtDetailAdoption(city)}
        </div>
      </div>
      <div className={classes.elementContainer}>
        <FaHandshake
          style={{
            marginRight: "10px",
            fontSize: "1.4em",
            minWidth: "40px",
          }}
        />
        LGBT age of consent
        <div className={classes.valueContainer}>
          {getLgbtDetailAgeOfConsent(city)}
        </div>
      </div>
      <div className={classes.elementContainer}>
        <FaTransgenderAlt
          style={{
            marginRight: "10px",
            fontSize: "1.4em",
            minWidth: "40px",
          }}
        />
        LGBT gender changing rights
        <div className={classes.valueContainer}>
          {getLgbtDetailChangingGender(city)}
        </div>
      </div>
      <div className={classes.elementContainer}>
        <RiPsychotherapyFill
          style={{
            marginRight: "10px",
            fontSize: "1.4em",
            minWidth: "40px",
          }}
        />
        LGBT conversion therapy regulations
        <div className={classes.valueContainer}>
          {getLgbtDetailConversionTherapy(city)}
        </div>
      </div>
      <div className={classes.elementContainer}>
        <FaNotEqual
          style={{
            marginRight: "10px",
            fontSize: "1.4em",
            minWidth: "40px",
          }}
        />
        LGBT discrimination legality
        <div className={classes.valueContainer}>
          {getLgbtDetailDiscrimination(city)}
        </div>
      </div>
      <div className={classes.elementContainer}>
        <BiDonateBlood
          style={{
            marginRight: "10px",
            fontSize: "1.4em",
            minWidth: "40px",
          }}
        />
        LGBT blood donation regulations
        <div className={classes.valueContainer}>
          {getLgbtDetailDonatingBlood(city)}
        </div>
      </div>
      <div className={classes.elementContainer}>
        <MdWork
          style={{
            marginRight: "10px",
            fontSize: "1.4em",
            minWidth: "40px",
          }}
        />
        LGBT employment discrimination legality
        <div className={classes.valueContainer}>
          {getLgbtDetailEmploymentDiscrimination(city)}
        </div>
      </div>
      <div className={classes.elementContainer}>
        <FaBalanceScale
          style={{
            marginRight: "10px",
            fontSize: "1.4em",
            minWidth: "40px",
          }}
        />
        LGBT homosexuality rights
        <div className={classes.valueContainer}>
          {getLgbtDetailHomosexuality(city)}
        </div>
      </div>
      <div className={classes.elementContainer}>
        <BsFillHouseFill
          style={{
            marginRight: "10px",
            fontSize: "1.4em",
            minWidth: "40px",
          }}
        />
        LGBT housing discrimination legality
        <div className={classes.valueContainer}>
          {getLgbtDetailHousingDiscrimination(city)}
        </div>
      </div>
      <div className={classes.elementContainer}>
        <GiBigDiamondRing
          style={{
            marginRight: "10px",
            fontSize: "1.4em",
            minWidth: "40px",
          }}
        />
        LGBT marriage rights
        <div className={classes.valueContainer}>
          {getLgbtDetailMarriage(city)}
        </div>
      </div>
      <div className={classes.elementContainer}>
        <AiFillLike
          style={{
            marginRight: "10px",
            fontSize: "1.4em",
            minWidth: "40px",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div> Homosexuality acceptance</div>
          <div style={{ fontSize: "0.7em" }}>
            (percent of the surveyed population in favor)
          </div>
        </div>
        <div className={classes.valueContainer}>
          {getLgbtDetailOpinionPercentInFavor(city)}
        </div>
      </div>
      <div className={classes.elementContainer}>
        <FaFistRaised
          style={{
            marginRight: "10px",
            fontSize: "1.4em",
            minWidth: "40px",
          }}
        />
        Tolerance towards minorities
        <div className={classes.valueContainer}>
          {getToleranceTowardsMinorities(city)}
        </div>
      </div>
    </div>
  );
};

export default Tab4;
