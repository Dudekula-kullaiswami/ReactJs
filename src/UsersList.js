// src/UsersList.js
import React, { useState, useEffect, createContext, useContext } from 'react';
import { Link } from 'react-router-dom';

const UserContext = createContext();

const UsersList = () => {
  const [users, setUsers] = useState([]);

  // Replace 'apiEndpoint' with the actual API endpoint that fetches user data
  useEffect(() => {
    fetchUsersFromAPI();
  }, []);

  const fetchUsersFromAPI = async () => {
    try {
      // Replace 'numCircles' with the number of circles obtained from page 1
      const numCircles = 6; // Replace this with your actual value
      const response = await fetch(`apiEndpoint/users?limit=${numCircles}`);
      const data = await response.json();
      setUsers(data); // Assuming the API returns an array of users
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  return (
    <div className="grid-container">
      {users.map((user, index) => (
        <Link key={user.id} to={`/users/${index}`}>
          <div className="card">
            <div>ID: {user.id}</div>
            <div>Full Name: {user.fullName}</div>
            <img src={user.avatar} alt="Avatar" />
            <div>Title: {user.title}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export const useUserContext = () => useContext(UserContext);

export default UsersList;
