import * as React from "react";
import "./styles.css";

const trucks = [
  {
    id: 1,
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
    status: "",
    needs: "",
    notes: "",
    team: "team one"
  },
  {
    id: 2,
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
    status: "",
    needs: "",
    notes: "",
    team: "team two"
  }
];

const teamOptions = ["all", "team one", "team two"];
const dayOptions = ["Mon", "Tue"];

const Select = ({ onChange, options, label }) => {
  return (
    <div>
      <label>{label}</label>
      <select onChange={onChange}>
        {options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default function App() {
  const [teamFilter, setTeamFilter] = React.useState("all");
  const [dayFilter, setDayFilter] = React.useState("all");

  const userTrucks = trucks
    .filter((truck) => {
      if (teamFilter === "all") return true;
      if (teamFilter === truck.team) return true;
    })
    .filter((truck) => {
      if (dayFilter === "all") return true;
      if (dayFilter === truck.day) return true;
    })
    .map((truck) => {
      return <div key={truck.id}>{truck.type}</div>;
    });

  return (
    <div className="App">
      <Select
        label="Team: "
        onChange={(e) => setTeamFilter(e.target.value)}
        options={teamOptions}
      />
      <Select
        label="Day: "
        onChange={(e) => setDayFilter(e.target.value)}
        options={dayOptions}
      />
      {userTrucks}
      <div>{userTrucks.length === 0 && "No results"}</div>
    </div>
  );
}
