import Brand from '@components/shared/Brand';
import { fadeIn } from '@components/shared/keyframes';
import useAuth from '@hooks/useAuth';
import styled from 'styled-components';

const HeaderContainer = styled.section`
  padding: 30px 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

const BrandContainer = styled.div``;

const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Welcome = styled.span`
  font-weight: 600;
  text-align: center;
  transition: transform;
  animation: ${fadeIn()} 1s;
`;

export default function Header() {
  const { data } = useAuth();

  return (
    <HeaderContainer>
      <BrandContainer>
        <Brand size="5rem" />
      </BrandContainer>
      <NavigationContainer>
        {data && <Welcome>환영합니다, {data.me.user?.name || data.me.user?.username}님!</Welcome>}
      </NavigationContainer>
    </HeaderContainer>
  );
}
