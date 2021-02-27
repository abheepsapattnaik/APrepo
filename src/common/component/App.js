import './App.css';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core';
import SocialMediaInfo from '../../presentation/component/SocialMediaInfo';
import AppTopBar from './AppTopBar';

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
            <AppTopBar></AppTopBar>
            <SocialMediaInfo></SocialMediaInfo>
        </div>
    </MuiThemeProvider>
);

export default App;
