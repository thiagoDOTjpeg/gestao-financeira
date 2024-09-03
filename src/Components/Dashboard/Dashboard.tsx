import React from "react";
import style from "./dashboardStyle.module.scss";

export const Dashboard: React.FC = () => {
  return (
    <div id={style.chart_container}>
      <div id={style.graphic_chart} className={style.income}>
        <h2>Entradas</h2>
        <p>R$: XXXX.XX</p>
      </div>
      <div id={style.graphic_chart} className={style.outcome}>
        <h2>Saídas</h2>
        <p>R$: XXXX.XX</p>
      </div>
      <div id={style.graphic_chart} className={style.balance}>
        <h2>Saldo Mensal</h2>
        <p>R$: XXXX.XX</p>
      </div>

      <div id={style.chart}></div>
      <div id={style.chart}></div>
    </div>
  );
};
