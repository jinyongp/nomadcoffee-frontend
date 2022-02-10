import { useParams } from 'react-router-dom';

export default function EditCoffeeShopScreen() {
  const { id } = useParams();

  return <div>edit coffee shop {id}</div>;
}
