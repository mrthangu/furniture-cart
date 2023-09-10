import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../Contexts/ProductsContext';
import './Navy.css';

export default function NavyAlt() {
  const [showBasic, setShowBasic] = useState(false);
  const navigation = useNavigate();

  const { loginStatus, setLoginStatus } = useContext(MyContext);

  return (
    <nav className={`navbar ${showBasic ? 'show' : ''}`}>
      <div className="navbar-brand">Brand</div>

      <button
        className="navbar-toggler"
        onClick={() => setShowBasic(!showBasic)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`collapse navbar-collapse ${showBasic ? 'show' : ''}`}>
        <ul className="navbar-list">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item">
              {loginStatus ? (
                <h1>
                  <button onClick={() => setLoginStatus(!loginStatus)}>
                    Logout
                  </button>
                </h1>
              ) : (
                <li onClick={() => navigation('/Registration')}>
                  Registration
                </li>
              )};
          </li>
          <li className="dropdown-item">
            <a
              className="dropdown-item-link"
              href="#"
              onClick={() => {
                navigation('/HomeFurniture');
              }}
            >
              Home
            </a>
          </li>
          <li className="dropdown-item">
            <a
              className="dropdown-item-link"
              href="#"
              onClick={() => {
                navigation('/OfficeFurniture');
              }}
            >
              Furniture
            </a>
          </li>
        </ul>

        <form className="d-flex input-group w-auto">
          <input
            type="search"
            className="form-control"
            placeholder="Type query"
            aria-label="Search"
          />
          <button className="btn btn-primary">Search</button>
        </form>
      </div>
    </nav>
  );
}
