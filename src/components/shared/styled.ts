import styled from 'styled-components';

export const ContainerBase = styled.section`
  background-color: white;
  border: 1px solid ${({ theme }) => theme.borderColor};
  width: 350px;
  padding: 20px;
`;

export const FormBase = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  position: relative;
`;
