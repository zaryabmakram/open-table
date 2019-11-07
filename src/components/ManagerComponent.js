import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    // maxWidth: 300,
  },
  title: {
    fontSize: 25,
  },
  lowText: {
    textAlign: "center",
    textTransform: 'uppercase',
    fontSize: 22,
  },
  avatar: {
    margin: 20,
    width: 120,
    height: 120,
    border: '5px solid #1565c0',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    content: "url('https://www.w3schools.com/howto/img_avatar.png')"
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
            Duty Manager
        </Typography>

        <Avatar alt="Remy Sharp" className={classes.avatar} />

        <Typography className={classes.lowText}>
            Zaryab Akram
        </Typography>
      </CardContent>
    </Card>
  );
}