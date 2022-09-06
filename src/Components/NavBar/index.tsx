import React from "react";

import { SearchBar } from "../";
import "./navbar.scss";

interface HeaderProps {
  buttonText: string;
  count: number;
  //etc
}

export const NavBar = () => {
  return (
    <div className="navbar">
      <SearchBar />
      <ul>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};
