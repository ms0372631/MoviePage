import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Navbar.css"

export const Navbar = () => {

  return (
    <div className="navbar">
      <Link style={{textDecoration: 'none'}} to="/">
        <div>Home Page</div>
      </Link>
      <Link style={{textDecoration: 'none'}} to="/movies-list">
        <div>Movies List</div>
      </Link>
      <Link style={{textDecoration: 'none'}} to="/liked-list">
        <div>Movie List of Liked</div>
      </Link>
      <Link style={{textDecoration: 'none'}} to="/blocked-list">
        <div>Movie List of Blocked</div>
      </Link>
    </div>
  );
}
