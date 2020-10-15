import React, {useContext} from "react";
import { FormControl, Select } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputBase from '@material-ui/core/InputBase';
import { FilterContext } from '../../FilterContext';



const TeamFilter = () => {
	const [filters, setFilters] = useContext(FilterContext);
	const classes = useStyles();

	const handleChange = (e) => {
		let currentTeam = e.target.value;
		setFilters({...filters, team: currentTeam})
	}

  return (
		<FormControl variant="outlined" className={classes.formControl}>
			<Select
				className={classes.selected}
				native
				label="TEAM"
				input={<CustomInput/>}
				onChange={e => handleChange(e)}
			>
				<option aria-label="All" className={classes.selected}  key='all' value="all" >All</option>
				<option aria-label='Parked' className={classes.selected} key='teamOne' value='teamOne'>Team One</option>
				<option aria-label='Enroute' className={classes.selected} key='teamTwo' value='teamTwo'>Team Two</option>
				<option aria-label='on-site' className={classes.selected} key='teamThree' value='teamThree'>Team Three</option>
				<option aria-label='Unloading' className={classes.selected} key='teamFour' value='teamFour'>Team Four</option>
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

export default TeamFilter;