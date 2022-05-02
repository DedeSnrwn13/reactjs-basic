import React from "react";
import PropExample from "./../PropExample/index";

const Child = () => {
  return <p>Child Component</p>;
};

function FunctionalBasedComponent() {
  return (
    <div>
      <Child />
      Functional Based Component
      <PropExample flag={false} data="data as props" />
    </div>
  );
}

export default FunctionalBasedComponent;
