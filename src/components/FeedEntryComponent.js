import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Clock from 'react-live-clock';
const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        marginLeft: 20,
        textAlign: 'center'
    },
    avatar: {
        color: '#1976d2',
        width: 30,
        height: 25,
    },
    bigAvatar: {
        width: 40,
        height: 30,
    },
    time: {
        marginLeft: 15,
        marginTop: 5,
        fontWeight: 300,
        fontSize: 12,
    },


}));
export default function Hook(props) {
    const classes = useStyles();
    return (
        <Grid container>
            <div className={classes.root}>
                <Box maxWidth="250" minWidth="200" display="flex" style={{ padding: 5 }}>
                    <div>
                        <Avatar className={classes.avatar}>
                            <NotificationsActiveIcon />
                        </Avatar>
                    </div>
                    <div style={{ fontSize: 18, width: 270 }} ><b>{props.item}</b></div>
                    <div className={classes.time}>
                        <Clock format={'HH:mm'} timezone={'Pakistan Standard Time'} />
                    </div>
                </Box>
                Ordered by Table # {props.description}
                <Divider light='true' style={{ margin:10}}></Divider>
            </div>
        </Grid>
    );
}
