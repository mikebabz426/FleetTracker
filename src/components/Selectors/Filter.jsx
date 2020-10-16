import React from "react";
import { FormControl, Select } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";

const Filter = ({ label, options, handler }) => {
	const classes = useStyles();

	return (
		<FormControl variant="outlined" className={classes.formControl}>
			<Select
				className={classes.selected}
				native
				label={label}
				input={<CustomInput />}
				onChange={handler}
			>
				{options.map((option) => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</Select>
		</FormControl>
	);
};

//Custom Component Styling

const CustomInput = withStyles((theme) => ({
	input: {
		borderRadius: 4,
		position: "relative",
		backgroundColor: theme.palette.background.paper,
		border: "1px solid #ced4da",
		fontSize: 14,
		padding: "10px 26px 10px 12px",
		transition: theme.transitions.create(["border-color", "box-shadow"]),

		"&:focus": {
			borderRadius: 4,
			borderColor: theme.palette.secondary,
			backgroundColor: theme.palette.background.paper,
			boxShadow: `0 0 0 0.2rem rgba(102,187,106,.75)`,
		},
	},
}))(InputBase);

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(2),
		minWidth: 80,
	},
	selected: {
		fontWeight: "bold",
	},
}));

export default Filter;

// <Select
// 	className={classes.selected}
// 	native
// 	label="TEAM"
// 	input={<CustomInput />}
// 	onChange={(e) => handleChange(e)}
// >
// 	<option
// 		aria-label="all"
// 		className={classes.selected}
// 		key="all"
// 		value="all"
// 	>
// 		All
// 	</option>
// 	<option
// 		aria-label="team one"
// 		className={classes.selected}
// 		key="team one"
// 		value="team one"
// 	>
// 		Team One
// 	</option>
// 	<option
// 		aria-label="team two"
// 		className={classes.selected}
// 		key="team two"
// 		value="team two"
// 	>
// 		Team Two
// 	</option>
// 	<option
// 		aria-label="team three"
// 		className={classes.selected}
// 		key="team three"
// 		value="team three"
// 	>
// 		Team Three
// 	</option>
// 	<option
// 		aria-label="team four"
// 		className={classes.selected}
// 		key="team four"
// 		value="team four"
// 	>
// 		Team Four
// 	</option>
// </Select>
