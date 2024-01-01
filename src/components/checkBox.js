import React, { useState } from "react";
import checked from "../assets/checked.png";
import notChecked from "../assets/notChecked.png";

const CheckBox = () => {
  const [isChecked, setIsChecked] = useState(false);
  const checkHandler = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div>
      {isChecked ? (
        <img
          src={checked}
          alt="체크됨"
          onClick={checkHandler}
          style={{ cursor: "pointer", margin: "auto" }}
        />
      ) : (
        <img
          src={notChecked}
          alt="체크안함"
          onClick={checkHandler}
          style={{ cursor: "pointer", margin: "auto" }}
        />
      )}
    </div>
  );
};

export default CheckBox;
