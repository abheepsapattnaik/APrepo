import './App.css';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core';
import SideNavBar from "../../presentation/component/SideNavBar";
import {HashRouter, Route, Switch} from 'react-router-dom';

const theme = createMuiTheme({
        palette: {
            secondary: {
                main: '#C62828'
            }
        },
    })
;

const App = () => (
    <MuiThemeProvider theme={theme}>
        <HashRouter>
            <Switch>
                <Route exact path="/" component={SideNavBar}/>
            </Switch>
        </HashRouter>
    </MuiThemeProvider>
);

export default App;
