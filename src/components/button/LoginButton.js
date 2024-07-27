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
          localStorage.setItem('accessToken', accessToken); // Guardar el token en localStorage, habría que cambiarlo
          }
      catch (error) {
        console.log('Error: ', error);
      }
    }
  }
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
