import React from "react";
import logo from '../assets/react.svg'
import styles from "./Counter.module.scss";
import { eventDispatcher } from "../utils/eventManager";

type CounterProps = {
  count: number;  
};

const Counter: React.FC<CounterProps> = ({ count }) => {
  console.log('Counter', count);
  
  return (
    <div className={styles.container}>
      <img src={logo} alt="logo" />
      <h1>React MFE</h1>
      <p>Counter: {count}</p>
      <button onClick={() => eventDispatcher('increment')}>Increment</button>
      <button onClick={() => eventDispatcher('decrement')}>Decrement</button>
    </div>
  );
};

export default Counter;
