const {ApolloServer, gql} = require('apollo-server');

// Sample in-memory data for Dutch cities and locations
const cities = [
    {id: '1', name: 'Apeldoorn'},
    {id: '2', name: 'Eindhoven'},
    {id: '3', name: 'Nijmegen'},
    {id: '4', name: 'Utrecht'},
    {id: '5', name: 'Groningen'}
];

// Define the GraphQL schema
const typeDefs = gql`
  type Query {
    cities: [City]
    city(id: ID!): City
  }

  type City {
    id: ID
    name: String
  }
`;

// Define the resolvers to fetch data
const resolvers = {
    Query: {
        cities: () => cities,
        city: (_, {id}) => cities.find(city => city.id === id),
    },
};

// Set up the Apollo Server
const server = new ApolloServer({typeDefs, resolvers});

// Start the server
server.listen({port: 3001}).then(({url}) => {
    console.log(`Server running at ${url}`);
});
