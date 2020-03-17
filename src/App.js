import React from "react";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import NearshoreComponent from "./components/NearshoreComponent/NearshoreComponent";
import FeaturesComponent from "./components/FeaturesComponent/FeaturesComponent";
import BottomSectionComponent from "./components/BottomSectionComponent/BottomSectionComponent";
import FooterComponent from "./components/FooterComponent/FooterComponent";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <NearshoreComponent />
      <FeaturesComponent />
      <BottomSectionComponent />
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
