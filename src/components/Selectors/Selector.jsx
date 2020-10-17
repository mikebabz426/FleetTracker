import React, { useContext } from "react";
import { TruckContext } from "./../../FleetContext";
import { FormControl, Select } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import { weekDays, states, truckStatus } from "./../../services/services";

const Selector = (props) => {
	const classes = useStyles();

	const [, setTrucks] = useContext(TruckContext);
	const { id, type, val } = props;
	const arr =
		type === "day" ? weekDays : type === "status" ? truckStatus : states;

	const handleChange = (e, id) => {
		debugger;
		const key = id;
		let updatedVal = e.target.value;
		let banana = type;

		setTrucks((trucks) => {
			let updatedTrucks = trucks.map((truck) => {
				if (banana === "day") {
					return truck.id === key ? { ...truck, day: updatedVal } : truck;
				} else if (banana === "state") {
					return truck.id === key ? { ...truck, usState: updatedVal } : truck;
				} else if (banana === "status") {
					return truck.id === key ? { ...truck, status: updatedVal } : truck;
				} else {
					return null;
				}
			});
			return [...updatedTrucks];
		});
	};

	return (
		<FormControl variant="outlined" className={classes.formControl}>
			<Select
				className={classes.selected}
				native
				value={val}
				label={type}
				onChange={(e) => handleChange(e, id)}
				input={<CustomInput />}
			>
				<option className={classes.selected} aria-label="None" value="" />
				{arr.map((opt) => (
					<option aria-label={opt} key={opt} className={classes.selected}>
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
