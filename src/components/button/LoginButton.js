import React from 'react';
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
        } catch (error) {
          console.log('Error: ', error);
        }
      }
    };
    fetchToken();
  }, [isAuthenticated, getAccessTokenSilently]);

  const buttonStyle = {
    backgroundColor: '#C0D732',
    color: 'black',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
     width: '5.5rem'
  };

  const buttonHoverStyle = {
    backgroundColor: '#005bb5',
  };

  return (
    <div className="loginButton">
      <button
        style={buttonStyle}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)}
        onClick={() => loginWithRedirect()}
      >
        Log  In
      </button>
      
    </div>
  );
}

export default LoginButton;
