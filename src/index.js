// Imports: Express
import express from "express";
import bodyParser from "body-parser";
const app = express();

// Imports: mongodb connection
import { MongodbConnection } from "./database";

// Imports: GraphQL
import server from "./graphql/schema.js";
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// estabishing mondodb connection
MongodbConnection();
// Middleware: GraphQL
server.applyMiddleware({
  app: app,
});
// Express: Port
const PORT = 5000 || process.env;
// Express: Listener
app.listen(PORT, () => {
  console.log(`The server has started on port: ${PORT}`);
  console.log(`http://localhost:${PORT}/graphql`);
});
