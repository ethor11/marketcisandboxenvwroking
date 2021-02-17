import React from "react";
import ReactDOM from "react-dom";
import { Bar } from "react-chartjs-2";

const labels = [
  "Current Year",
  "Next Year",
  "Next 2 Years",
  "Next 3 Years",
  "Next 4 Years",
  "Next 5 Years"
];

const NOPAT = [15, 20, 30, 40, 50, 60];
const reductions = [5, 7, 12, 8, 20, 40];
const fcf = [10, 13, 18, 32, 30, 20];

window.chartColors = {
  red: "rgb(255, 99, 132)",
  orange: "rgb(255, 159, 64)",
  yellow: "rgb(255, 205, 86)",
  green: "rgb(75, 192, 192)",
  blue: "rgb(54, 162, 235)",
  purple: "rgb(153, 102, 255)",
  grey: "rgb(201, 203, 207)"
};

const NOPAT_colour = NOPAT.map((value) =>
  value < 0 ? "rgb(255, 99, 132)" : "rgb(54, 162, 235)"
);

const fcf_colour = fcf.map((value) =>
  value < 0 ? "rgb(255, 99, 132)" : "rgb(75, 192, 192)"
);

const state = {
  labels: labels,
  datasets: [
    {
      label: "NOPAT",
      type: "bar",
      backgroundColor: NOPAT_colour,
      data: NOPAT
    },
    {
      label: "Deductions",
      type: "bar",
      backgroundColor: "rgb(255, 159, 64)",
      data: reductions
    },
    {
      label: "FCF",
      type: "bar",
      backgroundColor: fcf_colour,
      data: fcf
    }
  ]
};

export default class FCFModel extends React.Component {
  render() {
    return (
      <div>
        <Bar
          data={state}
          options={{
            title: {
              display: true,
              text: "Discounted Cash Flow (DCF)",
              fontSize: 15
            },
            responsive: true,
            tooltips: {
              mode: "index",
              intersect: false
            },
            legend: {
              display: true,
              position: "top"
            },
            scales: {
              xAxes: [
                {
                  gridLines: {
                    color: "rgba(0, 0, 0, 0)"
                  }
                }
              ],
              yAxes: [
                {
                  gridLines: {
                    color: "rgba(255, 255, 255, 0.08)"
                  }
                }
              ]
            }
          }}
        />
      </div>
    );
  }
}
ReactDOM.render(<FCFModel />, document.getElementById("forecast"));
