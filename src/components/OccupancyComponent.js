import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import app from './../firebase';

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

export default function OccupancyComponent() {
  const classes = useStyles();

  const [occupied, setOccupied] = useState(0)
  const [empty, setEmpty] = useState(100)

  useEffect(() => {
    const tablesRef = app.database().ref().child('tables')

    tablesRef.on('value', snap => {
      const tableList = snap.val()
      const totalTables = tableList.length
      let falseCount = 0;
      let trueCount = 0;
      for (let i = 0; i < totalTables; i++) {
        if (tableList[i].status == false) {
          falseCount++;
        } else {
          trueCount++;
        }
      }
      console.log("Occupied: " + (trueCount / totalTables));
      console.log("Empty: " + (falseCount / totalTables));

      setOccupied(trueCount / totalTables * 100);
      setEmpty(falseCount / totalTables * 100);
    });
  }, [])


  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
          Table Occupancy
        </Typography>
        <Typography className={classes.percentText} variant="h5" component="h2">
          {occupied}%
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Tables Ocuupied
        </Typography>

        <Typography className={classes.lowText}>
          Availability: <span className={classes.availableText}>{empty}%</span>
        </Typography>
      </CardContent>
    </Card>
  );
}