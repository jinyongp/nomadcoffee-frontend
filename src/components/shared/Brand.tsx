import styled from 'styled-components';

const LogoHeader = styled.h1<BrandProps>`
  white-space: nowrap;
  font-size: ${({ size }) => size};
  font-weight: bold;
  color: ${({ theme }) => theme.accentColor};
  letter-spacing: -0.1rem;
  font-family: 'Festive', cursive;
  text-align: center;
`;

type BrandProps = {
  size?: string | number;
};

export default function Brand({ size = '3rem' }: BrandProps) {
  return <LogoHeader size={size}>NomadCoffee</LogoHeader>;
}
