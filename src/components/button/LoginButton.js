import * as React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function LoginButton() {
  const { loginWithRedirect, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [token, setToken] = React.useState(null);

  React.useEffect(() => {
    const fetchToken = async () => {
      if (isAuthenticated) {
        try {
          const accessToken = await getAccessTokenSilently();
          setToken(accessToken);
          console.log('Access Token:', accessToken);

          // Enviar una solicitud al backend con el token
          const response = await fetch('http://20.15.110.189/back', {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${accessToken}`,
              'Content-Type': 'application/json'
            }
          });

          const data = await response.json();
          console.log('Response from backend:', data);
        } catch (error) {
          console.error('Error getting access token', error);
        }
      }
    };

    fetchToken();
  }, [isAuthenticated, getAccessTokenSilently]);

  return (
    <div className='loginButton'>
      <button onClick={() => loginWithRedirect()}>Log In</button>
      {token && <p>Token: {token}</p>}
    </div>
  );
}

export default LoginButton;
