import styled from 'styled-components';

const FooterContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;

const Copyright = styled.span``;

const NewTabLink = styled.a``;

export default function Footer() {
  return (
    <FooterContainer>
      <Copyright>
        Created by{' '}
        <NewTabLink href="https://github.com/jinyongp" target="_blank" rel="noopener">
          @jinyongp
        </NewTabLink>{' '}
        with{' '}
        <NewTabLink href="https://nomadcoders.co/challenges" target="_blank" rel="noopener">
          NomadCoders Challenge
        </NewTabLink>{' '}
      </Copyright>
    </FooterContainer>
  );
}
