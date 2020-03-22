import React from "react";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
// import NearshoreComponent from "./components/NearshoreComponent/NearshoreComponent";
import FeaturesComponent from "./components/FeaturesComponent/FeaturesComponent";
import BottomSectionComponent from "./components/BottomSectionComponent/BottomSectionComponent";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import SliderSection from "./components/SliderSection/SliderSection";





function App() {
  return (
    <div className="App">


      <HeaderComponent />
      <facebookSquare color='red' size='15rem' />
      <FeaturesComponent />
      <BottomSectionComponent />
      <SliderSection></SliderSection>
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
