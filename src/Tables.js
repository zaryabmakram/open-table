import React, {useState, useEffect} from 'react';
import app from './firebase';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TableCard from './components/TableCardComponent';
import LoadingCircle from './components/LoadingComponent';
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
}));

export default function Tables(props) {
    const classes = useStyles();
    const [load, setLoad] = useState(true)
    const [tables, setTables] = useState([])

    // const fetchData = async () => {
    //     const db = app.firestore();
    //     const data = []
    //     await db.collection("tables")
    //         .get()
    //         .then(function (querySnapshot) {
    //             querySnapshot.forEach(function (doc) {
    //                 data.push(doc.data())
    //             })
    //         })
    //     setTables(data)
    //     setLoad(false);
    // }

    useEffect(() => {
        // fetchData()
        const tablesRef = app.database().ref().child('tables')
        tablesRef.on('value', snap => {
            setTables(snap.val())
            setLoad(false);
        });
    }, [])

    return (
        load ? <LoadingCircle />
        : (<Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={2}>
                    {
                        tables.map((tbl) => (
                            <Grid key={tbl.number} item>
                                <TableCard isVacant={!tbl.status} tableNumber={tbl.number} />
                            </Grid>
                        ))
                    }
                </Grid>
            </Grid>
        </Grid>)
    );
}
