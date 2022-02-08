import styled from 'styled-components';

const LogoHeader = styled.h1`
  white-space: nowrap;
  font-size: 3rem;
  font-weight: bold;
  color: ${({ theme }) => theme.accentColor};
  letter-spacing: -0.1rem;
  font-family: 'Festive', cursive;
  text-align: center;
`;

export default function Brand() {
  return <LogoHeader>NomadCoffee</LogoHeader>;
}
