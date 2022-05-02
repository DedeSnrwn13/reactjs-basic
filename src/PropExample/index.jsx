import React from "react";

const PropExample = (props) => {
  console.log(props);
  const { flag, data } = props;
  return (
    <div>
      {flag ? data : "flag is false"}
      Prop example component
    </div>
  );
};

export default PropExample;
