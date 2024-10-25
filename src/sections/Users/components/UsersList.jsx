import React, { useEffect, useState } from 'react';
import UsersListItem from './UsersListItem';

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://boolean-uk-api-server.fly.dev/Yumikitsu/contact')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="scroll-container">
      <ul className="users-list">
        {users.map(user => (
          <UsersListItem key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
