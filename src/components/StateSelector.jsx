import React, {useContext} from "react";
import { InputLabel, FormControl, Select } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import stateAbbreviations from "../services/usStates";
import { TruckContext } from './../FleetContext';


const StateSelector = (props) => {
	const classes = useStyles();
	const [, setTrucks]  = useContext(TruckContext);

	const handleUsStateChange = (e) => {
		const updatedUsState = e.target.value;
		const key = props.id
		setTrucks(trucks => {
			let updatedTrucks = trucks.map(truck => truck.id === key ? {...truck, usState:updatedUsState} : truck)
			return [...updatedTrucks]
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
				value={props.st}
				onChange={(e) => handleUsStateChange(e)}
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

//Custom Component Styling

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

export default StateSelector;
