import { userData } from "@/dummyData/dummyData";
import { User } from "@/types/common.types";

export type dummyUserLoginResponseType = {
  user: User | null;
  error: string | null;
};

type dummyUserLoginParams = { email: string; password: string };

export const dummyUserLogin = (
  user: dummyUserLoginParams
): dummyUserLoginResponseType => {
  const response: dummyUserLoginResponseType = { user: null, error: null };
  const { email, password } = user;
  for (const userInDB of userData) {
    if (userInDB.email === email || userInDB.userName === email) {
      if (userInDB.password === password) {
        response.user = userInDB;
        return response;
      } else {
        response.error = "Password is incorrect";
        return response;
      }
    }
  }
  response.error = "User not found with this email";
  return response;
};
