import './App.css';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core';
import SideNavBar from "../../presentation/component/SideNavBar";

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
            <SideNavBar></SideNavBar>
        </div>
    </MuiThemeProvider>
);

export default App;
