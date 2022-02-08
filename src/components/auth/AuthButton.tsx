import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ComponentPropsWithoutRef } from 'react';
import styled, { keyframes } from 'styled-components';

const Button = styled.button`
  padding: 5px 0;
  font-size: 1rem;
  border-radius: 10px;
  border: none;
  background-color: ${({ theme }) => theme.accentColor};
  color: white;

  &[disabled] {
    opacity: 0.8;
    cursor: not-allowed;
  }
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Loading = styled(FontAwesomeIcon)`
  animation: ${spin} 0.8s linear infinite;
`;

type AuthButtonProps = Pick<ComponentPropsWithoutRef<'button'>, 'disabled' | 'children'> & {
  loading?: boolean;
};

export default function AuthButton({ loading = false, disabled, children }: AuthButtonProps) {
  return (
    <Button type="submit" disabled={disabled}>
      {loading ? <Loading icon={faSpinner} /> : children}
    </Button>
  );
}
