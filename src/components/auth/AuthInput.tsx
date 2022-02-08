import { ComponentPropsWithoutRef, forwardRef } from 'react';
import styled from 'styled-components';

const Input = styled.input<{ $error: boolean }>`
  border: 1px solid ${({ theme }) => theme.borderColor};
  background-color: ${({ theme }) => theme.inputColor};
  color: ${({ theme }) => theme.fontColor};
  font-size: 0.9rem;
  border-radius: 3px;
  padding: 8px;
  outline: none;
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.placeholderColor};
  }
`;

type AuthInputProps = ComponentPropsWithoutRef<'input'> & {
  error?: boolean;
};
type AuthInputRef = HTMLInputElement;

const AuthInput = forwardRef<AuthInputRef, AuthInputProps>(({ error = false, ...props }, ref) => {
  return (
    <Input
      {...props}
      ref={ref}
      $error={error}
      autoCorrect="off"
      autoComplete="off"
      autoCapitalize="off"
    />
  );
});

export default AuthInput;
