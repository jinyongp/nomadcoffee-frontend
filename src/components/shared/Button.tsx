import { spin } from '@components/shared/keyframes';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ComponentPropsWithoutRef } from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.button`
  padding: 5px 0;
  font-size: 1rem;
  border-radius: 10px;
  border: none;
  width: 100%;
  background-color: ${({ theme }) => theme.accentColor};
  color: white;
`;

const Loading = styled(FontAwesomeIcon)`
  animation: ${spin} 0.8s linear infinite;
`;

type AuthButtonProps = ComponentPropsWithoutRef<'button'> & {
  loading?: boolean;
};

export default function Button({ loading = false, disabled, children, ...props }: AuthButtonProps) {
  return (
    <ButtonContainer type="submit" disabled={disabled} {...props}>
      {loading ? <Loading icon={faSpinner} /> : children}
    </ButtonContainer>
  );
}
