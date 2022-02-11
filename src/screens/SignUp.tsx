import AuthInput from '@components/auth/AuthInput';
import AuthLayout from '@components/auth/AuthLayout';
import AuthNotice from '@components/auth/AuthNotice';
import BottomContainer from '@components/auth/BottomContainer';
import TopContainer from '@components/auth/TopContainer';
import Button from '@components/shared/Button';
import PageTitle from '@components/shared/PageTitle';
import { FormBase } from '@components/shared/styled';
import routes from '@constants/routes';
import { CreateAccountMutationVariables, useCreateAccountMutation } from '@generated';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
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

type SignUpFormType = CreateAccountMutationVariables & { result: string };

export default function SignUpScreen() {
  const {
    register,
    handleSubmit,
    setError,
    setFocus,
    getValues,
    formState: { errors, isValid },
  } = useForm<SignUpFormType>({ mode: 'onChange' });
  const navigate = useNavigate();
  const [createAccount, { loading }] = useCreateAccountMutation({
    onCompleted({ createAccount: { ok, error } }) {
      if (ok) {
        navigate(routes.abs.home, {
          replace: true,
          state: {
            username: getValues('username'),
            message: '회원가입을 성공했습니다.',
          },
        });
      } else {
        if (error === 'The Username Already Exists') {
          setError('username', { message: '이미 가입된 사용자입니다.' });
          setFocus('username');
        } else if (error === 'The Email Already Registered') {
          setError('email', { message: '이미 가입된 이메일입니다.' });
          setFocus('email');
        } else {
          console.error(error);
          setError('result', { message: '예상치 못한 에러가 발생했습니다.' });
        }
      }
    },
  });

  const onSubmitValid = handleSubmit((variables) => {
    loading || createAccount({ variables });
  });

  const getErrorMessage = () => {
    const { username, email, result } = errors;
    return username?.message || email?.message || result?.message || '';
  };

  return (
    <AuthLayout>
      <PageTitle page="Sign Up" />
      <TopContainer>
        <Form onSubmit={onSubmitValid}>
          <AuthInput {...register('name', { required: true })} type="text" placeholder="Name" />
          <AuthInput
            {...register('username', { required: true })}
            type="text"
            placeholder="Username"
          />
          <AuthInput {...register('email', { required: true })} type="email" placeholder="Email" />
          <AuthInput
            {...register('password', { required: true })}
            type="password"
            placeholder="Password"
          />
          <Button disabled={!isValid || loading} loading={loading}>
            Sign Up
          </Button>
          <AuthNotice type="error">{getErrorMessage()}</AuthNotice>
        </Form>
      </TopContainer>
      <BottomContainer cta="계정이 이미 있으신가요?" to={routes.abs.home} title="로그인" />
    </AuthLayout>
  );
}
