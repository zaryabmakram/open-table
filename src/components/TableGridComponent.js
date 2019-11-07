import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TableCard from './TableCardComponent';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
}));

export default function SpacingGrid() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(value => (
            <Grid key={value} item>
                {
                    (value%2)===0? 
                    <TableCard isVacant={true} tableNumber={value + 1} />
                    : <TableCard isVacant={false} tableNumber={value + 1} />
                }
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
