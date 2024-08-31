import React, { FormEvent, MouseEventHandler, useRef, useState } from "react";
import style from "./sidebarStyle.module.scss";
import logoImg from "../../assets/logo.png";
import xImg from "../../assets/x.png";

export const Sidebar: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [isClosed, setIsClosed] = useState(true);

  function handleOnClickMenu(event: FormEvent) {
    event.preventDefault();
    menuRef.current?.classList.toggle(style.open);
    containerRef.current?.classList.toggle(style.container_open);
  }

  return (
    <div id={style.main_container}>
      <div id={style.container_sidebar} ref={containerRef}>
        <aside id={style.sidebar}>
          <img src={logoImg} alt="" />
          <h1>Gestão Financeira</h1>

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
        </aside>
      </div>
      <div id={style.nav_icon} onClick={handleOnClickMenu} ref={menuRef}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {/* <button onClick={handleOnClick}>
        {isClosed ? "Mostrar Barra de Navegação" : "Fechar Barra de Navegação"}
      </button> */}
    </div>
  );
};
