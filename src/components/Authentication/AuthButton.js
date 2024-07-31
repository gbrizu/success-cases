import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Login from './Login';
import Logout from './Logout';


const AuthButtons = () => {
  const { isAuthenticated } = useAuth0();
  const [token, setToken] = useState(null);

  return (
    <div className='authButtons'>
      {!isAuthenticated ? (
        <Login setToken={setToken} />
      ) : (
        <>
          <Logout/>
          {token && <p>Token: {token}</p>}
        </>
      )}
    </div>
  );
};

export default AuthButtons;
