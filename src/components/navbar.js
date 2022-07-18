import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/navbar.css"

export const Navbar = () => {

  return (
    <div className="navbar">
      <Link to="/">
        <div>Home Page</div>
      </Link>
      <Link to="/movies-list">
        <div>Movies List</div>
      </Link>
      <Link to="/liked-list">
        <div>Movie List of Liked</div>
      </Link>
      <Link to="/blocked-list">
        <div>Movie List of Blocked</div>
      </Link>
    </div>
  );
}