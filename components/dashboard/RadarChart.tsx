import React, { useEffect } from "react";
import Chart from "chart.js/auto";
const RadarChart = () => {
  const dataRadar = {
    labels: [
      "Eating",
      "Drinking",
      "Sleeping",
      "Designing",
      "Coding",
      "Cycling",
      "Running",
    ],
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 90, 81, 56, 55, 40],
        fill: true,
        backgroundColor: "rgba(133, 105, 241, 0.2)",
        borderColor: "rgb(133, 105, 241)",
        pointBackgroundColor: "rgb(133, 105, 241)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(133, 105, 241)",
      },
      {
        label: "My Second Dataset",
        data: [28, 48, 40, 19, 96, 27, 100],
        fill: true,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgb(54, 162, 235)",
        pointBackgroundColor: "rgb(54, 162, 235)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(54, 162, 235)",
      },
    ],
  };

  const configRadarChart = {
    type: "radar",
    data: dataRadar,
    options: {},
  };

  interface Chartprops{
    element:HTMLElement
    prop2:any
  }

  useEffect(() => {
    var charExist = Chart.getChart("chartRadar");
    if(charExist != undefined)
    charExist.destroy()
      new Chart(
          document.getElementById("chartRadar"),
          configRadarChart
          );

          
        },[])
  return (
      <div className="shadow-lg rounded-lg overflow-hidden bg-slate-600 ">
        <canvas className="p-10 text-white" id="chartRadar"></canvas>
      </div>
  );
};

export default RadarChart;
