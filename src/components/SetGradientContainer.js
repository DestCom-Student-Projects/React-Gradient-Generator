import { useEffect } from "react";

import { hexToRgb } from "../assets/logic/hexToRgb";
import Gradient from "./Gradient";
import Limit from "./Limit";

function SetGradientContainer({
  colorArray,
  setColorArray,
  setGradientCSS,
  setGradientRotation,
  gradientRotation,
  colorLimit,
  setColorLimit,
}) {
  function rgbConstructor(hex) {
    const rgb = hexToRgb(hex);
    return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b})`;
  }

  useEffect(() => {
    setGradientCSS((prev) => {
      const newGradientCSS = { ...prev };
      const secondPart =
        "(" +
        gradientRotation +
        "deg, " +
        rgbConstructor(colorArray[0]) +
        " " +
        colorLimit[0] +
        "%, " +
        rgbConstructor(colorArray[1]) +
        " " +
        colorLimit[1] +
        "%, " +
        rgbConstructor(colorArray[2]) +
        " " +
        colorLimit[2] +
        "%)";
      newGradientCSS.basic = "linear-gradient" + secondPart;
      newGradientCSS.moz = "-moz-linear-gradient" + secondPart;
      newGradientCSS.webkit = "-webkit-linear-gradient" + secondPart;
      return newGradientCSS;
    });
  }, [colorArray, gradientRotation, colorLimit]);

  return (
    <section className="lg:w-3/6 self-center mb-12 lg:mb-0">
      {colorArray.map((color, index) => (
        <Gradient
          key={index}
          color={color}
          setColor={setColorArray}
          index={index}
        />
      ))}
      <div className="lg:w-11/12 m-auto bg-gray-800 shadow-2xl rounded-lg overflow-hidden">
        <p className="text-gray-400">Gradient rotation</p>
        <div className="py-4 px-4 mt-1 text-white text-xl flex justify-evenly">
          <input
            type="range"
            min={0}
            max={360}
            step={1}
            value={gradientRotation}
            onChange={(e) => setGradientRotation(e.target.value)}
            className="form-range w-11/12 h-6 p-0 focus:outline-none focus:ring-0 focus:shadow-none cursor-pointer"
          />
          <input
            className="outline-none bg-transparent placeholder:text-gray-500 text-gray-500 w-1/12 text-center"
            onInput={(e) => {
              if (!e.target.value.match(/^[0-9]*$/)) return;
              if (e.target.value < 0) {
                setGradientRotation(0);
              } else if (e.target.value > 360) {
                setGradientRotation(360);
              } else {
                setGradientRotation(e.target.value);
              }
            }}
            value={gradientRotation}
            placeholder={gradientRotation}
          />
        </div>

        <p className="text-gray-400">Color limit</p>
        {colorLimit.map((limit, index) => (
          <Limit
            key={index}
            limit={limit}
            setColorLimit={setColorLimit}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

export default SetGradientContainer;
