import React from "react";
import ReactApexChart from "react-apexcharts";

class PieChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [330, 230, 760, 330],

      options: {
        chart: {
          width: 380,
          type: "donut",
          foreColor: "#ffffff",
        },

        dataLabels: {
          enabled: true,
          name: {},
          value: {},
          total: {},
        },

        tooltip: {
          enabled: true,
          y: {
            formatter: undefined,
            title: {
              formatter: (seriesName) => "Sales :",
            },
          },
        },

        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 500,
              },
              legend: {
                show: true,
              },
            },
          },
        ],
        // legend: {
        //   position: "right",
        //   offsetY: 0,
        //   height: 230,
        //   labels: {
        //     formatter: function (val, opts) {
        //       return "Roth:" + val;
        //     },
        //   },
        // },
        legend: {
          position: "bottom",
          offsetX: 0,
          height: 0,
          width: 0,
          customLegendItems: ["2019", "2020", "2021", "2022"],
          labels: {
            // Customize the text of legend items here
            formatter: function (val, opts) {
              return "Custom Legend: " + opts;
            },
          },
        },
      },
    };
  }

  //   appendData() {
  //     var arr = this.state.series.slice();
  //     arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1);

  //     this.setState({
  //       series: arr,
  //     });
  //   }

  //   removeData() {
  //     if (this.state.series.length === 1) return;

  //     var arr = this.state.series.slice();
  //     arr.pop();

  //     this.setState({
  //       series: arr,
  //     });
  //   }

  //   randomize() {
  //     this.setState({
  //       series: this.state.series.map(function () {
  //         return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  //       }),
  //     });
  //   }

  //   reset() {
  //     this.setState({
  //       series: [44, 55, 13, 33],
  //     });
  //   }
  render() {
    return (
      <div className="  flex justify-center pb-10 overflow-x-hidden overflow-y-hidden ">
        <div>
         <p className=" mt-6 sm:mt-2   text-white text-3xl font-lato font-extrabold flex justify-center  ">Sale Overview</p>
          <div className="chart-wrap mt-10 min-h-screen">
            <div id="chart">
              <ReactApexChart
                options={this.state.options}
                series={this.state.series}
                type="donut"
                width={680}
              />
            </div>
          </div>

          {/* <div class="actions">
            <button onClick={() => this.appendData()}>+ ADD</button>

            <button onClick={() => this.removeData()}>- REMOVE</button>

            <button onClick={() => this.randomize()}>RANDOMIZE</button>

            <button onClick={() => this.reset()}>RESET</button>
          </div> */}
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default PieChart;
