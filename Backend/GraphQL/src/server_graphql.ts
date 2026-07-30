/*Code modified from https://www.apollographql.com/docs/apollo-server/getting-started */
import axios from 'axios';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { getAllProducts } from './products/product-service.js';
import ProductDTO from './types/product'
import { readFileSync } from 'fs';

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = readFileSync('./src/types/schema.graphql', { encoding: 'utf-8' });

const resolvers = {
  Query: {
    products: async () => {return await getAllProducts()},
  },
};

interface MyContext {
  dataSources: {
    products: ProductDTO[];
  };
}

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`Server ready at: ${url}`);