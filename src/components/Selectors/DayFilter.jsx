import React, {useContext} from "react";
import { FormControl, Select } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputBase from '@material-ui/core/InputBase';
import { FilterContext } from '../../FilterContext';



const DayFilter = () => {
	const [filters, setFilters] = useContext(FilterContext);
	const classes = useStyles();

	const handleChange = (e) => {
		let currentDay = e.target.value;
		setFilters({...filters, day: currentDay})
	}

  return (
		<FormControl variant="outlined" className={classes.formControl}>
			<Select
				className={classes.selected}
				native
				label="Day"
				input={<CustomInput/>}
				onChange={e => handleChange(e)}
			>
				<option aria-label="All" className={classes.selected} key='all' value="all">All</option>
				<option aria-label='Mon' className={classes.selected} key='Mon' value='Mon'>Mon</option>
				<option aria-label='Tue' className={classes.selected} key='Tue' value='Tue'>Tue</option>
				<option aria-label='Wed' className={classes.selected} key='Wed' value='Wed'>Wed</option>
				<option aria-label='Thu' className={classes.selected} key='Thu' value='Thu'>Thu</option>
				<option aria-label='Fri' className={classes.selected} key='Fri' value='Fri'>Fri</option>
				<option aria-label='Sat' className={classes.selected} key='Sat' value='Sat'>Sat</option>
				<option aria-label='Sun' className={classes.selected} key='Sun' value='Sun'>Sun</option>
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
    fontSize: 14,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    
    '&:focus': {
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

export default DayFilter;