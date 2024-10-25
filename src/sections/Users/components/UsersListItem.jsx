import React from 'react';

const UsersListItem = ({ user }) => {
  const { firstName, lastName, profileImage, favouriteColor, email } = user;

  return (
    <li className="user-item" style={{ backgroundColor: favouriteColor }}>
      <img src={profileImage} alt={`${firstName} ${lastName}`} />
      <h3>{`${firstName} ${lastName}`}</h3>
      <p>Email: {email}</p>
    </li>
  );
};

export default UsersListItem;
