import React from "react";
import PropExample from "./../PropExample/index";

const Child = () => {
  return <p>Child Component</p>;
};

function FunctionalBasedComponent() {
  const parentComponentHandler = () => {
    console.log("Hello from parent component");
  };

  return (
    <div>
      <Child />
      Functional Based Component
      <PropExample
        parentComponentHandler={parentComponentHandler}
        flag={false}
        data="data as props"
      />
    </div>
  );
}

export default FunctionalBasedComponent;
