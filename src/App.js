import React from "react";
import ShowInterior from "./components/ShowInterior";
import InteriorList from "./components/InteriorList";
import MainNavigation from "./components/Layout/MainNavigation";

function App() {
  return (
    <div>
      {/* <ShowInterior/> */}
      <h1>DESIGN your House</h1>
      <MainNavigation />
      <InteriorList />
    </div>
  );
}

export default App;
