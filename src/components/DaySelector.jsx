import React, {useContext} from "react";
import { InputLabel, FormControl, Select } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {weekDays} from "../services/usStates";
import { TruckContext } from './../FleetContext';


const DaySelector = (props) => {
	const classes = useStyles();
	const [, setTrucks] = useContext(TruckContext);

	const handleDayChange = (e) => {
		const key = props.id;
		let updatedDay = e.target.value
		
		setTrucks(trucks => {
			let updatedTrucks = trucks.map(truck => truck.id === key ? {...truck, day:updatedDay} : truck);
			return [...updatedTrucks]
		})
	}

	return (
		<FormControl variant="outlined" className={classes.formControl}>
			<InputLabel htmlFor="outlined-age-native-simple">Day</InputLabel>
			<Select
				autoWidth
				size="small"
				className={classes.selected}
				native
				value={props.day}
				label="Day"
				inputProps={{
					name: "day",
				}}
				onChange={(e) => handleDayChange(e)}
			>
				<option aria-label="None" value="" />
				{weekDays.map((day) => (
					<option aria-label={day} className={classes.selected} key={day}>
						{day}
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

export default DaySelector;
