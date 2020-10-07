import React from "react";
import { ThemeProvider, Grid } from "@material-ui/core";
import theme from "./../theme";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./Header";

const useStyles = makeStyles({
	customHeader: {
		marginBottom: "5rem",
	},
});

const Layout = () => {
	const classes = useStyles();
	return (
		<ThemeProvider theme={theme}>
			<Grid container direction="column">
				<Grid item className={classes.customHeader}>
					<Header />
				</Grid>
				<Grid item container>
					<Grid item xs={false} sm={1} />
					<Grid item xs={12} sm={10}>
						{/* <Content /> */}
					</Grid>
					<Grid item xs={false} sm={1} />
				</Grid>
			</Grid>
		</ThemeProvider>
	);
};

export default Layout;
