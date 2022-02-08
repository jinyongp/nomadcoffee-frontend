export type LoginInput = Pick<User, 'username' | 'password'>;
export type LoginOutput = {
  login: TokenOutput;
};

export type LoginFormType = LoginInput & {
  result: string;
};

export type LoginStateType = {
  username: string;
  message: string;
};
