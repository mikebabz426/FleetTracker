import React, { useContext } from "react";
import { AppBar, Toolbar, Typography, Fab, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { FilterContext } from "./../FilterContext";
import Filter from "./Filters/Filter";

const Header = (props) => {
	const [filters, setFilters] = useContext(FilterContext);
	const classes = useStyles();
	const teamOptions = ["All", "Team One", "Team Two", "Team Three"];
	const dayOptions = ["All", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

	const handleChange = (e, type) => {
		type === "day"
			? setFilters({ ...filters, day: e.target.value })
			: setFilters({ ...filters, team: e.target.value });
	};

	return (
		<AppBar color="primary" position="static">
			<Toolbar className={classes.toolbar}>
				<Typography className={classes.typographyStyles} variant="h6">
					My Fleet Tracker
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
	typographyStyles: {
		color: "#fff",
	},
	toolbar: {
		justifyContent: "space-between",
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
