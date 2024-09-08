import React, { FormEvent, useRef } from "react";
import style from "./sidebarStyle.module.scss";
import logoImg from "../../assets/logo.png";

export const Sidebar: React.FC = () => {
  return (
    <div id={style.sidebar}>
      <div id={style.sidebar_content}>
        <img src={logoImg} alt="" />
        <h1>Gestão Financeira</h1>

        <div id={style.sidebar_menu_list}>
          <ul>
            <li>
              <a
                href="/"
                onClick={(event) => {
                  event.preventDefault();
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/"
                onClick={(event) => {
                  event.preventDefault();
                }}
              >
                Relatórios
              </a>
            </li>
            <li>
              <a
                href="/"
                onClick={(event) => {
                  event.preventDefault();
                }}
              >
                Gerenciar
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
