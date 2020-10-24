import React, { useContext } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Filter from "./Filters/Filter";
import { FilterContext } from "./../FilterContext";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles(() => ({
	typographyStyles: {
		color: "#fff",
	},
	toolbar: {
		justifyContent: "space-between",
	},
	fab: {
		backgroundColor: "#fff",
		color: "#66bb6a",
		fontWeight: "bold",
		"&:hover": {
			color: "#fff",
			backgroundColor: "#66bb6a",
		},
	},
}));

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
				<Filter
					label="Team"
					options={teamOptions}
					handler={(e) => handleChange(e, "team")}
				/>
				<Filter
					label="Day"
					options={dayOptions}
					handler={(e) => handleChange(e, "day")}
				/>
				<Fab
					onClick={props.toggler}
					className={classes.fab}
					size="small"
					color="primary"
					aria-label="add"
				>
					<AddIcon />
				</Fab>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
