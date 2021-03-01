// Imports: GraphQL
import { gql } from "apollo-server-express";
// GraphQL: TypeDefs
const typedefs = gql`
  type Test {
    test_field_1: String
    test_field_2: Int
    test_field_3: Boolean
  }
  type UserError {
    message: String!
  }
  type User {
    firstName: String
    lastName: String
    email: String
    password: String
    phoneNumber: String
  }
  type RegisterError {
    message: String
  }
 
  type UserLogin {
    email: String!
    jwt: String!
  }
  union UserResult = User | RegisterError
  union UserLoginResult = UserLogin | UserError


 
  type Query {
    test_query: Test
  }
  type Mutation {
    Login(email: String!, password: String!): UserLoginResult
    Registration(
      firstName: String
      lastName: String
      email: String!
      password: String!
      phoneNumber: String
    ): UserResult
  }
`;
// Exports
export default typedefs;
