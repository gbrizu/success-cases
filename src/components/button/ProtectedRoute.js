// ProtectedRoute.js
import React from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import Loading from './Loading';


const ProtectedRoute = ({ component, ...args }) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <Loading />,
  });
  
  return <Component {...args} />;
};

export default ProtectedRoute;
