import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#1a6efc"
        },
        secondary: {
            main: "#ffc33d"
        }
    },

    overrides: {
        MuiButton: {
            contained: {
                backgroundColor: "#fff"
            }
        }
    }
});

export default theme;