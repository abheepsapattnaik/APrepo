import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import About from "./About";
import {navTabs} from "../../utils/TabTypes";
import Experience from "./Experience";

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

export const MainContent = ({tab}) => {
    const classes = useStyles();

    switch (tab) {
        case navTabs[0]:
            return <div className={classes.root}>
                <About/>
            </div>;

        case navTabs[2]:
            return <div className={classes.root}>
                <Experience/>
            </div>;
        default:
            return <div> {tab} Under progress !!!</div>;
    }

}
