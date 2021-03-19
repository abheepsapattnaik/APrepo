import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AppTopBar from './AppTopBar';
import {Link} from '@material-ui/core';
import {iconMap, linkMap, navTabs, redirectTabs} from '../../utils/TabTypes';
import About from "./About";
import MainContent from "./MainContent";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}));

export default function SideNavBar() {
    const classes = useStyles();
    const openInNewTab = (url) => {
        const newWindow = window.open(url)
        if (newWindow) newWindow.opener = null
    }
    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppTopBar></AppTopBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <div className={classes.toolbar}/>
                <Divider/>
                <List>
                    {navTabs.map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{iconMap[text]}</ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItem>
                    ))}
                </List>
                <Divider/>

                <List>
                    {redirectTabs.map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{iconMap[text]}</ListItemIcon>
                            <Typography className={classes.root}>
                                <Link onClick={() => openInNewTab(linkMap[text])}
                                      variant="body2">
                                    <ListItemText secondary={text}/>
                                </Link>
                            </Typography>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                <MainContent/>
            </main>
        </div>
    );

}
