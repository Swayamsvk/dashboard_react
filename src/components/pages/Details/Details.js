import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 200,
  },
  bullet: {
    display: "inline-block",
    margin: "2px 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  size: {
    fontSize: 12,
  },
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px",
  },
  colr: {
    color: "#00008b",
  },
  colr1: {
    color: "#1a83ff",
  },
});

// details

const Details = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid
        container
        spacing={4}
        className={classes.gridContainer}
        justify="center"
      >
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography
                className={(classes.title, classes.colr)}
                color="textSecondary"
                gutterBottom
              >
                Asset Balance
              </Typography>

              <Typography
                className={(classes.pos, classes.size)}
                color="textSecondary"
              >
                Enter amount
              </Typography>
              <Typography variant="h5" component="h2" className={classes.colr}>
                ₹ 1,25,000
              </Typography>
              <Typography
                className={(classes.pos, classes.size)}
                color="textSecondary"
              >
                Last Updated 3 Dec
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography
                className={(classes.title, classes.colr1)}
                color="textSecondary"
                gutterBottom
              >
                Growth Rate
              </Typography>

              <Typography
                className={(classes.pos, classes.size)}
                color="textSecondary"
              >
                Enter Growth Rate
              </Typography>
              <Typography variant="h5" component="h2" className={classes.colr1}>
                9.3%
              </Typography>
              <Typography
                className={(classes.pos, classes.size)}
                color="textSecondary"
              >
                Inflation 6%
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography
                className={(classes.title, classes.colr)}
                color="textSecondary"
                gutterBottom
              >
                Major Investments
              </Typography>

              <Typography
                className={(classes.pos, classes.size)}
                color="textSecondary"
              >
                Returns generated per month
              </Typography>
              <Typography variant="h5" component="h2" className={classes.colr}>
                ₹ 1,25,000
              </Typography>
              <Typography
                className={classes.pos}
                color="textSecondary"
              ></Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={4}
        className={classes.gridContainer}
        justify="flex-start"
      >
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography
                className={(classes.title, classes.colr)}
                color="textSecondary"
                gutterBottom
              >
                Financial Independence
              </Typography>

              <Typography
                className={(classes.pos, classes.size)}
                color="textSecondary"
              >
                Age
              </Typography>
              <Typography variant="h5" component="h2" className={classes.colr}>
                45 Years
              </Typography>
              <Typography
                className={(classes.pos, classes.size)}
                color="textSecondary"
              >
                Optimized Yes | No
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography
                className={(classes.title, classes.colr1)}
                color="textSecondary"
                gutterBottom
              >
                Average Expenses
              </Typography>

              <Typography
                className={(classes.pos, classes.size)}
                color="textSecondary"
              >
                Amount
              </Typography>
              <Typography variant="h5" component="h2" className={classes.colr1}>
                ₹ 25,000
              </Typography>
              <Typography
                className={(classes.pos, classes.size)}
                color="textSecondary"
              >
                3 months average ₹ 40,000
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Details;
