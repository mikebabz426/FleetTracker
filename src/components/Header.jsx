import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
	typographyStyles: {
		color: "#fff",
	},
}));

const Header = () => {
	const classes = useStyles();
	return (
		<AppBar color="primary" position="static">
			<Toolbar>
				<Typography className={classes.typographyStyles} variant="h6">
					Fleet Tracker
				</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
