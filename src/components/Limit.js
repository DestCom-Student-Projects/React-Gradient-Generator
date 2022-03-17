function Limit({ limit, setColorLimit, index }) {
  return (
    <div className="py-4 px-4 mt-1 text-white text-xl flex justify-evenly">
      <p className="text-gray-400 text-sm">Color {index}</p>
      <input
        type="range"
        min={0}
        max={100}
        step={1}
        value={limit}
        onChange={(e) =>
          setColorLimit((prev) => {
            const newColorLimit = [...prev];
            newColorLimit[index] = e.target.value;
            return newColorLimit;
          })
        }
        className="form-range w-11/12 h-6 p-0 focus:outline-none focus:ring-0 focus:shadow-none"
      />
      <input
        className="outline-none bg-transparent placeholder:text-gray-500 text-gray-500 w-1/12 text-center"
        onInput={(e) => {
          if (e.target.value === "") {
            setColorLimit((prev) => {
              const newColorLimit = [...prev];
              newColorLimit[index] = 50;
              return newColorLimit;
            });
          } else if (e.target.value > 100) {
            setColorLimit((prev) => {
              const newColorLimit = [...prev];
              newColorLimit[index] = 100;
              return newColorLimit;
            });
          } else {
            setColorLimit((prev) => {
              const newColorLimit = [...prev];
              newColorLimit[index] = e.target.value;
              return newColorLimit;
            });
          }
        }}
        value={limit}
        placeholder={limit}
      />
    </div>
  );
}

export default Limit;
