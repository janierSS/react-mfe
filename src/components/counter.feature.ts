import r2wc from "@r2wc/react-to-web-component";
import Counter from "./Counter";

const counterFeature = r2wc(Counter, {
  props: {
    count: "number",
  },
});

export default counterFeature;

customElements.define("counter-feature", counterFeature);
