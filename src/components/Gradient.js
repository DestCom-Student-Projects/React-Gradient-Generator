import { hexToRgb } from "../assets/logic/hexToRgb.js";

function Gradient({ color, setColor, index }) {
  return (
    <>
      <div className="w-11/12 m-auto bg-gray-800 shadow-2xl rounded-lg overflow-hidden">
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
            onChange={(e) =>
              setColor((prev) => {
                const newColorArray = [...prev];
                newColorArray[index] = e.target.value;
                return newColorArray;
              })
            }
            className="rounded-full w-5/12 h-colorSelector bg-gray-800 mr-2"
          />
          <div>
            <div className="mb-2">
              <span className="text-gray-500">HEX </span>
              <input
                type={"text"}
                defaultValue={
                  color === "none" ? "#FFFFFF" : color.toUpperCase()
                }
                /* onBlur={(e) =>
                setColor((prev) => {
                  const newColorArray = [...prev];
                  newColorArray[index] = e.target.value;
                  return newColorArray;
                })
              } */
                className="outline-none bg-transparent placeholder:text-gray-500 text-gray-500 border-2 border-gray-500 rounded"
              />
            </div>
            <div className="mb-2">
              <span className="text-gray-500">RGB </span>
              <input
                type={"text"}
                value={
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
