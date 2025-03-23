import React from "react";
import logo from "../assets/react.svg";
import { eventDispatcher } from "../utils/eventManager";
import styles from "./Counter.module.scss";

type CounterProps = {
  count: number;
};

const Counter: React.FC<CounterProps> = ({ count }) => {
  console.log("Counter", count);

  return (
    <div className={styles.container}>
      <div className={styles["container__header"]}>
        <img src={logo} alt="logo" />
        <h1>React MFE</h1>
      </div>
      <p>Counter: {count}</p>
      <button onClick={() => eventDispatcher("increment")}>Increment</button>
      <button onClick={() => eventDispatcher("decrement")}>Decrement</button>
    </div>
  );
};

export default Counter;
