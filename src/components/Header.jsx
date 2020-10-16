import React, { useContext } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Filter from "./Selectors/Filter";
import { FilterContext } from "./../FilterContext";

const useStyles = makeStyles(() => ({
	typographyStyles: {
		color: "#fff",
	},
	toolbar: {
		justifyContent: "space-between",
	},
}));

const Header = () => {
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
			</Toolbar>
		</AppBar>
	);
};

export default Header;
