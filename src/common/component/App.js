import logo from '../../abheepsa-logo.png';
import './App.css';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core';
import SocialMediaInfo from "../../presentation/component/social-media-info";
import ButtonAppBar from "./app-bar";

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
            <ButtonAppBar></ButtonAppBar>
            <SocialMediaInfo></SocialMediaInfo>
        </div>
    </MuiThemeProvider>
);

export default App;
