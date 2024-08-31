import React from "react";
import styles from "./gastoMensalStyle.module.scss";
import Chart from "chartjs";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Nubank", "Inter", "Itaú"],
  datasets: [
    {
      label: "R$",
      data: [500, 200, 300],
      backgroundColor: ["Purple", "Orange", "Orange"],
      borderColor: ["Black"],
      borderWidth: 1,
    },
  ],
};

export function GastoMensal() {
  return (
    <div id={styles.gastos}>
      <h2>Gastos Mensais</h2>
      <div id={styles.container_chart}>
        <Doughnut data={data} />
      </div>
    </div>
  );
}
