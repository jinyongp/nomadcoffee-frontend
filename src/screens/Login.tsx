import AuthInput from '@components/auth/AuthInput';
import AuthLayout from '@components/auth/AuthLayout';
import AuthNotice from '@components/auth/AuthNotice';
import BottomContainer from '@components/auth/BottomContainer';
import TopContainer from '@components/auth/TopContainer';
import Button from '@components/shared/Button';
import PageTitle from '@components/shared/PageTitle';
import { FormBase } from '@components/shared/styled';
import routes from '@constants/routes';
import { LoginMutationVariables, useLoginMutation } from '@generated';
import { loginUser } from 'apollo';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Form = styled(FormBase)`
  span {
    position: absolute;
    text-align: center;
    left: 0;
    right: 0;
    bottom: -25px;
  }

  button {
    margin-top: 10px;
  }
`;

type LoginStateType = { username?: string; message?: string };
type LoginFormType = LoginMutationVariables & { result: string };

export default function LoginScreen() {
  const location = useLocation<LoginStateType>();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors, isValid },
  } = useForm<LoginFormType>({
    mode: 'onChange',
    defaultValues: {
      username: location.state?.username || '',
    },
  });

  const [login, { loading }] = useLoginMutation({
    onCompleted({ login: { ok, error, token } }) {
      if (ok) {
        navigate(location.pathname, { replace: true });
        loginUser(token as string);
      } else {
        setError('result', { message: error as string });
      }
    },
  });

  const onSubmitValid = handleSubmit((variables) => {
    loading || login({ variables });
  });

  const getErrorMessage = () => {
    const { username, password, result } = errors;
    return username?.message || password?.message || result?.message || '';
  };

  return (
    <AuthLayout>
      <PageTitle page="Log In" />
      <TopContainer>
        <Form onSubmit={onSubmitValid}>
          <AuthInput
            {...register('username', { required: true, onChange: () => clearErrors() })}
            type="text"
            placeholder="Username"
          />
          <AuthInput
            {...register('password', { required: true, onChange: () => clearErrors() })}
            type="password"
            placeholder="Password"
          />
          <Button disabled={!isValid || loading} loading={loading}>
            Log In
          </Button>
          {location.state?.message ? (
            <AuthNotice type="info">{location.state?.message}</AuthNotice>
          ) : (
            <AuthNotice type="error">{getErrorMessage()}</AuthNotice>
          )}
        </Form>
      </TopContainer>
      <BottomContainer cta="아직 계정이 없으신가요?" to={routes.abs.signUp} title="회원 가입" />
    </AuthLayout>
  );
}
