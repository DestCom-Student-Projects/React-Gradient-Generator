import { useRef } from "react";

import { hexToRgb } from "../assets/logic/hexToRgb.js";
import { rgbToHex } from "../assets/logic/rgbToHex.js";

function Gradient({ color, setColor, index }) {
  const value1Ref = useRef(null);
  const value2Ref = useRef(null);

  return (
    <>
      <div className="lg:w-11/12 m-auto bg-gray-800 shadow-2xl rounded-lg overflow-hidden">
        {index === 0 && (
          <div className="py-3 px-4 flex">
            <div className="rounded-full w-3 h-3 bg-red-500 mr-2"></div>
            <div className="rounded-full w-3 h-3 bg-yellow-500 mr-2"></div>
            <div className="rounded-full w-3 h-3 bg-green-500"></div>
          </div>
        )}
        <p className="text-gray-400">Color {index + 1}</p>
        <div className="py-4 px-4 mt-1 text-white text-xl flex justify-evenly">
          <input
            type={"color"}
            value={color === "none" ? "#FFFFFF" : color}
            onChange={(e) => {
              setColor((prev) => {
                const newColorArray = [...prev];
                newColorArray[index] = e.target.value;
                return newColorArray;
              });
              value1Ref.current.value = e.target.value.toUpperCase();
              value2Ref.current.value =
                hexToRgb(e.target.value).r +
                "," +
                hexToRgb(e.target.value).g +
                "," +
                hexToRgb(e.target.value).b;
            }}
            className="rounded-full w-5/12 h-[20vh] lg:h-colorSelector bg-gray-800 mr-2 cursor-pointer"
          />
          <div>
            <div className="mb-2">
              <span className="text-gray-500">HEX </span>
              <input
                type={"text"}
                defaultValue={
                  color === "none" ? "#FFFFFF" : color.toUpperCase()
                }
                onBlur={(e) => {
                  if (e.target.value.length === 7) {
                    setColor((prev) => {
                      const newColorArray = [...prev];
                      newColorArray[index] = e.target.value;
                      return newColorArray;
                    });
                    value1Ref.current.value = e.target.value.toUpperCase();
                    value2Ref.current.value =
                      hexToRgb(e.target.value).r +
                      "," +
                      hexToRgb(e.target.value).g +
                      "," +
                      hexToRgb(e.target.value).b;
                  } else {
                    value1Ref.current.value = color.toUpperCase();
                    value2Ref.current.value =
                      hexToRgb(color).r +
                      "," +
                      hexToRgb(color).g +
                      "," +
                      hexToRgb(color).b;
                  }
                }}
                ref={value1Ref}
                className="outline-none bg-transparent placeholder:text-gray-500 text-gray-500 border-2 border-gray-500 rounded"
              />
            </div>
            <div className="mb-2">
              <span className="text-gray-500">RGB </span>
              <input
                type={"text"}
                defaultValue={
                  color === "none"
                    ? hexToRgb("#FFFFFF").r +
                      "," +
                      hexToRgb("#FFFFFF").g +
                      "," +
                      hexToRgb("#FFFFFF").b
                    : hexToRgb(color).r +
                      "," +
                      hexToRgb(color).g +
                      "," +
                      hexToRgb(color).b
                }
                ref={value2Ref}
                onBlur={(e) => {
                  if (e.target.value.match(/(\d{1,3}),(\d{1,3}),(\d{1,3})/)) {
                    let r = parseInt(e.target.value.split(",")[0]);
                    let g = parseInt(e.target.value.split(",")[1]);
                    let b = parseInt(e.target.value.split(",")[2]);
                    setColor((prev) => {
                      const newColorArray = [...prev];
                      console.log(r, g, b);
                      newColorArray[index] = rgbToHex(r, g, b);
                      return newColorArray;
                    });
                    value1Ref.current.value = rgbToHex(r, g, b).toUpperCase();
                    value2Ref.current.value = e.target.value;
                  } else {
                    value2Ref.current.value =
                      hexToRgb(color).r +
                      "," +
                      hexToRgb(color).g +
                      "," +
                      hexToRgb(color).b;
                  }
                }}
                className="outline-none bg-transparent placeholder:text-gray-500 text-gray-500 border-2 border-gray-500 rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gradient;
