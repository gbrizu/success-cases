// UserProfile.js
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import Authentication from './button/Authentication';

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  padding: 10px; /* Reducido de 20px a 10px */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 300px; /* Reducido de 400px a 300px */
  margin: auto;
  margin-top: 10px; /* Reducido de 20px a 10px */
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 100px; /* Reducido de 150px a 100px */
  height: 100px; /* Reducido de 150px a 100px */
  margin-bottom: 10px; /* Reducido de 20px a 10px */
`;

const ProfileName = styled.h2`
  font-size: 20px; /* Reducido de 24px a 20px */
  font-weight: bold;
  color: #00a859; /* Color verde utilizado en Globant */
  margin-bottom: 8px; /* Reducido de 10px a 8px */
`;

const ProfileEmail = styled.p`
  font-size: 16px; /* Reducido de 18px a 16px */
  color: #666666;
  margin-bottom: 15px; /* Reducido de 20px a 15px */
`;

const ProfileData = styled.pre`
  text-align: left;
  font-size: 12px; /* Reducido de 14px a 12px */
  background-color: #f0f0f0;
  padding: 8px; /* Reducido de 10px a 8px */
  border-radius: 5px;
  width: 100%;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const UserProfile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <ProfileContainer>
        <ProfileImage src={user.picture} alt={user.name} />
        <ProfileName>{user.name}</ProfileName>
        <ProfileEmail>{user.email}</ProfileEmail>
        <Authentication/>
      </ProfileContainer>
    )
  );
};

export default UserProfile;
