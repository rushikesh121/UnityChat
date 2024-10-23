import { isValidUsername } from "6pp";
export const userValidator = (user) => {
  if (!isValidUsername(user))
    return { isvalid: false, errorMessage: "Username is invlid!!" };
};
