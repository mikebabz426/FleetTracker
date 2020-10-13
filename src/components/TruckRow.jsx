import React, {useContext} from "react";
import { TextField, TableCell, TableRow } from "@material-ui/core";
import StateSelector from "./StateSelector";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { TruckContext } from './../FleetContext';
import DaySelector from "./DaySelector";
import ApptSelector from './ApptSelector';




const TruckRow = (props) => {
	const classes = useStyles();
	const [, setTrucks]  = useContext(TruckContext);
	
	
	const {
		id,
		day,
		driver,
		cell,
		truck,
		trailer,
		type,
		location,
		usState,
		time,
		appt,
		needs,
		notes,
	} = props;

	const handleLocationChange = (e) => {
					const updatedLocation = e.target.value;
					const key = id;
					setTrucks(trucks => {
						let updatedTrucks = trucks.map(truck => truck.id === key ? {...truck, location:updatedLocation} : truck);
						return [...updatedTrucks];
					})
						}

	return (
		<StyledTableRow key={id}>
			<StyledTableCell>
				<DaySelector day={day} label='day' id={id} />
			</StyledTableCell>
			<StyledTableCell>{cell}</StyledTableCell>
			<StyledTableCell>{driver}</StyledTableCell>
			<StyledTableCell>{truck}</StyledTableCell>
			<StyledTableCell>{trailer}</StyledTableCell>
			<StyledTableCell>{type}</StyledTableCell>
			<StyledTableCell>
				<TextField
					onChange={(e) => handleLocationChange(e)}
					className={classes.location}
					variant="outlined"
					label="Location"
					color="secondary"
					size="small"
					value={location}
				/>
			</StyledTableCell>
			<StyledTableCell>
				<StateSelector label="usState" st={usState} id={id} />
			</StyledTableCell>
			<StyledTableCell>
				<TextField
					className={classes.notes}
					variant="outlined"
					label="time"
					color="secondary"
					size="small"
					value={time}
				/>
			</StyledTableCell>
			<StyledTableCell>
				<ApptSelector checked={appt} id={id}/>
			</StyledTableCell>
			<StyledTableCell>
				<TextField
					className={classes.notes}
					variant="outlined"
					label="needs"
					color="secondary"
					size="small"
					value={needs}
				/>
			</StyledTableCell>
			<StyledTableCell>
				<TextField
					className={classes.notes}
					variant="outlined"
					label="notes"
					color="secondary"
					size="small"
					value={notes}
				/>
			</StyledTableCell>
		</StyledTableRow>
	);
};

//Custom Component Styling

const StyledTableCell = withStyles((theme) => ({
	head: {
		backgroundColor: "#0257A2",
		color: theme.palette.common.white,
	},
	body: {
		fontSize: 14,
		padding: ".2rem 1rem",
	},
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
	root: {
		"&:nth-of-type(odd)": {
			backgroundColor: "#EBF5FF",
		},
	},
}))(TableRow);

const useStyles = makeStyles({
	table: {
		minWidth: 700,
	},
	notes: {
		backgroundColor: "#fff",
	},
	location: {
		fontWeight: "bold",
	},
});



export default TruckRow;
