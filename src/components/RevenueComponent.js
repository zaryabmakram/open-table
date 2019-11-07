import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import LinearProgressBar from './LinearProgressBar';
const useStyles = makeStyles({
  card: {
    minWidth: 275,
    // maxWidth: 300,
  },
  title: {
    fontSize: 25,
  },
  lowText: {
    fontSize: 14,
    marginBottom: 18,
    textAlign: "center",
    textTransform: 'uppercase',

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
  }
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
          Today's Revenue
        </Typography>
        <Typography className={classes.revenueText} variant="h5" component="h2">
          Rs. 60,000
        </Typography>
        <LinearProgressBar />
        <Typography className={classes.lowText} color="textSecondary">
            <span className={classes.highlightText}>50%</span> of <span className={classes.highlightText}>Rs. 100,000</span> daily target.
        </Typography>
      </CardContent>
    </Card>
  );
}