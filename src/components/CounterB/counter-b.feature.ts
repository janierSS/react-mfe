import r2wc from "@r2wc/react-to-web-component";
import CounterB from "./CounterB";

const counterBFeature = r2wc(CounterB);

export default counterBFeature;

customElements.define("counter-b-feature", counterBFeature);
