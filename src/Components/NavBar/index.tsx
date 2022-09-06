import React from "react";

import { SearchBar } from "../";

interface HeaderProps {
  buttonText: string;
  count: number;
  //etc
}

export const NavBar = (props: HeaderProps) => {
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
