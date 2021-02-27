import logo from '../../abheepsa-logo.png';
import './App.css';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core';

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
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
            </header>
            <div className="info App-link">
                Hello..Abheepsa here !!!
            </div>
        </div>
    </MuiThemeProvider>
);

export default App;
