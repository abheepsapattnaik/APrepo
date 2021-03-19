import './App.css';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core';
import Home from "../../presentation/component/Home";
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
                <Route exact path="/" component={Home}/>
            </Switch>
        </HashRouter>
    </MuiThemeProvider>
);

export default App;
