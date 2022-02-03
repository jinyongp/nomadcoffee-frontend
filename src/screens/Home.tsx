import { isAuthenticatedVar } from '../apollo';

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => isAuthenticatedVar(false)}>Logout</button>
    </div>
  );
}
