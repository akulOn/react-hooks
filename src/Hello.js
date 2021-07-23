import React, { useEffect } from "react";

const Hello = () => {
  useEffect(() => {
    console.log("log");

    return () => {
      console.log("unmount");
    };
  }, []);

  return <div>Hello!</div>;
};

export default Hello;
