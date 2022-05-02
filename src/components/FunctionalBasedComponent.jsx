import React from "react";

const Child = () => {
  return <p>Child Component</p>;
};

function FunctionalBasedComponent() {
  return (
    <div>
      <Child />
      Functional Based Component
    </div>
  );
}

export default FunctionalBasedComponent;
