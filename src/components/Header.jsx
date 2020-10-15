import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TeamFilter from './Selectors/TeamFilter';
import DayFilter from './Selectors/DayFilter';

const useStyles = makeStyles(() => ({
	typographyStyles: {
		color: "#fff",
	},
	toolbar: {
		justifyContent: 'space-between',
	}
}));

const Header = () => {
	const classes = useStyles();
	return (
		<AppBar color="primary" position="static">
			<Toolbar className={classes.toolbar}>
				<Typography className={classes.typographyStyles} variant="h6">
					My Fleet Tracker
				</Typography>
				<TeamFilter/>
				<DayFilter/>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
