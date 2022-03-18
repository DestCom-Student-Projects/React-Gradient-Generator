import GradientDisplay from "./GradientDisplay";
import GradientCSSCode from "./GradientCSSCode";

function GradientViewer({ colorArray, gradientCSS }) {
  return (
    <section className="lg:w-3/6 self-center mb-6 lg:mb-0">
      <GradientDisplay colorArray={colorArray} gradientCSS={gradientCSS} />
      <GradientCSSCode gradientCSS={gradientCSS} />
    </section>
  );
}

export default GradientViewer;
