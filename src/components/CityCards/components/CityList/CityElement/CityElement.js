import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    minWidth: 300,
    maxHeight: 100,
    margin: "6px",
  },
});

export default function CityElement(props) {
  const classes = useStyles();

  return (
    <>
      {props.cities.map((city, index) => (
        <Card className={classes.card} key={city + index}>
          <CardActionArea>
            <CardContent>
              <Typography variant="h6">{city.name}</Typography>
              <Typography variant="subtitle1">{city.country}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </>
  );
}
