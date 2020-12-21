import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import image from "./Images/image2.svg";
import image2 from "./Images/image4.jpg";

//Controls actions

const useStyles = makeStyles({
  root: {
    minWidth: 180,
    marginTop: 10,
    marginRight: 30,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 10,
  },
  pos: {
    marginBottom: 15,
  },
  button: {
    color: "white",
    backgroundColor: "#00008B",
    marginLeft: "20%",
    padding: "10px 24px",
    borderRadius: "10px",
    fontSize: "15px",
  },
  button1: {
    color: "white",
    backgroundColor: "#00008B",
    marginLeft: "17%",
    padding: "10px 24px",
    borderRadius: "10px",
    fontSize: "12px",
  },
});
const Actions = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <div>
      <button className={classes.button}>Actions</button>
      <div>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image={image}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Understanding the power of computing.
              </Typography>
              <button className={classes.button1}>Learn Now</button>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <div>
        <div>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image={image2}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Track all your expenses on a daily basis.
                </Typography>
                <button className={classes.button1}>Track Now</button>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Actions;
