import { userData } from '@/dummyData/dummyData';
import { User } from '@/types/types';

export type dummyUserLoginResponseType = {
  user: User | null;
  error: string | null;
};

type dummyUserLoginParams = { emailOrUserName: string; password: string };

export const dummyUserLogin = (
  user: dummyUserLoginParams
): dummyUserLoginResponseType => {
  const response: dummyUserLoginResponseType = { user: null, error: null };
  const { emailOrUserName, password } = user;
  for (const userInDB of userData) {
    if (
      userInDB.email === emailOrUserName ||
      userInDB.userName === emailOrUserName
    ) {
      if (userInDB.password === password) {
        response.user = userInDB;
        return response;
      } else {
        response.error = 'Password is incorrect';
        return response;
      }
    }
  }
  response.error = 'User not found with this email';
  return response;
};
