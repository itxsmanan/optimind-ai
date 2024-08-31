import React from "react";
import { TEChart } from "tw-elements-react";

export default function ChartPieCustomTooltip() {
  return (
    <TEChart
      type="pie"
      data={{
        labels: [
          // "January",
       
        ],
        datasets: [
          {
            label: "Usage Overview",
            data: [90, ],
            backgroundColor: [
              "#FF6384", // January - Red
            
            ],
            hoverBackgroundColor: [
              "#FF6384", // January - Red
              
            ],
          },
        ],
      }}
      options={{
        plugins: {
          tooltip: {
            callbacks: {
              label: function (context) {
                let label = context.label || "";
                let value = context.formattedValue || 0;
                return `${label}: ${value} `;
              },
            },
          },
        },
      }}
      darkOptions={{
        plugins: {
          tooltip: {
            callbacks: {
              label: function (context) {
                let label = context.label || "";
                let value = context.formattedValue || 0;
                return `${label}: ${value} `;
              },
            },
          },
          legend: {
            labels: { color: "blue" },
          },
        },
      }}
    />
  );
}
