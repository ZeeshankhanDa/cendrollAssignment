import React, { useState } from "react";

import "./Rectangle.css";

export const Rectangle = () => {
  const [RecValue, setRecValue] = useState({ color: "", width: "200px" });
  return (
    <div className="Rec-Container">
      <h4>task 1</h4>
      <div
        className="Rectangle"
        style={{ backgroundColor: RecValue.color, width: RecValue.width }}
      >
        <h6> Rectangle width : {RecValue.width}</h6>
      </div>
      <div className="Rec-inp">
        <div>
          <label htmlFor="color"> Color : </label>
          <input
            id="color"
            type="color"
            className="color-inp"
            onChange={(e) =>
              setRecValue({ ...RecValue, color: e.target.value })
            }
          />
        </div>
        <input
          type="number"
          id="width"
          placeholder="enter width in number only"
          onChange={(e) =>
            setRecValue({ ...RecValue, width: `${e.target.value}px` })
          }
          className="width-inp"
        />
      </div>
    </div>
  );
};
