import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import app from './../firebase'
const columns = [
  { id: 'table', label: 'Table', minWidth: 170 },
  { id: 'customer', label: 'Customer', minWidth: 170 },
  { id: 'people', label: 'People', minWidth: 170 },
  { id: 'total', label: 'Total (Rs)', minWidth: 170 },
  { id: 'status', label: 'Status', minWidth: 170 }
];

const useStyles = makeStyles({
  root: {
    width: '100%',
    minHeight: 275
  },
  tableWrapper: {
    overflow: 'auto',
  },
});

export default function StatusTableComponent() {

  const classes = useStyles();
  const [orderList, setOrderList] = useState([])

  useEffect(() => {
    const tablesRef = app.database().ref().child('orders')
    tablesRef.on('value', snap => {
      const orderData = snap.val()
      let tableData = []

      for (let key in orderData) {
        const order = orderData[key]
        tableData.unshift({
          key: key,
          tableNum: order.table,
          customer: order.paymentInfo.name,
          personCount: order.personCount,
          status: order.status,
          total: order.total
        })
      }
      setOrderList(tableData.slice(0, 5));
    });
  }, [])


  return (
    <Paper className={classes.root}>
      <div className={classes.tableWrapper}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {
              orderList.map((row, idx) => {
                return (
                  <TableRow hover key={idx}>
                    <TableCell>{row.tableNum}</TableCell>
                    <TableCell>{row.customer}</TableCell>
                    <TableCell>{row.personCount}</TableCell>
                    <TableCell>{row.total}</TableCell>
                    <TableCell>{row.status}</TableCell>
                  </TableRow>
                )
              })
            }
          </TableBody>
        </Table>
      </div>
    </Paper>
  );
}