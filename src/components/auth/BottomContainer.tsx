import { ContainerBase } from 'components/styled';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BottomBox = styled(ContainerBase)`
  font-size: 0.9rem;
  text-align: center;
`;

const CTA = styled.span`
  margin-right: 5px;
`;

type BottomContainerProps = {
  cta: string;
  to: string;
  title: string;
};

export default function BottomContainer({ cta, to, title }: BottomContainerProps) {
  return (
    <BottomBox>
      <CTA>{cta}</CTA>
      <Link to={to}>{title}</Link>
    </BottomBox>
  );
}
