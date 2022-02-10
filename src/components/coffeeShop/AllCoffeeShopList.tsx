import { CoffeeShop, useSeeCoffeeShopsQuery } from '@generated';
import { useState } from 'react';
import styled from 'styled-components';
import { SelectedProps } from 'types/styled';

const ListContainer = styled.article`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  grid-gap: 20px;
  max-width: 1400px;
  margin: auto;
`;

const CoffeeShopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 10px;
  background-color: white;
  border-radius: 10px;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.borderColor};
`;

const PhotoContainer = styled.div`
  width: 100%;
  aspect-ratio: 1;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 3px;
`;

const PhotoList = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: nowrap;
  width: 50%;
`;

const SmallPhotoContainer = styled.button<SelectedProps>`
  flex: 1;
  aspect-ratio: 1;
  transition: border-radius 0.2s ease-in-out;
  border-radius: ${({ $selected }) => ($selected ? 50 : 3)}px;
`;

const CoffeeShopName = styled.h4`
  font-weight: bolder;
`;

const CoffeeShopOwner = styled.span`
  font-size: 0.85rem;
`;

type AllCoffeeShopListProps = {
  items?: number;
  lastId?: number;
};

export default function AllCoffeeShopList({ items = 10, lastId }: AllCoffeeShopListProps) {
  const { data } = useSeeCoffeeShopsQuery({ variables: { items, lastId } });
  const coffeeShops = data?.seeCoffeeShops.coffeeShops?.filter((coffeeShop) => !coffeeShop?.isMine);
  return data ? (
    <ListContainer>
      {coffeeShops?.map((coffeeShop) => (
        <CoffeeShopView key={coffeeShop?.id} coffeeShop={coffeeShop as CoffeeShop} />
      ))}
    </ListContainer>
  ) : null;
}

type CoffeeShopViewProps = {
  coffeeShop?: CoffeeShop;
};

function CoffeeShopView({ coffeeShop }: CoffeeShopViewProps) {
  const [selectedPhotoId, setSelectedPhotoId] = useState(coffeeShop?.photos[0]?.id);

  return (
    <CoffeeShopContainer>
      <PhotoContainer>
        {coffeeShop?.photos.find((photo) => photo?.id === selectedPhotoId)?.url}
      </PhotoContainer>
      <PhotoList>
        {coffeeShop?.photos.map((photo, index) => (
          <SmallPhotoContainer
            $selected={photo?.id === selectedPhotoId}
            onClick={() => setSelectedPhotoId(photo?.id as number)}
            key={photo?.id}
          >
            {index + 1}
          </SmallPhotoContainer>
        ))}
      </PhotoList>
      <CoffeeShopName>{coffeeShop?.name}</CoffeeShopName>
      <CoffeeShopOwner>{coffeeShop?.user.name}</CoffeeShopOwner>
    </CoffeeShopContainer>
  );
}
