import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import TimelineBar from './TimelineBar';

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
      marginBottom: 40,
  }, 
  timelineBar: {
    marginTop: 8,
  }
});

export default function SimpleCard() {
  const classes = useStyles();

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
                    <Typography color="textSecondary">6 minutes ago</Typography>
                    <Typography className={classes.mainText}>New Order Recieved</Typography>
                </div>

                <div className={classes.textConatiner}>
                    <Typography color="textSecondary">10 minutes ago</Typography>
                    <Typography className={classes.mainText}>1 Order(s) Pending</Typography>
                </div>
                
                <div className={classes.textConatiner}>
                    <Typography color="textSecondary">20 minutes ago</Typography>
                    <Typography className={classes.mainText}>5 Order(s) Delivered</Typography>
                </div>

                <div>
                    <Typography color="textSecondary">5 minutes ago</Typography>
                    <Typography className={classes.mainText}>10 Order(s) Completed</Typography>
                </div>
            </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}