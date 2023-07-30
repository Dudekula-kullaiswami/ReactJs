// src/UserDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useUserContext } from './ UsersList';

const UserDetails = () => {
  const { userId } = useParams();
  const { users } = useUserContext();
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetchUserDetails();
  }, [userId]);

  const fetchUserDetails = () => {
    if (users.length > 0) {
      const user = users[userId];
      setSelectedUser(user);
    }
  };

  if (!selectedUser) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-details">
      <div>ID: {selectedUser.id}</div>
      <div>Full Name: {selectedUser.fullName}</div>
      <img src={selectedUser.avatar} alt="Avatar" />
      <div>Title: {selectedUser.title}</div>
      {/* Display other user details here */}
    </div>
  );
};

export default UserDetails;
