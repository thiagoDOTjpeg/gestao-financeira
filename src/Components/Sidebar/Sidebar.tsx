import React, { FormEvent, MouseEventHandler, useRef, useState } from "react";
import style from "./sidebarStyle.module.scss";
import logoImg from "../../assets/logo.png";
import xImg from "../../assets/x.png";

export const Sidebar: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isClosed, setIsClosed] = useState(true);

  function handleOnClick(event: FormEvent) {
    event.preventDefault();

    if (isClosed) {
      containerRef.current?.classList.toggle(style.container_open);
      setIsClosed(!isClosed);
    } else {
      setIsClosed(!isClosed);
      containerRef.current?.classList.toggle(style.container_open);
    }
  }

  return (
    <div id="">
      <div id={style.container_sidebar} ref={containerRef}>
        <a href="/" id={style.x_img} onClick={handleOnClick}>
          <img src={xImg} alt="" />
        </a>
        <aside id={style.sidebar}>
          <img src={logoImg} alt="" />
          <h1>Gestão Financeira</h1>

          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Relatórios</a>
            </li>
            <li>
              <a href="/">Gerenciar</a>
            </li>
          </ul>
        </aside>
      </div>
      <button onClick={handleOnClick}>
        {isClosed ? "Mostrar Barra de Navegação" : "Fechar Barra de Navegação"}
      </button>
    </div>
  );
};
