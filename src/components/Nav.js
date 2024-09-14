import React from 'react';

const Nav = () => {
  return (
    <div className="Nav">
      <ul>
        <li><a href="#" /*eslint-disable-line jsx-a11y/anchor-is-valid */>Home</a></li>
        <li><a href="#" /*eslint-disable-line jsx-a11y/anchor-is-valid */>About</a></li>
        <li><a href="#" /*eslint-disable-line jsx-a11y/anchor-is-valid */>Menu</a></li>
        <li><a href="#" /*eslint-disable-line jsx-a11y/anchor-is-valid */>Reservations</a></li>
        <li><a href="#" /*eslint-disable-line jsx-a11y/anchor-is-valid */>Order Online</a></li>
        <li><a href="#" /*eslint-disable-line jsx-a11y/anchor-is-valid */>Login</a></li>
      </ul>
    </div>
  );
};

export default Nav;
