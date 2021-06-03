import React from 'react';

const Header = () => {
  return (
    <nav className="py-3 border-bottom navbar navbar-expand navbar-light">
      <a data-testid="logo" href="/" className="navbar-brand">
        <img src="logo192.png" alt="logo" width="40" />
      </a>
      <form data-testid="search" className="mr-auto w-50 form-inline">
        <input
          placeholder="Search homes"
          type="text"
          className="w-50 form-control"
        />
      </form>
      <div data-testid="menu" className="ml-auto text-uppercase navbar-nav">
        <a href="/" className="nav-link">
          Become a host
        </a>
        <a href="/" className="nav-link">
          Help
        </a>
        <a href="/" className="nav-link">
          Sign Up
        </a>
        <a href="/" className="nav-link">
          Login
        </a>
      </div>
    </nav>
  );
};

export default Header;
