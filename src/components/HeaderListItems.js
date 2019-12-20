import React from 'react';
import { withRouter } from 'react-router-dom';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LayersIcon from '@material-ui/icons/Layers';

function HeaderListItems(props){      
    return(
        <div>
            <ListItem button selected={props.selectItem==="Overview" ? true : false} onClick={()=>props.history.push("/open-table/")}>
                <ListItemIcon>
                <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Overview" />
            </ListItem>

            <ListItem button selected={props.selectItem==="Tables" ? true : false} onClick={()=>props.history.push("/open-table/tables")}>
                <ListItemIcon>
                <LayersIcon />
                </ListItemIcon>
                <ListItemText primary="Tables" />
            </ListItem>

            <ListItem button selected={props.selectItem==="Orders" ? true : false} onClick={()=>props.history.push("/open-table/orders")}>
                <ListItemIcon>
                <ShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary="Orders" />
            </ListItem>
    </div>
    );
}

export default withRouter(HeaderListItems);