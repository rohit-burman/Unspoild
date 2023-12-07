import { useEffect } from "react";
import Filters from "./Components/Filters";
import Item from "./Components/Item";
import Items from "./Components/Items";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Filters />
      <Items />
    </>
  );
}

export default App;
