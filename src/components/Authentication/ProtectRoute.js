// ProtectedRoute.js
import React from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import LoadingModel from './LoadingModel';


const ProtectRoute = ({ component, ...args }) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <LoadingModel/>,
  });
  
  return <Component {...args} />;
};

export default ProtectRoute;
