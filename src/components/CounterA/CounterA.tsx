import React from "react";
import logo from "../../assets/react.svg";
import styles from "./CounterA.module.scss";

type CounterAProps = {
  count: number;
};

const CounterA: React.FC<CounterAProps> = ({ count }) => {
  return (
    <div className={styles.container}>
      <div className={styles["container__header"]}>
        <img src={logo} alt="logo" />
        <h1>React</h1>
      </div>
      <p>Counter: {count}</p>
    </div>
  );
};

export default CounterA;
