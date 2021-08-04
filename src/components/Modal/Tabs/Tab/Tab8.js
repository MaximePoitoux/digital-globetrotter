import { makeStyles } from "@material-ui/core/styles";
import { GiPalette, GiCastle, GiIonicColumn, GiElephant } from "react-icons/gi";
import { MdMovie } from "react-icons/md";
import { FaTheaterMasks, FaMusic } from "react-icons/fa";
import { BiShow, BiRun } from "react-icons/bi";

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
  cultureContainer: {
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
  priceContainer: {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
    fontWeight: "bold",
    color: "#e17055",
  },
});

const Tab8 = ({ city }) => {
  const classes = useStyles();

  const getArtGalleriesVenueCount = (city) => {
    return city._embedded["ua:details"].categories
      .filter((category) => category.id === "CULTURE")
      .map((culture) =>
        culture.data
          .filter((c) => c.id === "CULTURE-ART-GALLERIES-VENUE-COUNT")
          .map((gallery) => gallery.int_value)
      );
  };

  const getCinemasVenueCount = (city) => {
    return city._embedded["ua:details"].categories
      .filter((category) => category.id === "CULTURE")
      .map((culture) =>
        culture.data
          .filter((c) => c.id === "CULTURE-CINEMAS-VENUE-COUNT")
          .map((cinema) => cinema.int_value)
      );
  };

  const getComedyClubsVenueCount = (city) => {
    return city._embedded["ua:details"].categories
      .filter((category) => category.id === "CULTURE")
      .map((culture) =>
        culture.data
          .filter((c) => c.id === "CULTURE-COMEDY-CLUBS-VENUE-COUNT")
          .map((comedy) => comedy.int_value)
      );
  };

  const getHistoricalSitesVenueCount = (city) => {
    return city._embedded["ua:details"].categories
      .filter((category) => category.id === "CULTURE")
      .map((culture) =>
        culture.data
          .filter((c) => c.id === "CULTURE-HISTORICAL-SITES-VENUE-COUNT")
          .map((historical) => historical.int_value)
      );
  };

  const getConcertsVenueCount = (city) => {
    return city._embedded["ua:details"].categories
      .filter((category) => category.id === "CULTURE")
      .map((culture) =>
        culture.data
          .filter((c) => c.id === "CULTURE-MUSEUMS-VENUE-COUNT")
          .map((museum) => museum.int_value)
      );
  };

  const getMuseumsVenueCount = (city) => {
    return city._embedded["ua:details"].categories
      .filter((category) => category.id === "CULTURE")
      .map((culture) =>
        culture.data
          .filter((c) => c.id === "CULTURE-CONCERTS-VENUE-COUNT")
          .map((concert) => concert.int_value)
      );
  };

  const getPerformingArtsVenueCount = (city) => {
    return city._embedded["ua:details"].categories
      .filter((category) => category.id === "CULTURE")
      .map((culture) =>
        culture.data
          .filter((c) => c.id === "CULTURE-PERFORMING-ARTS-VENUE-COUNT")
          .map((performing) => performing.int_value)
      );
  };

  const getSportsVenueCount = (city) => {
    return city._embedded["ua:details"].categories
      .filter((category) => category.id === "CULTURE")
      .map((culture) =>
        culture.data
          .filter((c) => c.id === "CULTURE-SPORTS-VENUE-COUNT")
          .map((sport) => sport.int_value)
      );
  };

  const getZoosVenueCount = (city) => {
    return city._embedded["ua:details"].categories
      .filter((category) => category.id === "CULTURE")
      .map((culture) =>
        culture.data
          .filter((c) => c.id === "CULTURE-ZOOS-VENUE-COUNT")
          .map((zoo) => zoo.int_value)
      );
  };

  return (
    <div className={classes.cultureContainer}>
      <div className={classes.elementContainer}>
        <GiPalette
          style={{
            marginRight: "10px",
            fontSize: "1.4em",
            minWidth: "40px",
          }}
        />
        Art galleries
        <div className={classes.priceContainer}>
          {getArtGalleriesVenueCount(city)}
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
        Cinemas
        <div className={classes.priceContainer}>
          {getCinemasVenueCount(city)}
        </div>
      </div>
      <div className={classes.elementContainer}>
        <FaTheaterMasks
          style={{
            marginRight: "10px",
            fontSize: "1.4em",
            minWidth: "40px",
          }}
        />
        Comedy clubs
        <div className={classes.priceContainer}>
          {getComedyClubsVenueCount(city)}
        </div>
      </div>
      <div className={classes.elementContainer}>
        <FaMusic
          style={{
            marginRight: "10px",
            fontSize: "1.4em",
            minWidth: "40px",
          }}
        />
        Concert venues
        <div className={classes.priceContainer}>
          {getConcertsVenueCount(city)}
        </div>
      </div>
      <div className={classes.elementContainer}>
        <GiCastle
          style={{
            marginRight: "10px",
            fontSize: "1.4em",
            minWidth: "40px",
          }}
        />
        Historical sites
        <div className={classes.priceContainer}>
          {getHistoricalSitesVenueCount(city)}
        </div>
      </div>
      <div className={classes.elementContainer}>
        <GiIonicColumn
          style={{
            marginRight: "10px",
            fontSize: "1.4em",
            minWidth: "40px",
          }}
        />
        Museums
        <div className={classes.priceContainer}>
          {getMuseumsVenueCount(city)}
        </div>
      </div>
      <div className={classes.elementContainer}>
        <BiShow
          style={{
            marginRight: "10px",
            fontSize: "1.4em",
            minWidth: "40px",
          }}
        />
        Performing art venues
        <div className={classes.priceContainer}>
          {getPerformingArtsVenueCount(city)}
        </div>
      </div>
      <div className={classes.elementContainer}>
        <BiRun
          style={{
            marginRight: "10px",
            fontSize: "1.4em",
            minWidth: "40px",
          }}
        />
        Sport venues
        <div className={classes.priceContainer}>
          {getSportsVenueCount(city)}
        </div>
      </div>
      <div className={classes.elementContainer}>
        <GiElephant
          style={{
            marginRight: "10px",
            fontSize: "1.4em",
            minWidth: "40px",
          }}
        />
        Zoos
        <div className={classes.priceContainer}>{getZoosVenueCount(city)}</div>
      </div>
    </div>
  );
};

export default Tab8;
