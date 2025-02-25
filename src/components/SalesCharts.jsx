import React ,{useState}from 'react'
import ReactApexChart from "react-apexcharts";
import {
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    
  } from "recharts";

const SalesCharts = () => {


    const data = [
        { name: "Jan", sales: 4000 },
        { name: "Feb", sales: 3000 },
        { name: "Mar", sales: 5000 },
        { name: "Apr", sales: 2000 },
        { name: "May", sales: 6000 },
        { name: "June", sales: 8000 },
        { name: "July", sales: 5000 },
        { name: "Aug", sales: 3000 },
        { name: "Sep", sales: 8000 },
        { name: "Oct", sales: 4000 },
        { name: "Nov", sales: 7000 },
        { name: "Dec", sales: 4000 },
      ];








    const [activeIndex, setActiveIndex] = useState(9);

    const handleClick = (data, index) => {
      setActiveIndex(index);
    };
  
    const [options, setOptions] = useState({
      plotOptions: {
        pie: {
          donut: {
            size: "65%", // Adjust the overall size of the donut chart
            labels: {
              show: true,
              total: {
                show: true,
                label: "Total New Customers",
                color: "#000",
                formatter: function (w) {
                  return w.globals.seriesTotals.reduce((a, b) => {
                    return a + b;
                  }, 0);
                },
              },
            },
          },
        },
      },
      fill: {
        type: "gradient",
      },
      legend: {
        show: false, // Set to false to remove the legend
      },
      dataLabels: {
        enabled: false, // Set to false to remove data labels
      },
    });
  
    const [series, setSeries] = useState([13, 30]);


    
  return (
    <div className="charts">
    <div className="bar-chart">
      <div className="inner-info">
        <div>
          <p className="info-first">Overview</p>
          <p className="info-sec">Monthly Earning</p>
        </div>
        <div>
          <p className="info-thr">Quarterly v</p>
        </div>
      </div>

      <div className="bar-style">
        <ResponsiveContainer width="100%" height={230}>
          <BarChart width={500} height={300} data={data} fill="transparent">
            <CartesianGrid
              strokeDasharray="3 3"
              fill="none"
              style={{ display: "none" }}
            />
            <XAxis
              dataKey="name"
              axisLine={{ display: "none" }}
              tickLine={false}
            />
            <YAxis hide="true" />
            <Tooltip />

            <Bar dataKey="sales" onClick={handleClick}>
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  cursor="pointer"
                  fill={index === activeIndex ? "#5a32ea" : "#f2efff"}
                  radius={[5, 5, 5, 5]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>

    {/*/------------------------------*/}
    <div className="chart-wrap">
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="donut"
          width={380}
        />
      </div>
    </div>
    {/*/------------------------------*/}
  </div>
  )
}

export default SalesCharts
