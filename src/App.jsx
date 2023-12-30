import { useEffect } from "react";
import React, { useState } from "react";
import Filters from "./Components/Filters";
import Item from "./Components/Item";
import Items from "./Components/Items";
import Navbar from "./Components/Navbar";
import SignInPage from "./signinPage";
import { auth } from "./firebase_auth";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  // For debugging purposes, set authentication status to true
  // Remove or comment out the line below when you want to implement actual authentication logic
  // setAuthenticated(true);
  const handleLogout = () => {
    // For debugging purposes, set authentication status to false on logout
    setAuthenticated(false);
    auth.signOut();
  };

  return (
    <>
      {authenticated && <Navbar onLogout={handleLogout} />}
      {authenticated ? (
        // Render the main content when authenticated
        <Items />
      ) : (
        // Render the sign-in page when not authenticated
        <SignInPage setAuthenticated={setAuthenticated} />
      )}
    </>
  );
}

export default App;
