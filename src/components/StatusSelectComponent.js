import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import app from './../firebase';

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function StatusSelectComponent(props) {
    const classes = useStyles();
    const [status, setStatus] = React.useState(props.status);

    const handleChange = event => {
        const newStatus = event.target.value;
        const orderRef = app.database().ref().child(`orders/${props.orderKey}`)
        orderRef.update({
            status: newStatus
        })
        setStatus(newStatus);
    };

    return (
        <FormControl className={classes.formControl}>
            <Select value={status} onChange={handleChange}>
                <MenuItem value={"Pending"}>Pending</MenuItem>
                <MenuItem value={"Recieved"}>Recieved</MenuItem>
                <MenuItem value={"Delivered"}>Delivered</MenuItem>
                <MenuItem value={"Completed"}>Completed</MenuItem>
            </Select>
        </FormControl>
    )
}