import React from "react";
import { useState, createContext } from "react";
import { v4 as uuidv4 } from "uuid";

export const TruckContext = createContext();

export const TruckProvider = (props) => {
	const [trucks, setTrucks] = useState([
		{
			id: uuidv4(),
			day: "Tue",
			driver: "Jay Rodriguez",
			cell: "214-735-6373",
			truck: 1809,
			trailer: 219941,
			type: "53' Van",
			location: "Hendersonville",
			usState: "NC",
			time: "00:00",
			appt: false,
			needs: "",
			notes: "",
		},
		{
			id: uuidv4(),
			day: "Mon",
			driver: "Todor Kitev",
			cell: "253-457-6365",
			truck: 108,
			trailer: 5351,
			type: "53' Reefer",
			location: "Iowa City",
			usState: "IA",
			time: "09:30",
			appt: false,
			needs: "",
			notes: "",
		},
		{
			id: uuidv4(),
			day: "Wed",
			driver: "Johnny Baram",
			cell: "253-457-6365",
			truck: 2007,
			trailer: 219940,
			type: "53' Van",
			location: "Hopkinsville",
			usState: "KY",
			time: "08:00",
			appt: true,
			needs: "",
			notes: "",
		},
		{
			id: uuidv4(),
			day: "Mon",
			driver: "Venci Ivanov",
			cell: "708-369-7219",
			truck: 885,
			trailer: 4612,
			type: "53' Reefer",
			location: "Menomonie",
			usState: "WI",
			time: "12:00",
			appt: false,
			needs: "",
			notes: "",
		},
		{
			id: uuidv4(),
			day: "Thu",
			driver: "Elizabeth Steinmetz",
			cell: "417-421-7453",
			truck: 1810,
			trailer: 191112,
			type: "53' Van",
			location: "Seymour",
			usState: "IN",
			time: "10:00",
			appt: false,
			needs: "",
			notes: "",
		},
		{
			id: uuidv4(),
			day: "Fri",
			driver: "Angel Griffin",
			cell: "678-438-4007",
			truck: 1811,
			trailer: 206184,
			type: "53' Van",
			location: "Forest Park",
			usState: "GA",
			time: "10:15",
			appt: true,
			needs: "",
			notes: "",
		},
	]);

	return (
		<TruckContext.Provider value={[trucks, setTrucks]}>
			{props.children}
		</TruckContext.Provider>
	);
};
