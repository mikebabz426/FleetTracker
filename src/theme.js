import { createMuiTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#0257A2",
		},
		secondary: {
			main: green[400],
		},
	},
});

export default theme;
