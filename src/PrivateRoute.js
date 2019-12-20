import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from './Auth';

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
    const { user } = useContext(AuthContext);

    return (
        <Route
            {...rest}
            render={routerProps =>
                !!user ? (
                    <RouteComponent {...routerProps} />
                ) : (
                        <Redirect to={"/open-table/login"} />
                    )
            }
        />

    );
}

export default PrivateRoute;

