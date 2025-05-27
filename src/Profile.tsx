import { useAuth0 } from '@auth0/auth0-react';
import type { AuthUser } from './types/auth';

export function Profile() {

  const {
    user,
    isAuthenticated,
    loginWithRedirect,
    logout
  } = useAuth0<AuthUser>();

  if (!isAuthenticated) {
    return <button onClick={() => loginWithRedirect()}>Log in</button>;
  }

  return (
    <div>
      <p>Hi, {user?.name}</p>
      <button
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
      >
        Log out
      </button>
    </div>
  );
}
