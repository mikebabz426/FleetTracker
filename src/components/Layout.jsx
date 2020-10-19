import React, { useState } from "react";
import { ThemeProvider, Grid } from "@material-ui/core";
import theme from "./../theme";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./Header";
import FleetTable from "./Table/FleetTable";
import AddTruckForm from "./TruckForm/AddTruckForm";

const useStyles = makeStyles({
	customHeader: {
		marginBottom: "5rem",
	},
});

const Layout = () => {
	const classes = useStyles();
	const [toggle, setToggle] = useState(false);

	return (
		<ThemeProvider theme={theme}>
			<Grid container direction="column">
				<Grid item className={classes.customHeader}>
					<Header toggler={(e) => setToggle(!toggle)} />
				</Grid>
				<Grid item container>
					<Grid item xs={false} sm={false} />
					<Grid item xs={12} sm={12}>
						{toggle ? (
							<AddTruckForm open={toggle} toggler={(e) => setToggle(!toggle)} />
						) : (
							<FleetTable />
						)}
					</Grid>
					<Grid item xs={false} sm={false} />
				</Grid>
			</Grid>
		</ThemeProvider>
	);
};

export default Layout;
