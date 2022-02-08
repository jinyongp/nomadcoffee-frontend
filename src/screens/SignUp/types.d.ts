import { CommonOutput, User } from 'types/graphql/objects';

type CreateAccountInput = Pick<User, 'username' | 'email' | 'password'>;
type CreateAccountOutput = {
  createAccount: CommonOutput;
};

type SignUpFormType = CreateAccountInput & {
  result: string;
};
