import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    minWidth: 250,
    maxHeight: 350,
    margin: "6px",
  },
  media: {
    height: 250,
  },
});

export default function CityElement(props) {
  const classes = useStyles();

  return (
    <>
      {props.cities.map((city, index) => (
        <Card className={classes.card} key={city + index}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={city._embedded["ua:images"].photos[0].image.mobile}
              title={city.name}
            />
            <CardContent>
              <Typography variant="h6">{city.name}</Typography>
              <Typography variant="h6">
                {city.full_name.split(",")[1]}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </>
  );
}
