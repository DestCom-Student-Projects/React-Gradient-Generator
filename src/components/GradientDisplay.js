import { useEffect, useRef } from "react";

function GradientDisplay({ colorArray, gradientCSS }) {
  let displayRef = useRef();

  useEffect(() => {
    displayRef.current.style.background = gradientCSS.basic;
  }, [gradientCSS]);

  return (
    <div className="bg-gray-800 shadow-2xl rounded-lg overflow-hidden mb-12">
      <div className="py-3 px-4 flex">
        <div className="rounded-full w-3 h-3 bg-red-500 mr-2"></div>
        <div className="rounded-full w-3 h-3 bg-yellow-500 mr-2"></div>
        <div className="rounded-full w-3 h-3 bg-green-500"></div>
      </div>
      <p className="text-gray-400">Preview</p>
      <div
        className={
          "w-11/12 m-auto h-1/4 rounded border-2 border-gray-800 overflow-hidden mb-2"
        }
        ref={displayRef}
      ></div>
    </div>
  );
}

export default GradientDisplay;
