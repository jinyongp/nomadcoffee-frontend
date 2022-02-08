import { logoutUser } from 'apollo';

export default function Home() {
  return (
    <div>
      <h1>Welcome</h1>
      <button onClick={() => logoutUser()}>Logout</button>
    </div>
  );
}
