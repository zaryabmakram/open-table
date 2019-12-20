import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  progress: {
    position: 'absolute',
    left: '50%',
    top: '50%',
  },
}));

export default function CircularDeterminate() {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    function tick() {
      // reset when reaching 100%
      setProgress(oldProgress => (oldProgress >= 100 ? 0 : oldProgress + 1));
    }

    return () => {
      tick();
    };
  }, []);

  return (
    <CircularProgress
    className={classes.progress}
    variant="determinate"
    value={progress}
    color="primary"
    />
  );
}