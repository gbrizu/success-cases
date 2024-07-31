import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Login from './Login';
import Logout from './Logout';

const AuthenticationModel = () => {
  const { isAuthenticated } = useAuth0();

  const hiddenStyle = {
    display: 'none'
  };

  return (
    <div>
      <div style={!isAuthenticated ? {} : hiddenStyle}>
        <Login />
      </div>
      <div style={isAuthenticated ? {} : hiddenStyle}>
        <Logout />
      </div>
    </div>
  );
};

export default AuthenticationModel;
