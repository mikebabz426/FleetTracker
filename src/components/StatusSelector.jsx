import React, {useContext} from "react";
import { FormControl, Select } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TruckContext } from './../FleetContext';
import InputBase from '@material-ui/core/InputBase';


const StatusSelector = (props) => {
	const classes = useStyles();
	const [, setTrucks] = useContext(TruckContext);

	const handleDayChange = (e) => {
		const key = props.id;
		let updatedStatus = e.target.value
		
		setTrucks(trucks => {
			let updatedTrucks = trucks.map(truck => truck.id === key ? {...truck, status:updatedStatus} : truck);
			return [...updatedTrucks]
		})
	}

	return (
		<FormControl variant="outlined" className={classes.formControl}>
			<Select
				className={classes.selected}
				native
				value={props.status}
				label="Status"
				onChange={(e) => handleDayChange(e)}
				input={<CustomInput/>}
			>
				<option aria-label="None" value="" />
				<option aria-label='Parked' className={classes.selected} key='Parked' value='Parked'>Parked</option>
				<option aria-label='Enroute' className={classes.selected} key='Enroute' value='Enroute'>Enroute</option>
				<option aria-label='on-site' className={classes.selected} key='On Site' value='On Site'>On Site</option>
				<option aria-label='Unloading' className={classes.selected} key='Unloading' value='Unloading'>Unloading</option>
				<option aria-label='Empty' className={classes.selected} key='Empty' value='Empty'>Empty</option>

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

export default StatusSelector;
