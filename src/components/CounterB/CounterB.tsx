import React from "react";
import logo from "../../assets/react.svg";
import { eventDispatcher } from "../../utils/eventManager";
import styles from "./CounterB.module.scss";

const CounterB: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles["container__header"]}>
        <img src={logo} alt="logo" />
        <h1>React</h1>
      </div>
      <p>When clicked sends windows event</p>
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
