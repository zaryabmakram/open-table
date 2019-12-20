import React, { useState, useEffect } from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge';

import TimelineBar from './TimelineBar';

import app from './../firebase';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    minHeight: 428
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
  mainText: {
    fontSize: 18,
  },
  textConatiner: {
    marginBottom: 65,
  },
  timelineBar: {
    marginTop: 8,
  },
});

export default function TimelineComponent() {
  const classes = useStyles();


  const [pending, setPending] = useState(0)
  const [recieved, setRecieved] = useState(0)
  const [delivered, setDelivered] = useState(0)
  const [completed, setCompleted] = useState(0)

  useEffect(() => {
    const orderRef = app.database().ref().child('orders')
    orderRef.on('value', snap => {
      const orderData = snap.val()

      let pendingCount = 0;
      let deliveredCount = 0;
      let completedCount = 0;
      let recievedCount = 0;
      for (let key in orderData) {
        const order = orderData[key]
        if (order.status === "Pending")
          pendingCount++
        else if (order.status === "Recieved")
          recievedCount++
        else if (order.status === "Delivered")
          deliveredCount++
        else
          completedCount++
      }
      setPending(pendingCount)
      setRecieved(recievedCount)
      setDelivered(deliveredCount)
      setCompleted(completedCount)
    });
  }, [])


  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
          Timeline
        </Typography>
        <Grid container className={classes.root} spacing={2}>
          <Grid item>
            <div className={classes.timelineBar}>
              <TimelineBar
                setMarker={[11, 40, 69, 99]}
              />
            </div>
          </Grid>
          <Grid item>
            <div className={classes.textConatiner}>
              {/* <Typography color="textSecondary">10 minutes ago</Typography> */}
              <Typography className={classes.mainText}><Badge badgeContent={"" + pending} color="primary" style={{ marginRight: 10 }} /> Order(s) Pending</Typography>
            </div>

            <div className={classes.textConatiner}>
              {/* <Typography color="textSecondary">6 minutes ago</Typography> */}
              <Typography className={classes.mainText}><Badge badgeContent={"" + recieved} color="primary" style={{ marginRight: 10 }} /> Order(s) Recieved</Typography>
            </div>

            <div className={classes.textConatiner}>
              {/* <Typography color="textSecondary">20 minutes ago</Typography> */}
              <Typography className={classes.mainText}><Badge badgeContent={"" + delivered} color="primary" style={{ marginRight: 10 }} /> Order(s) Delivered</Typography>
            </div>

            <div>
              {/* <Typography color="textSecondary">5 minutes ago</Typography> */}
              <Typography className={classes.mainText}><Badge badgeContent={"" + completed} color="primary" style={{ marginRight: 10 }} /> Order(s) Completed</Typography>
            </div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}