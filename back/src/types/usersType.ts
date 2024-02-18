export type createUserRequest = {
  name: string;
  email: string;
  password: string;
};

export type authenticateUserRequest = {
  userId?: number;
};
