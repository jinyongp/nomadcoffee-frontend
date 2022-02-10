import { CoffeeShop, useSeeCoffeeShopsQuery } from '@generated';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { SelectedProps } from 'types/styled';

const ListContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 80%;
  margin: 0 auto;
`;

const CoffeeShopContainer = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const PhotoContainer = styled.div`
  width: 200px;
  aspect-ratio: 1;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 3px;
`;

const PhotoList = styled.div`
  display: flex;
  gap: 10px;
  height: 30px;
  justify-content: flex-end;
`;

const SmallPhotoContainer = styled.button<SelectedProps>`
  width: 30px;
  aspect-ratio: 1;
  transition: border-radius 0.2s ease-in-out;
  border-radius: ${({ $selected }) => ($selected ? 50 : 3)}px;
`;

const CoffeeShopInnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CoffeeShopDetails = styled.aside`
  display: flex;
  flex-direction: column;
`;

const CoffeeShopName = styled.h4`
  font-weight: 600;
`;

// const CoffeeShopDeleteButton = styled.button`
//   color: red;
// `;

const CoffeeShopAddButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.accentColor};
`;

const ButtonTitle = styled.h3`
  margin-right: 10px;
  font-weight: 600;
  color: white;
`;

const EmptyContainer = styled.article``;

type MyCoffeeShopListProps = {
  userId: number;
};

type MyCoffeeShopListState = {
  message?: string;
};

export default function MyCoffeeShopList({ userId }: MyCoffeeShopListProps) {
  const location = useLocation<MyCoffeeShopListState>();
  const { data } = useSeeCoffeeShopsQuery({ variables: { items: 30, userId } });
  const coffeeShops = data?.seeCoffeeShops.coffeeShops;

  // TODO: coffeeShop 등록 완료 알림 띄우기
  // location.state.message

  return data?.seeCoffeeShops.coffeeShops?.length ? (
    <ListContainer>
      <CoffeeShopAddButton to="/shop/add" state={{ backgroundLocation: location }}>
        <ButtonTitle>My 커피숍을 추가하고 공유해보세요!</ButtonTitle>
      </CoffeeShopAddButton>
      {coffeeShops?.map((coffeeShop) => (
        <CoffeeShopView key={coffeeShop?.id} coffeeShop={coffeeShop as CoffeeShop} />
      ))}
    </ListContainer>
  ) : (
    <EmptyContainer>Empty</EmptyContainer>
  );
}

type CoffeeShopViewProps = {
  coffeeShop?: CoffeeShop;
};

function CoffeeShopView({ coffeeShop }: CoffeeShopViewProps) {
  const [selectedPhotoId, setSelectedPhotoId] = useState(coffeeShop?.photos[0]?.id);

  return (
    <CoffeeShopContainer>
      <PhotoList>
        {coffeeShop?.photos.slice(0, 10).map((photo, index) => (
          <SmallPhotoContainer
            key={photo?.id}
            $selected={photo?.id === selectedPhotoId}
            onClick={() => setSelectedPhotoId(photo?.id)}
          >
            {index + 1}
          </SmallPhotoContainer>
        ))}
      </PhotoList>
      <CoffeeShopInnerContainer>
        <CoffeeShopDetails>
          <CoffeeShopName>{coffeeShop?.name}</CoffeeShopName>
          {/* <CoffeeShopDeleteButton>삭제</CoffeeShopDeleteButton> */}
        </CoffeeShopDetails>
        <PhotoContainer>
          {coffeeShop?.photos.find((photo) => photo?.id === selectedPhotoId)?.url}
        </PhotoContainer>
      </CoffeeShopInnerContainer>
    </CoffeeShopContainer>
  );
}
