import React, { useState } from "react";
import { ThemeProvider, Grid, Box } from "@material-ui/core";
import theme from "./../theme";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./Header";
import FleetTable from "./Table/FleetTable";
import AddTruckForm from "./TruckForm/AddTruckForm";
import { gql, useQuery } from "@apollo/client";

const useStyles = makeStyles({
	customHeader: {
		marginBottom: "5rem",
	},
});

const FLEET_ALL = gql`
	query FLEET_ALL {
		fleet_table {
			appt
			cell
			day
			driver
			id
			location
			needs
			notes
			status
			team
			time
			trailer
			truck
			type
			usState
		}
	}
`;

const Layout = () => {
	const { loading, error, data, refetch } = useQuery(FLEET_ALL);
	const [addTruck, setAddTruck] = useState(false);
	const classes = useStyles();

	return (
		<ThemeProvider theme={theme}>
			<Grid container direction="column">
				<Grid item className={classes.customHeader}>
					<Box style={{ marginBottom: "1rem" }}>
						<Header
							addTruck={(e) => setAddTruck(!addTruck)}
							addTruckState={addTruck}
						/>
					</Box>
				</Grid>
				<Grid item container>
					<Grid item xs={false} sm={false} />
					<Grid item xs={12} sm={12}>
						{addTruck ? (
							<AddTruckForm
								refetch={refetch}
								addTruck={addTruck}
								toggle={(e) => setAddTruck(!addTruck)}
							/>
						) : (
							<FleetTable
								loading={loading}
								data={data}
								error={error}
								refetch={refetch}
							/>
						)}
					</Grid>
					<Grid item xs={false} sm={false} />
				</Grid>
			</Grid>
		</ThemeProvider>
	);
};

export default Layout;
