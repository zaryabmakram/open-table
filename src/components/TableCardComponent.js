import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { ButtonBase } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { ReactComponent as Logo } from './../res/table.svg';

const VACANT_COLOR = '#BAE587';
const OCCUPIED_COLOR = '#E54169';

const useStyles = makeStyles({
  card: {
    minWidth: '250px',
    maxWidth: '250px',
    borderRadius: '10px',
    borderLeft: '10px solid',
  },

  logo: {
      height: '150px',
      width: '150px',
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
  }, 

  alignLeft: {
	textAlign: 'left',
  },
});

function TableCardComponent(props) {

  const classes = useStyles();
  
  const handleClick = (event) => {
      console.log('clicked!');
  }
  return (
    <ButtonBase style={{borderRadius: '10px'}}>
      <Card className={classes.card} style={{borderColor: props.isVacant? VACANT_COLOR: OCCUPIED_COLOR}} onClick={handleClick}>

      <CardContent>
        <Typography variant="h4" component="h2" color="textSecondary" className={classes.alignLeft}>
          {props.tableNumber}
        </Typography>
        <Logo className={classes.logo} fill={props.isVacant? VACANT_COLOR: OCCUPIED_COLOR}/>
        {/* <Chip
            label="Vacant"
            color="secondary"
            variant="outlined"
        /> */}
        <Typography variant="h5" component="h3" color="textSecondary" className={classes.alignLeft}>
            {props.isVacant? 'Vacant': 'Occupied'}
        </Typography>
      </CardContent>
    </Card>
    </ButtonBase>
  );
}

export default TableCardComponent;