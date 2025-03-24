import r2wc from "@r2wc/react-to-web-component";
import CounterA from "./CounterA";

const counterAFeature = r2wc(CounterA, {
  props: {
    count: "number",
  },
});

export default counterAFeature;

customElements.define("counter-a-feature", counterAFeature);
