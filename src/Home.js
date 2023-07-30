// src/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  // Replace this value with the number of circles you want to display
  const numCircles = 6;

  return (
    <div className="home-container">
      {[...Array(numCircles)].map((_, index) => (
        <Link key={index} to={`/users/${index}`}>
          <div className="circle">{index}</div>
        </Link>
      ))}
    </div>
  );
};

export default Home;
