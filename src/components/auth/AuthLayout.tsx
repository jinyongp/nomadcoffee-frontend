import { ReactNode } from 'react';
import styled from 'styled-components';

const LayoutContainer = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundColor};
  gap: 10px;
`;

type AuthLayoutProps = {
  children: ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  return <LayoutContainer>{children}</LayoutContainer>;
}
