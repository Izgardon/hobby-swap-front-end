import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import { SearchBar } from "../";
import "./navbar.scss";

import { State } from "../../State";

export const NavBar = () => {
  const loggedIn = useSelector((state: State) => state.loggedIn);

  return (
    <>
      <header className="navbar">
        {/* -----mobile stuff
        <button
          className="mobile-nav-button no-select"
          aria-controls="nav-items"
          aria-expanded="false"
          data-open="false"
        >
          <span className="sr-only">Menu</span> 
        </button>*/}
        <NavLink className="logo" to="/">
          <img className="logo-image" src={require("")}></img>
        </NavLink>
        <nav>
          <ul id="nav-items" className="nav-items" data-visible="false">
            <div>
              <NavLink
                className="link"
                style={({ isActive }) => ({
                  color: isActive ? "white" : "",
                })}
                to="/"
              >
                Home
              </NavLink>
            </div>
            <div>
              <NavLink
                className="link"
                style={({ isActive }) => ({
                  color: isActive ? "white" : "",
                  borderBottom: isActive ? "4px solid white" : "",
                })}
                to="/books"
              >
                Books
              </NavLink>
            </div>
            <div>
              <NavLink
                className="link"
                style={({ isActive }) => ({
                  color: isActive ? "white" : "",
                  borderBottom: isActive ? "4px solid white" : "",
                })}
                to="/forums"
              >
                Forum
              </NavLink>
            </div>
            <div>
              {!loggedIn ? (
                <a
                  className="link"
                  onClick={() => {
                    setModalShow(true);
                    setRegisterShow(false);
                  }}
                >
                  Sign In
                </a>
              ) : (
                <NavLink
                  className="link"
                  style={({ isActive }) => ({
                    color: isActive ? "white" : "",
                    borderBottom: isActive ? "4px solid white" : "",
                  })}
                  to={{
                    pathname: "/profile/" + username,
                  }}
                >
                  Profile
                </NavLink>
              )}
            </div>
            <div>
              {!loggedIn ? (
                <a
                  className="link"
                  onClick={() => {
                    setModalShow(true);
                    setRegisterShow(true);
                  }}
                >
                  Sign Up
                </a>
              ) : (
                <NavLink
                  className="link"
                  onClick={() => {
                    setRegisterShow(false);
                    onLogoutButtonClick();
                  }}
                  to="/"
                >
                  Sign Out
                </NavLink>
              )}
            </div>
          </ul>
        </nav>
      </header>
      <LoginModal
        show={modalShow}
        registershow={registerShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};
