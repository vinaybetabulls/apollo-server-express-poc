// Imports: GraphQL
import { ApolloServer } from 'apollo-server-express';
// Imports: GraphQL TypeDefs & Resolvers
import typedefs from './types.js';
import resolvers from './resolvers.js';
// GraphQL: Schema
const server = new ApolloServer({
  typeDefs: typedefs,
  resolvers: resolvers,
  playground: {
    endpoint: `http://localhost:5000/graphql`,
    settings: {
      'editor.theme': 'light'
    }
  }
});
// Exports
export default server;