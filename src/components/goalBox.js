import React from "react";
import CheckBox from "./checkBox";

const GoalBox = ({ content }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          fontSize: "1.2rem",
        }}
      >
        <CheckBox />
        <p style={{ margin: "auto 0 auto 8px", opacity: "0.8" }}>{content}</p>
      </div>
    </>
  );
};

export default GoalBox;
