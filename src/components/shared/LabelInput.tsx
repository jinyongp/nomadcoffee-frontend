import { ComponentPropsWithoutRef, forwardRef } from 'react';
import styled from 'styled-components';
import { ErrorProps } from 'types/styled';

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Label = styled.label`
  font-weight: 600;
`;

const Input = styled.input<ErrorProps>`
  padding: 10px;
  background-color: ${({ theme }) => theme.inputColor};
  border: 1px solid ${({ theme }) => theme.borderColor};
  color: ${({ theme }) => theme.fontColor};
  border-radius: 5px;
  font-size: 1.05rem;
`;

type LabelInputRef = HTMLInputElement;
type LabelInputProps = ComponentPropsWithoutRef<'input'> & {
  label: string;
  error?: boolean;
};

const LabelInput = forwardRef<LabelInputRef, LabelInputProps>(
  ({ label, error = false, ...props }, ref) => {
    return (
      <InputContainer>
        <Label htmlFor={label}>{label}</Label>
        <Input {...props} ref={ref} $error={error} autoCapitalize="off" />
      </InputContainer>
    );
  },
);

export default LabelInput;
