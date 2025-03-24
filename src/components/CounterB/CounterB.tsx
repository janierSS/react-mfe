import React from "react";
import logo from "../../assets/react.svg";
import { eventDispatcher } from "../../utils/eventManager";
import styles from "./CounterB.module.scss";

const CounterB: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles["container__header"]}>
        <img src={logo} alt="logo" />
        <h1>React MFE</h1>
      </div>
      <div className={styles["container__buttons"]}>
        <button onClick={() => eventDispatcher("increment-b")}>
          Increment
        </button>
        <button onClick={() => eventDispatcher("decrement-b")}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default CounterB;
