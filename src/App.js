import React from "react";
import ShowInterior from "./components/ShowInterior";
import InteriorList from "./components/InteriorList";
import MainNavigation from "./components/Layout/MainNavigation";
import RootLayout from "./pages/RootLayout";

function App() {
  return (
    <div>
      <h1>DESIGN your House</h1>
      <RootLayout />
    </div>
  );
}

export default App;