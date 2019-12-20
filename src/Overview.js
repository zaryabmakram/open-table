import React, { useState, useEffect, useContext } from 'react';

import ManagerComponent from './components/ManagerComponent';
import TableOccupancyComponent from './components/OccupancyComponent';
import RevenueComponent from './components/RevenueComponent';
import StatusTableComponent from './components/StatusTableComponent';
import TimelineComponent from './components/TimelineComponent';
import LoadingCircle from './components/LoadingComponent';
import FeedComponent from './components/FeedComponent';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { AuthContext } from './Auth';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        // backgroundColor: "#F5F5F5"
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function Overview() {
    const classes = useStyles();

    const [load, setLoad] = useState(false)
    const { user } = useContext(AuthContext);

    return (
        load ? <LoadingCircle />
            : (
                <div className={classes.root}>
                    <Grid container spacing={1} style={{ margin: 5 }}>
                        <Grid item md xs >
                            {/* first column */}
                            <Grid container direction="column" spacing={1}>
                                <Grid item xs>
                                    {/* top row */}
                                    <Grid container spacing={1}>
                                        <Grid item xs>
                                            <FeedComponent />
                                        </Grid>
                                        <Grid item xs>
                                            <TimelineComponent />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs>
                                    <StatusTableComponent />
                                </Grid>
                            </Grid>
                        </Grid>

                        {/* 3rd column */}
                        <Grid item md xs>
                            <Grid container direction="column" spacing={1}>
                                <Grid item xs>
                                    <RevenueComponent />
                                </Grid>
                                <Grid item xs>
                                    <TableOccupancyComponent />
                                </Grid>
                                <Grid item xs>
                                    <ManagerComponent name={user.email.split("@")[0]}/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            )
    );
}