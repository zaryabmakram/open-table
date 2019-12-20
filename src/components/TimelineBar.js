import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    height: 310,
  },
});

export default function VerticalSlider(props) {
  const classes = useStyles();

  return (
    <React.Fragment style={{width: 500}}>
      <div className={classes.root}>
        <Slider
          orientation="vertical"
          defaultValue={props.setMarker}
          aria-labelledby="vertical-slider"
          disabled={true}
          style={{color: '#b71c1c'}}
        />
      </div>
    </React.Fragment>
  );
}