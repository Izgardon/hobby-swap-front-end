import React from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";

import { actionCreators, State } from "./State";
import { NavBar } from "./Components";

import {
  HomePage,
  ListingPage,
  ListingsPage,
  MyAccountPage,
  PageNotFound,
} from "./Pages";

function App() {
  const dispatch = useDispatch();

  //Can pass these action creators down the tree to keep abstraction
  const { setUserDetails, setUserError, clearUserDetails, login, logout } =
    bindActionCreators(actionCreators, dispatch);

  //Examples of using state in a component
  const loggedInState = useSelector((state: State) => state.loggedIn);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/myaccount" element={<MyAccountPage />} />
        <Route path="/listing/:listingId" element={<ListingPage />} />
        <Route path="/listings/" element={<ListingsPage />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
