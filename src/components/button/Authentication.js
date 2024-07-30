import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

const Authentication = () => {
  const { isAuthenticated } = useAuth0();

  const hiddenStyle = {
    display: 'none'
  };

  return (
    <div>
      <div style={!isAuthenticated ? {} : hiddenStyle}>
        <LoginButton />
      </div>
      <div style={isAuthenticated ? {} : hiddenStyle}>
        <LogoutButton />
      </div>
    </div>
  );
};

export default Authentication;
