import AllCoffeeShopList from '@components/coffeeShop/AllCoffeeShopList';
import MyCoffeeShopList from '@components/coffeeShop/MyCoffeeShopList';
import Footer from '@components/layout/Footer';
import Header from '@components/layout/Header';
import { fadeIn } from '@components/shared/keyframes';
import Tabs from '@components/shared/Tabs';
import useAuth from '@hooks/useAuth';
import { useState } from 'react';
import styled from 'styled-components';

const MainLayout = styled.main`
  padding: 30px;
`;

const TabContainer = styled.div`
  opacity: 0;
  animation: ${fadeIn()} 1s forwards;
  animation-delay: 0.5s;
`;

export default function HomeScreen() {
  const [selectedTab, setSelectedTab] = useState('all');
  const { data } = useAuth();

  return (
    <MainLayout>
      <Header />
      <TabContainer>
        <Tabs onSelect={(name) => setSelectedTab(name)}>
          <Tabs.Select>
            <Tabs.Option name="all">
              {selectedTab === 'all' ? 'All CoffeeShops' : 'All'}
            </Tabs.Option>
            <Tabs.Option name="my">{selectedTab === 'my' ? 'My CoffeeShops' : 'My'}</Tabs.Option>
          </Tabs.Select>
          <Tabs.Panels>
            <Tabs.Panel name="all">
              <AllCoffeeShopList />
            </Tabs.Panel>
            <Tabs.Panel name="my">
              <MyCoffeeShopList userId={data?.me.user?.id as number} />
            </Tabs.Panel>
          </Tabs.Panels>
        </Tabs>
      </TabContainer>
      <Footer />
    </MainLayout>
  );
}
