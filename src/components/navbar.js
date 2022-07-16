import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {

  return (
    <div>
      <div>Home Page</div>
      <Link to={"/movies-list"}>
        <div>Movies List</div>
      </Link>
      <Link to={"/liked-list"}>
        <div>Movie List of Liked</div>
      </Link>
      <Link to={"/blocked-list"}>
        <div>Movie List of Blocked</div>
      </Link>
    </div>
  );
}