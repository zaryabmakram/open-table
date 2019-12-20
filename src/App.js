import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './Auth';
import './App.css';

import Header from './components/HeaderComponent';
import Overview from './Overview';
import TablePage from './Tables';
import Login from './Login';
import Page404 from './Page404';
import OrderPage from './Order';
import PrivateRoute from "./PrivateRoute";


class App extends React.Component {
  render() {
    return (
      <AuthProvider>
        <Router>
          <Switch>
            <PrivateRoute exact path="/" component={() => <Header childComponent={<Overview />} selected="Overview" />} />
            <PrivateRoute exact path="/tables" component={() => <Header childComponent={<TablePage />} selected="Tables" />} />
            <PrivateRoute exact path="/orders" component={() => <Header childComponent={<OrderPage />} selected="Orders" />} />
            <Route exact path="/login" component={Login} />
            <Route component={() => <Header childComponent={<Page404 />} selected="None" />} />
          </Switch>
        </Router>
      </AuthProvider>
    );
  }
}

export default App;
