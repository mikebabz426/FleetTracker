import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
  useQuery,
  useMutation
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://bright-sawfish-99.hasura.app/v1/graphql",
  cache: new InMemoryCache()
});

const ALL_FLEET = gql`
  query ALL_FLEET {
    fleet_table {
      appt
      cell
      day
      driver
      id
      location
      needs
      notes
      status
      team
      time
      trailer
      truck
      type
      usState
    }
  }
`;

const ADD_FLEET = gql`
  mutation {
    insert_fleet_table_one(
      object: {
        appt: true
        cell: "342434"
        day: "Tue"
        driver: "koko"
        location: "bulgaria"
        needs: "adsad"
        notes: "good"
        status: "true"
        team: "loco"
        time: "234234"
        trailer: 1
        truck: 2
        type: "american"
        usState: "AZ"
      }
    ) {
      id
    }
  }
`;

const Trucks = () => {
  const { loading, error, data, refetch } = useQuery(ALL_FLEET);
  const [addTruck] = useMutation(ADD_FLEET);
  const [bgColor, setBackGroundColor] = React.useState("green");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <button
        onClick={() => {
          addTruck();
          setBackGroundColor((color) => (color === "green" ? "red" : "green"));
          refetch();
        }}
        style={{ backgroundColor: bgColor }}
      >
        add new
      </button>
      {data.fleet_table.map((truck) => (
        <pre onCLick={() => deleteTruck(truck.id)}>{JSON.stringify(truck, null, 2)}</pre>
      ))}
    </div>
  );
};

export default function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Hello to Apollo React</h1>
        <Trucks />
      </div>
    </ApolloProvider>
  );
}
