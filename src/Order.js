import React, { useState, useEffect } from 'react';
import app from './firebase';

import MaterialTable from 'material-table';
import OrderItems from './SubOrder.js';

import StatusSelect from './components/StatusSelectComponent';
import LoadingCircle from './components/LoadingComponent';

export default function OrderTable(props) {

    const [load, setLoad] = useState(true)
    const [orderList, setOrderList] = useState([]);

    const tableHeader = [
        { title: 'Table #', field: 'tableNum' },
        { title: 'Customer', field: 'customer' },
        { title: 'People', field: 'personCount', searchable: false },
        { title: 'Total', field: 'total', searchable: false,  render: rowData => "Rs " + rowData.total},
        { title: 'Payment', field: 'payment', searchable: false },
        {
            title: 'Status',
            field: 'status',
            render: rowData => <StatusSelect status={rowData.status} orderKey={rowData.key} /> 
        }
    ]


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
                    payment: order.paymentInfo.number,
                    status: order.status,
                    cart: order.cart,
                    total: order.total
                })
            }
            setOrderList(tableData);
            setLoad(false);
        });
    }, [])

    return (
        load ? <LoadingCircle />
            : (<MaterialTable title="Orders"
                columns={tableHeader}
                data={orderList}
                options={{headerStyle:{backgroundColor: '#FAFAFA'}}}
                detailPanel={
                    rowData => {
                        return (
                            <OrderItems cart={rowData.cart} total={rowData.total}/>
                        )
                    }
                }
            />)
    );
}
