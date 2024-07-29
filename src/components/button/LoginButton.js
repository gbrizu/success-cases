<<<<<<< Updated upstream
import React from 'react';
=======
import React, { useEffect, useState } from 'react';
>>>>>>> Stashed changes
import { useAuth0 } from '@auth0/auth0-react';

function LoginButton() {
  const { loginWithRedirect, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [token, setToken] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      if (isAuthenticated) {
        try {
          const accessToken = await getAccessTokenSilently();
          setToken(accessToken);
<<<<<<< Updated upstream
          localStorage.setItem('accessToken', accessToken); // Guardar el token en localStorage, habría que cambiarlo
=======
          localStorage.setItem('accessToken', accessToken);
          console.log('Access Token:', accessToken);

          // Verificar si el token se guardó en localStorage
          const storedToken = localStorage.getItem('accessToken');
          if (storedToken) {
            console.log('Token saved in localStorage:', storedToken);
          } else {
            console.log('Failed to save token in localStorage');
          }

          // Enviar una solicitud al backend con el token
          const response = await fetch('http://localhost:3000', {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${accessToken}`,
              'Content-Type': 'application/json'
            }
          });

          const data = await response.json();
          console.log('Response from backend:', data);
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    <div className="loginButton">
      <button
        style={buttonStyle}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)}
        onClick={() => loginWithRedirect()}
      >
        Log  In
      </button>
      {token && <p>Token: {token}</p>}
=======
    <div className='loginButton'>
      {!isAuthenticated && <button onClick={() => loginWithRedirect()}>Log In</button>}
      {isAuthenticated && token && <p>Token: {token}</p>}
>>>>>>> Stashed changes
    </div>
  );
}

export default LoginButton;
