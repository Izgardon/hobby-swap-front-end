import { ChangeEvent, useState } from "react";
import React from "react";

interface testProps {}

export const SearchBar = (props: testProps) => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSearch("");
  };

  const updateInput = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setSearch(input);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <label htmlFor="search"></label>
      <input
        id="search"
        type="text"
        className="orange-input"
        onChange={updateInput}
        value={search}
      />
      <input type="submit" className="orange-button" value="Search" />
    </form>
  );
};
