import { useState } from "react";

import Header from "./Header";
import SetGradientContainer from "./SetGradientContainer";
import GradientViewer from "./GradientViewer";

import "../styles/App.css";

function App() {
  const [colorArray, setColorArray] = useState([
    "#FFFFFF",
    "#7F7F7F",
    "#000000",
  ]);

  const [gradientRotation, setGradientRotation] = useState(90);

  const [colorLimit, setColorLimit] = useState([0, 50, 100]);

  const [gradientCSS, setGradientCSS] = useState({
    basic: "linear-gradient(150deg, #FFFFFF 0%, #7F7F7F 37%, #000000 100%)",
    moz: "-moz-linear-gradient(150deg, #FFFFFF 0%, #7F7F7F 37%, #000000 100%)",
    webkit:
      "-webkit-linear-gradient(150deg, #FFFFFF 0%, #7F7F7F 37%, #000000 100%)",
  });

  return (
    <div className="App lg:h-screen w-screen bg-color-1">
      <Header />
      <div className="flex lg:justify-evenly w-11/12 m-auto">
        <GradientViewer colorArray={colorArray} gradientCSS={gradientCSS} />
        <SetGradientContainer
          colorArray={colorArray}
          setColorArray={setColorArray}
          setGradientCSS={setGradientCSS}
          gradientRotation={gradientRotation}
          setGradientRotation={setGradientRotation}
          colorLimit={colorLimit}
          setColorLimit={setColorLimit}
        />
      </div>
    </div>
  );
}

export default App;
