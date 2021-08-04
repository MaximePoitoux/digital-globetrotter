import { makeStyles } from "@material-ui/core/styles";
import { MdMovie } from "react-icons/md";
import { IoIosFitness } from "react-icons/io";
import { FaBus } from "react-icons/fa";
import { FaHamburger } from "react-icons/fa";
import { IoIosBeer } from "react-icons/io";
import { FaCoffee } from "react-icons/fa";
import { FaBreadSlice } from "react-icons/fa";
import { FaAppleAlt } from "react-icons/fa";
import { FaTaxi } from "react-icons/fa";
import { BsFillHouseFill } from "react-icons/bs";

const useStyles = makeStyles({
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
  costOfLivingContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflow: "auto",
    whiteSpace: "nowrap",
    height: "500px",
    overflowX: "hidden",
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
  priceContainer: {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
    fontWeight: "bold",
    color: "#e17055",
  },
});

const Tab1 = ({ city }) => {
  const classes = useStyles();

  const getCostApartmentRentLarge = (city) => {
    return city._embedded["ua:details"].categories
      .filter((category) => category.id === "HOUSING")
      .map((housing) =>
        housing.data
          .filter((x) => x.id === "APARTMENT-RENT-LARGE")
          .map((x) => "$" + x.currency_dollar_value)
      );
  };

  const getCostApartmentRentMedium = (city) => {
    return city._embedded["ua:details"].categories
      .filter((category) => category.id === "HOUSING")
      .map((housing) =>
        housing.data
          .filter((x) => x.id === "APARTMENT-RENT-MEDIUM")
          .map((x) => "$" + x.currency_dollar_value)
      );
  };

  const getCostApartmentRentSmall = (city) => {
    return city._embedded["ua:details"].categories
      .filter((category) => category.id === "HOUSING")
      .map((housing) =>
        housing.data
          .filter((x) => x.id === "APARTMENT-RENT-SMALL")
          .map((x) => "$" + x.currency_dollar_value)
      );
  };

  const getCostCinema = (city) => {
    return city._embedded["ua:details"].categories
      .filter((category) => category.id === "COST-OF-LIVING")
      .map((costOfLiving) =>
        costOfLiving.data
          .filter((x) => x.id === "COST-CINEMA")
          .map((x) => "$" + x.currency_dollar_value)
      );
  };

  const getCostFitnessClub = (city) => {
    return city._embedded["ua:details"].categories
      .filter((category) => category.id === "COST-OF-LIVING")
      .map((costOfLiving) =>
        costOfLiving.data
          .filter((x) => x.id === "COST-FITNESS-CLUB")
          .map((x) => "$" + x.currency_dollar_value)
      );
  };

  const getCostPublicTransport = (city) => {
    return city._embedded["ua:details"].categories
      .filter((category) => category.id === "COST-OF-LIVING")
      .map((costOfLiving) =>
        costOfLiving.data
          .filter((x) => x.id === "COST-PUBLIC-TRANSPORT")
          .map((x) => "$" + x.currency_dollar_value)
      );
  };

  const getCostRestaurantMeal = (city) => {
    return city._embedded["ua:details"].categories
      .filter((category) => category.id === "COST-OF-LIVING")
      .map((costOfLiving) =>
        costOfLiving.data
          .filter((x) => x.id === "COST-RESTAURANT-MEAL")
          .map((x) => "$" + x.currency_dollar_value)
      );
  };

  const getCostImportBeer = (city) => {
    return city._embedded["ua:details"].categories
      .filter((category) => category.id === "COST-OF-LIVING")
      .map((costOfLiving) =>
        costOfLiving.data
          .filter((x) => x.id === "COST-IMPORT-BEER")
          .map((x) => "$" + x.currency_dollar_value)
      );
  };

  const getCostCoffee = (city) => {
    return city._embedded["ua:details"].categories
      .filter((category) => category.id === "COST-OF-LIVING")
      .map((costOfLiving) =>
        costOfLiving.data
          .filter((x) => x.id === "COST-CAPPUCCINO")
          .map((x) => "$" + x.currency_dollar_value)
      );
  };

  const getCostBread = (city) => {
    return city._embedded["ua:details"].categories
      .filter((category) => category.id === "COST-OF-LIVING")
      .map((costOfLiving) =>
        costOfLiving.data
          .filter((x) => x.id === "COST-BREAD")
          .map((x) => "$" + x.currency_dollar_value)
      );
  };

  const getCostApples = (city) => {
    return city._embedded["ua:details"].categories
      .filter((category) => category.id === "COST-OF-LIVING")
      .map((costOfLiving) =>
        costOfLiving.data
          .filter((x) => x.id === "COST-APPLES")
          .map((x) => "$" + x.currency_dollar_value)
      );
  };

  const getCostTaxi = (city) => {
    return city._embedded["ua:details"].categories
      .filter((category) => category.id === "COST-OF-LIVING")
      .map((costOfLiving) =>
        costOfLiving.data
          .filter((x) => x.id === "COST-TAXI")
          .map((x) => "$" + x.currency_dollar_value)
      );
  };

  return (
    <div className={classes.costOfLivingContainer}>
      <div className={classes.elementContainer}>
        <BsFillHouseFill
          style={{
            marginRight: "10px",
            fontSize: "1.4em",
            minWidth: "40px",
          }}
        />
        Rent Large Apartment
        <div className={classes.priceContainer}>
          {getCostApartmentRentLarge(city)}
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
        Rent Medium Apartment
        <div className={classes.priceContainer}>
          {getCostApartmentRentMedium(city)}
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
        Rent Small Apartment
        <div className={classes.priceContainer}>
          {getCostApartmentRentSmall(city)}
        </div>
      </div>
      <div className={classes.elementContainer}>
        <MdMovie
          style={{
            marginRight: "10px",
            fontSize: "1.4em",
            minWidth: "40px",
          }}
        />
        Movie Ticket{" "}
        <div className={classes.priceContainer}>{getCostCinema(city)}</div>
      </div>
      <div className={classes.elementContainer}>
        <IoIosFitness
          style={{
            marginRight: "10px",
            fontSize: "1.4em",
            minWidth: "40px",
          }}
        />
        Monthly Fitness Club Membership
        <div className={classes.priceContainer}>{getCostFitnessClub(city)}</div>
      </div>
      <div className={classes.elementContainer}>
        <FaBus
          style={{
            marginRight: "10px",
            fontSize: "1.4em",
            minWidth: "40px",
          }}
        />
        Monthly Public Transport
        <div className={classes.priceContainer}>
          {getCostPublicTransport(city)}
        </div>
      </div>
      <div className={classes.elementContainer}>
        <FaTaxi
          style={{
            marginRight: "10px",
            fontSize: "1.4em",
            minWidth: "40px",
          }}
        />
        5KM Taxi Ride
        <div className={classes.priceContainer}>{getCostTaxi(city)}</div>
      </div>
      <div className={classes.elementContainer}>
        <FaHamburger
          style={{
            marginRight: "10px",
            fontSize: "1.4em",
            minWidth: "40px",
          }}
        />
        Lunch
        <div className={classes.priceContainer}>
          {getCostRestaurantMeal(city)}
        </div>
      </div>
      <div className={classes.elementContainer}>
        <IoIosBeer
          style={{
            marginRight: "10px",
            fontSize: "1.4em",
            minWidth: "40px",
          }}
        />
        A Beer
        <div className={classes.priceContainer}>{getCostImportBeer(city)}</div>
      </div>
      <div className={classes.elementContainer}>
        <FaCoffee
          style={{
            marginRight: "10px",
            fontSize: "1.4em",
            minWidth: "40px",
          }}
        />
        A Coffee
        <div className={classes.priceContainer}>{getCostCoffee(city)}</div>
      </div>
      <div className={classes.elementContainer}>
        <FaBreadSlice
          style={{
            marginRight: "10px",
            fontSize: "1em",
            minWidth: "40px",
          }}
        />
        Bread
        <div className={classes.priceContainer}>{getCostBread(city)}</div>
      </div>
      <div className={classes.elementContainer}>
        <FaAppleAlt
          style={{
            marginRight: "10px",
            fontSize: "1.4em",
            minWidth: "40px",
          }}
        />
        A Kilogram of Apples
        <div className={classes.priceContainer}>{getCostApples(city)}</div>
      </div>
    </div>
  );
};

export default Tab1;
