import GradientDisplay from "./GradientDisplay";
import GradientCSSCode from "./GradientCSSCode";

function GradientViewer({ colorArray, gradientCSS }) {
  return (
    <section className="w-3/6 self-center">
      <GradientDisplay colorArray={colorArray} gradientCSS={gradientCSS} />
      <GradientCSSCode gradientCSS={gradientCSS} />
    </section>
  );
}

export default GradientViewer;
