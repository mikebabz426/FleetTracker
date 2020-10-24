import React from "react";
import { FormControl, Select } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import { weekDays, states, truckStatus } from "./../../services/services";

const Selector = (props) => {
	const classes = useStyles();
	debugger;
	console.log(props);
	const { name } = props;

	const arr =
		name === "day" ? weekDays : name === "status" ? truckStatus : states;
	console.log(arr);
	return (
		<FormControl variant="outlined" className={classes.formControl}>
			<Select
				className={classes.selected}
				native
				name={name}
				label={name}
				input={<CustomInput />}
				value={props.value}
			>
				{arr.map((opt) => (
					<option
						aria-label={opt}
						key={opt}
						className={classes.selected}
						value={opt}
					>
						{opt}
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
		fontSize: 16,
		padding: "10px 26px 10px 12px",
		transition: theme.transitions.create(["border-color", "box-shadow"]),

		"&:focus": {
			borderRadius: 4,
			borderColor: theme.palette.secondary,
			boxShadow: `0 0 0 0.2rem rgba(102,187,106,.75)`,
		},
	},
}))(InputBase);

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 80,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
	selected: {
		fontWeight: "bold",
	},
}));

export default Selector;
