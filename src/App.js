import React from "react";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import NearshoreComponent from "./components/NearshoreComponent/NearshoreComponent";
import FeaturesComponent from "./components/FeaturesComponent/FeaturesComponent";
import BottomSectionComponent from "./components/BottomSectionComponent/BottomSectionComponent";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <NearshoreComponent />
      <FeaturesComponent />
      <BottomSectionComponent />
    </div>
  );
}

export default App;
