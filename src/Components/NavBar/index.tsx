import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import { SearchBar, LoginModal } from "../";

import "./navbar.scss";

import { State } from "../../State";

export const NavBar = () => {
  const [modalShow, setModalShow] = useState(false);
  const [registerShow, setRegisterShow] = useState(false);

  let username: string = "Will";

  const loggedIn = useSelector((state: State) => state.loggedIn);

  return (
    <>
      <header className="navbar">
        <NavLink className="logo" to="/">
          {/* <img className="logo-image" src={require("")}></img> */}
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
                    {
                      /* onLogoutButtonClick(); */
                    }
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
        registerShow={registerShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};
