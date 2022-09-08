import React from "react";
import { Routes, Route } from "react-router-dom";

import { NavBar } from "./Components";

import {
  HomePage,
  ListingPage,
  ListingsPage,
  MyAccountPage,
  PageNotFound,
} from "./Pages";

function App() {
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
