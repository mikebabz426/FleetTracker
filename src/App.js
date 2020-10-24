import React from "react";
import Layout from "./components/Layout";
import {FilterProvider} from './FilterContext'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
	uri: "https://bright-sawfish-99.hasura.app/v1/graphql",
	cache: new InMemoryCache(),
});

function App() {
	return (
		<ApolloProvider client={client}>
			<FilterProvider>
					<div className="App">
						<Layout />
					</div>
				</FilterProvider>
			</ApolloProvider>
	);
}

export default App;
