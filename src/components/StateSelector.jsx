import React from "react";
import { InputLabel, FormControl, Select } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import stateAbbreviations from "../services/usStates";

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
	selected: {
		fontWeight: "bold",
	},
}));

const StateSelector = (props) => {
	const classes = useStyles();
	const [state, setState] = React.useState({
		usState: props.st,
	});

	const handleChange = (event) => {
		const usState = event.target.name;
		setState({
			...state,
			[usState]: event.target.value,
		});
	};

	return (
		<FormControl variant="outlined" className={classes.formControl}>
			<InputLabel htmlFor="outlined-age-native-simple">State</InputLabel>
			<Select
				autoWidth
				size="small"
				className={classes.selected}
				native
				value={state.usState}
				onChange={handleChange}
				label="State"
				inputProps={{
					name: "usState",
				}}
			>
				<option aria-label="None" value="" />
				{stateAbbreviations.map((st) => (
					<option aria-label={st} className={classes.selected} key={st}>
						{st}
					</option>
				))}
			</Select>
		</FormControl>
	);
};

export default StateSelector;
