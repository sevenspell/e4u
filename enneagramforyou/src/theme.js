import { createMuiTheme } from '@material-ui/core/styles';
import { purple, lightGreen, lime} from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: purple[500],
            light: purple[200],
            dark: purple[600]
        },
        secondary: {
            main: lightGreen[600],
            light: lime[400],
            dark: lightGreen[800]
        },
    }
});

export default theme;