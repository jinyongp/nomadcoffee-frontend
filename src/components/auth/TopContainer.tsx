import Brand from '@components/shared/Brand';
import { ContainerBase } from '@components/shared/styled';
import { ReactNode } from 'react';
import styled from 'styled-components';

const TopBox = styled(ContainerBase)`
  display: flex;
  flex-direction: column;
  padding: 60px 40px;
  gap: 60px;
`;

type TopContainerProps = {
  children: ReactNode;
};

export default function TopContainer({ children }: TopContainerProps) {
  return (
    <TopBox>
      <Brand />
      {children}
    </TopBox>
  );
}
