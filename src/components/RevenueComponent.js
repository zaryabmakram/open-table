import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';

import app from './../firebase';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    // maxWidth: 300,
  },
  title: {
    fontSize: 25,
  },
  revenueText: {
    textAlign: "center",
    fontSize: 42,
    color: '#1565c0',
  },
  lowText: {
    textAlign: "center",
    fontSize: 16
  },
  highlightText: {
    color: '#1565c0',
    fontWeight: 'bold',
  },
  root: {
    flexGrow: 1,
    margin: 10,
  },

  barHeight: {
    height: 5,
  }
});

export default function RevenueComponent() {
  const classes = useStyles();

  const [profit, setProfit] = useState(0)
  const todayGoal = 100000;

  useEffect(() => {
    const ordersRef = app.database().ref().child('orders')
    ordersRef.on('value', snap => {
      const orderData = snap.val()
      let lprofit = 0;
      for (let key in orderData) {
        const order = orderData[key]
        lprofit += order.total;
      }
      setProfit(lprofit);
    });
  }, []);
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
          Today's Revenue
        </Typography>
        <Typography className={classes.revenueText} variant="h5" component="h2">
          Rs. {profit}
        </Typography>
        <div className={classes.root}>
          <LinearProgress variant="determinate" value={profit / todayGoal * 100} className={classes.barHeight} />
        </div>
        <Typography className={classes.lowText} color="textSecondary">
          <span className={classes.highlightText}>{(profit / todayGoal * 100).toFixed(1)}%</span> of <span className={classes.highlightText}>Rs. {todayGoal}</span> daily target.
        </Typography>
      </CardContent>
    </Card>
  );
}