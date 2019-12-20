import React, { useCallback, useContext, useState } from 'react';
import { withRouter, Redirect } from 'react-router';
import app from './firebase';
import { AuthContext } from './Auth';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Logo from './res/logo.svg';

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        width: 60,
        height: 60,
        backgroundColor: "inherit",
        content: `url(${Logo})`
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


const Login = ({ history }) => {
    const classes = useStyles();
    const [emailError, setEmailError] = useState(false);
    const [passError, setPassError] = useState(false);

    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            app.auth().signInWithEmailAndPassword(email.value, password.value).catch(function (error) {

                if (error.code === "auth/wrong-password") {
                    setPassError(true);
                } else {
                    setEmailError(true);
                }
                
                console.log(error.code)
                // alert(error);
            } )
        });

const { user } = useContext(AuthContext);
if (user) {
    return <Redirect to="/" />
}

return (
    <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
            <Avatar className={classes.avatar} />
            <Typography component="h1" variant="h4">
                Sign in
            </Typography>
            <form className={classes.form} noValidate method="POST" onSubmit={handleLogin}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoFocus
                    autoComplete="email"
                    error={emailError}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    error={passError}
                />

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Sign In
              </Button>
            </form>
        </div>
    </Container>
);
}

export default withRouter(Login);