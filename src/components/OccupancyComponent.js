import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    // maxWidth: 300,
  },
  title: {
    fontSize: 25,
  },
  pos: {
    fontSize: 14,
    marginBottom: 18,
    textAlign: "center",
    textTransform: 'uppercase',

  },
  centerText: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: "center",
  },
  percentText: {
    textAlign: "center",
    fontSize: 56,
    color: '#1565c0',
  },
  lowText: {
    textAlign: "center",
    textTransform: 'uppercase',
    fontSize: 20
  },
  availableText: {
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
          Table Occupancy
        </Typography>
        <Typography className={classes.percentText} variant="h5" component="h2">
          60%
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Tables Ocuupied
        </Typography>

        <Typography className={classes.lowText}>
          Availability: <span className={classes.availableText}>40%</span>
        </Typography>
      </CardContent>
    </Card>
  );
}