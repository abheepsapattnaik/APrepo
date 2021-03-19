import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import About from "./About";
import {navTabs} from "../../utils/TabTypes";

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

export const MainContent= ({tab}) => {
    const classes = useStyles();
    return tab === navTabs[0] ? (
        <div className={classes.root}>
            <About/>
        </div>
    ) : <div> {tab} Under progress !!!</div>;
}
