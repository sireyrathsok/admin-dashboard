import React from "react";
import ReactApexChart from "react-apexcharts";

class AreaChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Earnings",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
        {
          name: "Expense",
          data: [11, 32, 45, 32, 34, 52, 41],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "area",
          foreColor: "#ffffff",
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          type: "datetime",
          categories: [
            "16/June",
            "17/June",
            "18/June",
            "19/June",
            "20/June",
            "21/June",
            "22/June",
          ],
        },
      },
    };
  }

  render() {
    return (
      <div className=" ">
        <div id="chart" className="">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="area"
            height={350}
          />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default AreaChart;
