import React from "react";
import ReactApexChart from "react-apexcharts";

class ColumChartApex extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          name: 'Net Profit',
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        }, {
          name: 'Revenue',
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        }, {
          name: 'Free Cash Flow',
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }],
        options: {
          chart: {
            type: 'bar',
            height: 350,
            foreColor:"#ffffff"
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '55%',
              endingShape: 'rounded'
            },
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
          },
          xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
          },
          yaxis: {
            title: {
              text: '$ (thousands)'
            }
          },
          fill: {
            opacity: 1
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return "$ " + val + " thousands"
              }
            }
          },
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: {
                  height: 400,
                },
                legend: {
                  show: true,
                },
              },
            },
          ],
        },
      
      
      };
    }

  

    render() {
      return (
        <div className=" mt-20 sm:mt-0 xl:mt-8 min-h-screen overflow-auto px-4">
          <div id="chart">
            <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={600} />
          </div>
          <div id="html-dist"></div>
        </div>
      );
    }
  }

  export default ColumChartApex