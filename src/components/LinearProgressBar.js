import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    margin: 10,
  },

  barHeight: {
    height: 5,
  }
});

export default function LinearDeterminate() {
    const classes = useStyles();
    const completed = 50;

    return (
    <div className={classes.root}>
        <LinearProgress variant="determinate" value={completed} className={classes.barHeight} />
    </div>
    );
}