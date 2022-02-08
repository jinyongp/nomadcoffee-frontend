import { gql, useMutation } from '@apollo/client';
import { loginUser } from 'apollo';
import AuthButton from 'components/auth/AuthButton';
import AuthInput from 'components/auth/AuthInput';
import AuthLayout from 'components/auth/AuthLayout';
import AuthNotice from 'components/auth/AuthNotice';
import BottomContainer from 'components/auth/BottomContainer';
import TopContainer from 'components/auth/TopContainer';
import PageTitle from 'components/shared/PageTitle';
import { FormBase } from 'components/styled';
import routes from 'constants/routes';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { LoginFormType, LoginInput, LoginOutput, LoginStateType } from 'screens/Login/types';
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

const LOGIN_MUTATION = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      ok
      token
      error
    }
  }
`;

export default function Login() {
  const location = useLocation<LoginStateType>();
  const {
    register,
    handleSubmit,
    setError,
    setValue,
    setFocus,
    formState: { errors, isValid },
  } = useForm<LoginFormType>({
    mode: 'onChange',
    defaultValues: {
      username: location.state?.username || '',
    },
  });

  const [login, { loading }] = useMutation<LoginOutput, LoginInput>(LOGIN_MUTATION, {
    onCompleted({ login: { ok, error, token } }) {
      if (ok) {
        loginUser(token as string);
      } else {
        if (error === 'User Not Found') {
          setError('username', { message: '사용자를 찾을 수 없습니다.' });
          setFocus('username');
        } else if (error === 'Wrong Password') {
          setError('password', { message: '잘못된 비밀번호입니다.' });
          setValue('password', '');
          setFocus('password');
        } else {
          console.error(error);
        }
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
            {...register('username', { required: true })}
            type="text"
            placeholder="Username"
          />
          <AuthInput
            {...register('password', { required: true })}
            type="password"
            placeholder="Password"
          />
          <AuthButton disabled={!isValid || loading} loading={loading}>
            Log In
          </AuthButton>
          {location.state?.message ? (
            <AuthNotice type="info">{location.state?.message}</AuthNotice>
          ) : (
            <AuthNotice type="error">{getErrorMessage()}</AuthNotice>
          )}
        </Form>
      </TopContainer>
      <BottomContainer cta="아직 계정이 없으신가요?" to={routes.signUp} title="회원 가입" />
    </AuthLayout>
  );
}
