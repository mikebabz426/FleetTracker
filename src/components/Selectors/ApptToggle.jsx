import React, {useContext} from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { TruckContext } from '../../FleetContext';

const ApptSelector = ( props) => {

  const [, setTrucks] = useContext(TruckContext);

  const handleApptChange = (e) => {
    const key = props.id;
    setTrucks(trucks => {
      let updatedTrucks = trucks.map(truck => {
      
        let appt = truck.appt
        return truck.id === key ? {...truck, appt: !appt} : truck
      });
      return [...updatedTrucks];
    })
  }

  return ( <Checkbox
        checked={props.checked}
        onChange={(e) => handleApptChange(e)}
        size="small"
        inputProps={{ 'aria-label': 'checkbox with small size' }}
      /> );
}

export default ApptSelector;