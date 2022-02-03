import { isAuthenticatedVar } from '../apollo';

export default function Login() {
  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => isAuthenticatedVar(true)}>Login</button>
    </div>
  );
}
