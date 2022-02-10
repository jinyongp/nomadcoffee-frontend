import routes from '@constants/routes';
import { useNavigate } from 'react-router-dom';

export default function NotFoundScreen() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Not Found Page</h2>
      <button onClick={() => navigate(routes.abs.home)}>돌아가기</button>
    </div>
  );
}
