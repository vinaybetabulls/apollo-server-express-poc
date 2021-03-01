import { UserModel } from "../mongoSchema/user.schema";

// check user is existed or not

export const IsUserExisted = async (email) => {
  try {
    return await UserModel.findOne({ email: email.toLowerCase() });
  } catch (error) {
    throw error;
  }
};
