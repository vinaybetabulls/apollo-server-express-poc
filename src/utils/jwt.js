import jwt from "jsonwebtoken";
const SECRETE_KEY = "JWTSECRETEKEYAB&^TUHas&&bashf0" || process.env.SECRETE_KEY;
export const generateJWT = (payload) => {
  return jwt.sign({ email: payload }, SECRETE_KEY, {
    expiresIn: 86400, // expires in 24 hours
  });
};

export const validatedJWT = () => {
  try {
    return jwt.verify(token, SECRETE_KEY);
  } catch (error) {
    throw Error(error);
  }
};
