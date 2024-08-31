import React from "react";
import style from "./dashboardStyle.module.scss";

export const Dashboard: React.FC = () => {
  return (
    <div>
      <div id={style.graphic_chart}></div>
    </div>
  );
};
