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

  // debug
  // setAuthenticated(true);
  const handleLogout = () => {
    //debug
    setAuthenticated(false);
    auth.signOut();
  };

  return (
    <>
      {authenticated && <Navbar onLogout={handleLogout} />}
      {authenticated ? (
        //authenticated
        <Items />
      ) : (
        // not authenticated
        <SignInPage setAuthenticated={setAuthenticated} />
      )}
    </>
  );
}

export default App;
