import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = () => {
  const data = {
    labels: [
      "Daihatsu Xenia",
      "Toyota Avanza",
      "Mazda 2",
      "Ford Ranger",
      "Mitsubishi Pajero",
      "Suzuki Ertiga",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [16, 19, 3, 5, 10, 15],
        backgroundColor: [
          "#0b03fc",
          "#fc0303",
          "#ff03d5",
          "#fbff00",
          "#00ff4c",
          "#ff8000",
        ],
        borderColor: [
            "#0b03fc",
            "#fc0303",
            "#ff03d5",
            "#fbff00",
            "#00ff4c",
            "#ff8000",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <>
      <div style={{ margin: "50px auto", width: "30%" }}>
        <h2 className="text-center">Daftar Penjualan Mobil Periode Th.2022</h2>
        <Pie data={data} />
      </div>
    </>
  );
};

export default Chart;