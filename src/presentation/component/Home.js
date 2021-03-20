import React from 'react';
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
import {MainContent} from "./MainContent";

export const Home = (prop) => {
    const openInNewTab = (url) => {
        const newWindow = window.open(url)
        if (newWindow) newWindow.opener = null
    }

    return (
        <div className={prop.classes.root}>
            <CssBaseline/>
            <AppTopBar/>
            <Drawer
                className={prop.classes.drawer}
                variant="permanent"
                classes={{
                    paper: prop.classes.drawerPaper,
                }}
                anchor="left"
            >
                <div className={prop.classes.toolbar}/>
                <Divider/>
                <List>
                    {navTabs.map((tab, index) => (
                        <ListItem button key={tab} onClick={() => prop.tabSelection(tab)}>
                            <ListItemIcon>{iconMap[tab]}</ListItemIcon>
                            <ListItemText primary={tab}/>
                        </ListItem>
                    ))}
                </List>
                <Divider/>

                <List>
                    {redirectTabs.map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{iconMap[text]}</ListItemIcon>
                            <Typography className={prop.classes.root}>
                                <Link onClick={() => openInNewTab(linkMap[text])}
                                      variant="body2">
                                    <ListItemText secondary={text}/>
                                </Link>
                            </Typography>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <main className={prop.classes.content}>
                <div className={prop.classes.toolbar}/>
                <MainContent tab={prop.tab.selectedTab}/>
            </main>
        </div>
    );

}
