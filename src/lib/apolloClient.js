import ApolloClient, { InMemoryCache } from "apollo-boost";
import { isServer } from "rogue";

export default function createClient(initialState, ctx) {
  return new ApolloClient({
    uri: "https://dev-reactpress.pantheonsite.io/graphql",
    connectToDevTools: !isServer,
    ssrMode: isServer, // Disables forceFetch on the server (so queries are only run once)
    cache: new InMemoryCache().restore(initialState || {})
  });
}
