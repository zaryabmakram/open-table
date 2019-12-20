import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
    table: {
        width: '100%',
        backgroundColor: '#F5F5F5'
    },
});

export default function OrderItems(props) {
    const classes = useStyles();
    const [orderList, setOrderList] = useState(props.cart)

    return (
        <>
            <Table className={classes.table} aria-label="order table">
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Qty</TableCell>
                        <TableCell align="right">Total</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orderList.map(row => (
                        <TableRow key={row.name}>
                            <TableCell><img style={{ verticalAlign: 'middle', height: 50, width: 50 }} src={row.image} alt="order item image"/></TableCell>
                            <TableCell component="th" scope="row">{row.name}</TableCell>
                            <TableCell align="right">Rs. {row.price}</TableCell>
                            <TableCell align="right">{row.count}</TableCell>
                            <TableCell align="right">Rs. {row.price * row.count}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', margin: 'auto 20px'}}>
                <p style={{fontSize: 18, fontWeight: 'bold'}}>Total: </p>
                <p style={{fontSize: 18}}>Rs. {props.total}</p>
            </div>
        </>
    );
}