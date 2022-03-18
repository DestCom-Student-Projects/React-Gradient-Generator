function GradientCSSCode({ gradientCSS }) {
  return (
    <div className="w-full m-auto bg-gray-800 shadow-2xl rounded-lg overflow-hidden">
      <div className="py-3 px-4 flex">
        <div className="rounded-full w-3 h-3 bg-red-500 mr-2"></div>
        <div className="rounded-full w-3 h-3 bg-yellow-500 mr-2"></div>
        <div className="rounded-full w-3 h-3 bg-green-500"></div>
      </div>
      <p className="text-gray-400">Code CSS</p>
      <div className="py-4 px-4 mt-1 text-white text-xl">
        <p className="text-gray-600 text-left text-base">
          {"/* Click on line to copy */"}
        </p>
        <div className="mb-2">
          <p className="text-gray-600 text-left">{"/* Basic : */"}</p>
          <p
            className="cursor-pointer text-left"
            onClick={() => navigator.clipboard.writeText(gradientCSS.basic)}
          >
            <span className="text-blue-400 text-lg">gradient: </span>
            <span className="text-gray-400 text-lg">
              {gradientCSS.basic + ";"}
            </span>
          </p>
          <p className="text-gray-600 text-left">{"/* Safari : */"}</p>
          <p
            className="cursor-pointer text-left"
            onClick={() => navigator.clipboard.writeText(gradientCSS.webkit)}
          >
            <span className="text-blue-400 text-lg">gradient: </span>
            <span className="text-gray-400 text-lg">
              {gradientCSS.webkit + ";"}
            </span>
          </p>
          <p className="text-gray-600 text-left">{"/* Mozilla firefox : */"}</p>
          <p
            className="cursor-pointer text-left"
            onClick={() => navigator.clipboard.writeText(gradientCSS.moz)}
          >
            <span className="text-blue-400 text-lg">gradient: </span>
            <span className="text-gray-400 text-lg">
              {gradientCSS.moz + ";"}
            </span>
          </p>
        </div>

        <div className="mb-2"></div>

        <div className="mb-2"></div>
      </div>
    </div>
  );
}

export default GradientCSSCode;
