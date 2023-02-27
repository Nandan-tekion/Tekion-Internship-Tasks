import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {

    const valueArr = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaxium = Math.max(...valueArr);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaxium}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
