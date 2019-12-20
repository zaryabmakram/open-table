import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import img404 from './res/404.png';

const useStyles = makeStyles({
    conterImg: {
        textAlign: "center",
        display: "block",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
    }
});
function Page404(props) {
    const classes = useStyles();
    return (
        <Container>
            <img src={img404} className={classes.conterImg} alt="page not found image"/>
        </Container>
    );
}

export default Page404;