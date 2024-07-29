import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';


const LogoutButton = () => {
    const { logout } = useAuth0();

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
        <button 
        style={buttonStyle}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)}
        onClick={() => {  
            localStorage.removeItem('accessToken')
            logout({ returnTo: window.location.origin })
        }}>
            Logout
        </button>
    );
};

export default LogoutButton;
