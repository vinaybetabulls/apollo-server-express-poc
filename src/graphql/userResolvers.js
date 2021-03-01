// import { ApolloError } from "apollo-server";

import { UserModel } from "../mongoSchema/user.schema";
import { IsUserExisted } from "../services/user.service";

import { generateJWT } from "../utils/jwt";

export const LoginResolver = async (_parent, request) => {
  const userModel = new UserModel();
  const isEmailExisted = await IsUserExisted(request?.email);
  if (isEmailExisted) {
    const isValidPassword = await userModel.validPassword(
      request?.password,
      isEmailExisted.password
    );
    if (isValidPassword) {
      const jwt = await generateJWT();
      return {
        email: isEmailExisted.email,
        jwt,
      };
    } else {
      return { message: "Invalid password" };
    }
  } else {
    return { message: "Email address not existed" };
  }
};

export const RegistrationResolver = async (_parent, request) => {
  try {
    const isEmailExisted = await IsUserExisted(request?.email);
    if (!isEmailExisted) {
      const userModel = new UserModel(request);
      const hasedPassword = await userModel.setPassword(request.password);
      console.log("hasedPassword", hasedPassword);
      request.password = hasedPassword;
      const user = await userModel.save();
      console.log(user);
      return user;
    } else {
      return {
        message: "Email aleady existed",
      };
    }
  } catch (error) {
    console.log(error);
  }
};
