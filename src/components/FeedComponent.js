import React, { useState, useEffect } from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FeedEntryComponent from './FeedEntryComponent'

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

export default function FeedComponent() {
    const classes = useStyles();
    const [feedList, setFeedList] = useState([])

    useEffect(() => {
        const tablesRef = app.database().ref().child('orders')
        tablesRef.on('value', snap => {
            const orderData = snap.val()
            let feedData = []

            for (let key in orderData) {
                const order = orderData[key]
                if (order.status === "Pending") {
                    feedData.unshift({
                        key: key,
                        tableNum: order.table,
                        item: order.cart[0].name
                    })
                }
            }
            setFeedList(feedData.slice(0, 5));
        });
    }, [])

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title} color="textPrimary" gutterBottom>Activity Feed</Typography>
                <Grid style={{maxWidth:1000}}>
                    {
                        feedList.map(feed => <FeedEntryComponent item={feed.item} description={feed.tableNum} />)
                    }
                </Grid>
            </CardContent>
        </Card>
    );
}