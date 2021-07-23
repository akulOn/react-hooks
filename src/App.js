import React, { useState, useEffect } from "react";
import Hello from "./Hello";
import { useFetch } from "./useFetch";
import { useForm } from "./useForm";

const App = () => {
  // const [count, setCount] = useState(10);
  // const [count2, setCount2] = useState(20);

  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstName: "",
  });

  const [count, setCount] = useState(JSON.parse(localStorage.getItem("count")));
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  // const [showHello, setShowHello] = useState(true);

  // useEffect(() => {
  //   const onMouseMove = (e) => {
  //     console.log(e);
  //   };
  //   window.addEventListener("mouseover", onMouseMove);

  //   return () => {
  //     window.removeEventListener("mousemove", onMouseMove);
  //   };
  // }, [values.password, values.firstName]); // sve vrednosti od kojih zavisi useEffect

  return (
    <div>
      <div>{loading ? "loading..." : data}</div>
      <div>Count: {count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Counter!</button>
      {/* <button onClick={() => setShowHello(!showHello)}>Show Hello!</button> */}
      {/* {showHello && <Hello />} */}
      {/* <button
        onClick={() => {
          // ...currentState, // cuva prethodno stanje, treba zbog count2
          // count: currentState.count + 1, // menjamo count, ako nemamo prethodno izgubili bi count2
          setCount((countArgument) => countArgument + 1); // countArgument je vrednost prethodnog stanja
          setCount2((count2Argument) => count2Argument + 1);
        }}
      >
        +
      </button>
      <div>Count 1: {count}</div>
      <div>Count 2: {count2}</div> */}
      <div>
        <input
          type="text"
          name="email"
          value={values.email}
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
        />
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={values.firstName}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default App;
