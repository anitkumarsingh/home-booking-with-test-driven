import React from 'react';

const Header = () => {
  return (
    <div>
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
      <div className="m-0 px-4 py-2 container-fluid mw-100 border-bottom container">
        <button
          data-testid="home-type"
          type="button"
          className="text-nowrap mr-4 py-1 btn btn-outline-secondary"
        >
          Home type
        </button>
        <button
          data-testid="date"
          type="button"
          className="text-nowrap mr-4 py-1 btn btn-outline-secondary"
        >
          Date
        </button>
        <button
          data-testid="price"
          type="button"
          className="text-nowrap mr-4 py-1 btn btn-outline-secondary"
        >
          Price
        </button>
        <button
          data-testid="room"
          type="button"
          className="text-nowrap mr-4 py-1 btn btn-outline-secondary"
        >
          Room
        </button>
        <button
          data-testid="amenities"
          type="button"
          className="text-nowrap mr-4 py-1 btn btn-outline-secondary"
        >
          Amenities
        </button>
      </div>
    </div>
  );
};

export default Header;
