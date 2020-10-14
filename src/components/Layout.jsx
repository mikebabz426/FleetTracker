import React from "react";
import { ThemeProvider, Grid } from "@material-ui/core";
import theme from "./../theme";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./Header";
import FleetTable from "./Table/FleetTable";

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
					<Grid item xs={false} sm={false} />
					<Grid item xs={12} sm={12}>
						<FleetTable />
					</Grid>
					<Grid item xs={false} sm={false} />
				</Grid>
			</Grid>
		</ThemeProvider>
	);
};

export default Layout;
