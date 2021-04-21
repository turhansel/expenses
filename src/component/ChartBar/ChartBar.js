import React from "react";
import "./CharBar.scss";

const ChartBar = (props) => {
  let barfilHeight = "%0";

  if (props.max > 0) {
    barfilHeight = Math.round((props.value / props.maxValue) * 100 + "%");
  }
  return (
    <div className="chart-bar">
      <div className="inner">
        <div
          className="fill"
          style={{ height: barfilHeight, backgroundColor: "red" }}
        ></div>
      </div>
      <div className="label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
