import React from "react";
import ReactApexChart from "react-apexcharts";

class BarChartApex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Actual",
          data: [
            // {
            //   x: "2011",
            //   y: 1292,
            //   goals: [
            //     {
            //       name: "Expected",
            //       value: 1400,
            //       strokeHeight: 5,
            //       strokeColor: "#775DD0",
            //     },
            //   ],
            // },
            // {
            //   x: "2012",
            //   y: 4432,
            //   goals: [
            //     {
            //       name: "Expected",
            //       value: 5400,
            //       strokeHeight: 5,
            //       strokeColor: "#775DD0",
            //     },
            //   ],
            // },
            // {
            //   x: "2013",
            //   y: 5423,
            //   goals: [
            //     {
            //       name: "Expected",
            //       value: 5200,
            //       strokeHeight: 5,
            //       strokeColor: "#775DD0",
            //     },
            //   ],
            // },
            {
              x: "2014",
              y: 6653,
              goals: [
                {
                  name: "Expected",
                  value: 6500,
                  strokeHeight: 5,
                  strokeColor: "#775DD0",
                },
              ],
            },
            {
              x: "2015",
              y: 8133,
              goals: [
                {
                  name: "Expected",
                  value: 6600,
                  strokeHeight: 13,
                  strokeWidth: 0,
                  strokeLineCap: "round",
                  strokeColor: "#775DD0",
                },
              ],
            },
            {
              x: "2016",
              y: 7132,
              goals: [
                {
                  name: "Expected",
                  value: 7500,
                  strokeHeight: 5,
                  strokeColor: "#775DD0",
                },
              ],
            },
            {
              x: "2017",
              y: 7332,
              goals: [
                {
                  name: "Expected",
                  value: 8700,
                  strokeHeight: 5,
                  strokeColor: "#775DD0",
                },
              ],
            },
            {
              x: "2018",
              y: 6553,
              goals: [
                {
                  name: "Expected",
                  value: 7300,
                  strokeHeight: 2,
                  strokeDashArray: 2,
                  strokeColor: "#775DD0",
                },
              ],
            },
          ],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "bar",
          foreColor: "#ffffff",
        },
        plotOptions: {
          bar: {
            columnWidth: "60%",
          },
        },
        colors: ["#00E396"],
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: true,
          showForSingleSeries: true,
          customLegendItems: ["Actual", "Expected"],
          markers: {
            fillColors: ["#00E396", "#775DD0"],
          },
        },
      },
    };
  }

  render() {
    return (
      <div>
        <h1 className=" text-2xl ml-3 mb-4 pt-4  text-white font-semibold">
          Sale Overview
        </h1>
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="bar"
            height={350}
          />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default BarChartApex;
