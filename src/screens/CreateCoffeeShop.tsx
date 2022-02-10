import Button from '@components/shared/Button';
import LabelInput from '@components/shared/LabelInput';
import routes from '@constants/routes';
import { CreateCoffeeShopMutationVariables, useCreateCoffeeShopMutation } from '@generated';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ModalBackdrop = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(2px) brightness(60%);
`;

const ModalContainer = styled.section`
  width: 90%;
  height: 90%;
  max-width: 700px;
  overflow-y: auto;
  background-color: white;
  position: absolute;
  border-radius: 30px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 20px;
`;

const Header = styled.h1`
  font-family: 'Festive', cursive;
  font-size: 3rem;
  text-align: center;
  font-weight: 800;
`;

const Description = styled.h2`
  font-size: 1.1rem;
  text-align: center;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ConfirmButton = styled(Button)`
  margin-top: 40px;
  font-weight: 600;
  padding: 10px 0;
`;

const BackButton = styled.button`
  text-align: center;
  font-weight: 500;
  font-size: 0.9rem;
  background-color: transparent;
  color: ${({ theme }) => theme.accentColor};
  transition: background-color 0.2s linear;
  border-radius: 10px;
  padding: 5px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

type CreateCoffeeShopFormType = CreateCoffeeShopMutationVariables & { result: string };

export default function CreateCoffeeShopScreen() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { isValid },
  } = useForm<CreateCoffeeShopFormType>({ mode: 'onChange' });
  const [createCoffeeShop, { loading }] = useCreateCoffeeShopMutation({
    onCompleted({ createCoffeeShop: { ok, error } }) {
      if (ok) {
        navigate(routes.abs.home, { state: { message: '커피숍이 정상적으로 등록되었습니다!' } });
      } else {
        setError('result', { message: error as string });
      }
    },
  });

  useEffect(() => {
    document.body.classList.add('disable-scroll');
    return () => document.body.classList.remove('disable-scroll');
  }, []);

  const onClose = () => navigate(-1);
  const handleSubmitValid = handleSubmit((variables) => {
    loading || createCoffeeShop({ variables });
  });

  return (
    <ModalBackdrop onClick={onClose}>
      <ModalContainer onClick={(event) => event.stopPropagation()}>
        <Header>Register Your Special Coffee Shop</Header>
        <Description>커피숍을 등록하고 공유해보세요!</Description>
        <FormContainer onSubmit={handleSubmitValid}>
          <LabelInput type="text" label="카페 이름" {...register('name', { required: true })} />
          <LabelInput
            type="text"
            label="Latitude (*변경예정)"
            {...register('latitude', { required: true, onChange: () => clearErrors() })}
          />
          <LabelInput
            type="text"
            label="Longitude (*변경예정)"
            {...register('longitude', { required: true, onChange: () => clearErrors() })}
          />
          <ConfirmButton loading={loading} disabled={!isValid || loading}>
            추가할게요!
          </ConfirmButton>
          <BackButton onClick={onClose}>돌아갈래요.</BackButton>
        </FormContainer>
      </ModalContainer>
    </ModalBackdrop>
  );
}
