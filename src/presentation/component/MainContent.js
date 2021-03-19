import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import About from "./About";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function MainContent() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <About/>
        </div>
    );
}
