// Imports: Axios
import axios from "axios";
import { LoginResolver, RegistrationResolver } from "./userResolvers";
// GraphQL: Resolvers
const resolvers = {
  Query: {
    test_query: (parent, args) => {
      return {
        test_field_1: "asfkn",
        test_field_2: 20,
        test_field_3: true,
      };
    },
  },
  Mutation: {
    Login: (parent, args) => LoginResolver(parent, args),
    Registration: (parent, args) => RegistrationResolver(parent, args),
  },
  UserResult: {
    __resolveType(obj) {
      console.log("obj..", obj);
      if (obj.message) return "RegisterError";
      else return "User";
    },
  },
  UserLoginResult: {
    __resolveType(obj) {
      if (obj.message) return "UserError";
      else return "UserLogin";
    },
  },
};
// Exports
export default resolvers;
