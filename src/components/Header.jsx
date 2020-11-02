import React, { useContext, useState } from "react";
import { AppBar, Toolbar, Typography, Fab, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { FilterContext } from "./../FilterContext";
import Filter from "./Filters/Filter";

const Header = (props) => {
	const [filters, setFilters] = useContext(FilterContext);
	const [fuelPrice, setFuelPrice] = useState(0);
	const classes = useStyles();
	const teamOptions = ["All", "Team One", "Team Two", "Team Three"];
	const dayOptions = ["All", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

	const handleChange = (e, type) => {
		type === "day"
			? setFilters({ ...filters, day: e.target.value })
			: setFilters({ ...filters, team: e.target.value });
	};

	const getFuelPrice = async () => {
		await fetch(
			`http://api.eia.gov/series/?api_key=5c7387cb68efe9616f46194d17493e35&series_id=PET.EMD_EPD2D_PTE_NUS_DPG.W`
		)
			.then((res) => res.json())
			.then((data) => setFuelPrice(data.series[0].data[0][1]));
	};

	getFuelPrice();

	return (
		<AppBar color="primary" position="fixed" className={classes.appBar}>
			<Toolbar className={classes.toolbar}>
				<Typography className={classes.typographyStyles} variant="h6">
					My Fleet Tracker
				</Typography>
				<Typography className={classes.typographyStyles} variant="body2">
					US Diesel Avg: ${fuelPrice}
				</Typography>

				<Box className={classes.box}>
					<Typography>Team Filter: </Typography>
					<Filter
						label="Team"
						options={teamOptions}
						handler={(e) => handleChange(e, "team")}
					/>
					<Typography>Day Filter: </Typography>
					<Filter
						label="Day"
						options={dayOptions}
						handler={(e) => handleChange(e, "day")}
					/>
					<Typography>Add Truck: </Typography>
					<Fab
						onClick={props.addTruck}
						className={classes.fab}
						size="small"
						color="primary"
						aria-label="add"
					>
						{props.addTruckState ? <ArrowBackIcon /> : <AddIcon />}
					</Fab>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

//Custom Styles

const useStyles = makeStyles(() => ({
	appBar: {
		margin: "0",
	},
	typographyStyles: {
		color: "#fff",
	},
	toolbar: {
		justifyContent: "space-between",
		margin: "0 0",
	},
	box: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	fab: {
		backgroundColor: "#fff",
		color: "#66bb6a",
		marginLeft: "1rem",
		"&:hover": {
			color: "#fff",
			backgroundColor: "#66bb6a",
		},
	},
}));

export default Header;
