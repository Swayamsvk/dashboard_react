import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

//Graph code

const ChartData = (props) => {
  const [chartData, setChartData] = useState({});
  useEffect(() => {
    getChartData();
  }, []);

  const getChartData = () => {
    // Ajax calls here
    setChartData({
      labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      datasets: [
        {
          label: "Asset balance over these years",
          data: [50, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
          backgroundColor: [
            "#00008B",
            "#00008B",
            "#00008B",
            "#00008B",
            "#00008B",
            "#00008B",
            "#00008B",
            "#00008B",
            "#00008B",
            "#00008B",
          ],
        },
      ],
    });
  };

  return (
    <div className="chart">
      <Bar
        data={chartData}
        options={{
          title: {
            display: true,
            text: "Annual Projection",
            fontSize: 25,
          },
          legend: {
            display: true,
            position: "bottom",
          },
        }}
      />
    </div>
  );
};

export default ChartData;
