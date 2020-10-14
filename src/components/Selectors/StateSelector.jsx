import React, {useContext} from "react";
import {FormControl, Select } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import stateAbbreviations from "../../services/usStates";
import { TruckContext } from '../../FleetContext';
import InputBase from '@material-ui/core/InputBase';


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
			<Select
				className={classes.selected}
				native
				value={props.st}
				onChange={(e) => handleUsStateChange(e)}
				label="State"
				input={<CustomInput/>}
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

const CustomInput = withStyles((theme) => ({

  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    
    '&:focus': {
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

export default StateSelector;
