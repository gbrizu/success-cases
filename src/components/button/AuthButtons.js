import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

const AuthButtons = () => {
  const { isAuthenticated } = useAuth0();
  const [token, setToken] = useState(null);

  return (
    <div className='authButtons'>
      {!isAuthenticated ? (
        <LoginButton setToken={setToken} />
      ) : (
        <>
          <LogoutButton />
          {token && <p>Token: {token}</p>}
        </>
      )}
    </div>
  );
};

export default AuthButtons;
