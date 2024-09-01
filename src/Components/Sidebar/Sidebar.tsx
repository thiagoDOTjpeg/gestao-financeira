import React, { FormEvent, useRef } from "react";
import style from "./sidebarStyle.module.scss";
import logoImg from "../../assets/logo.png";

export const Sidebar: React.FC = () => {
  const containerSidebar = useRef<HTMLDivElement>(null);
  const menuButton = useRef<HTMLDivElement>(null);

  function handleOnClickMenu(event: FormEvent) {
    event.preventDefault();
    menuButton.current?.classList.toggle(style.open);
    containerSidebar.current?.classList.toggle(style.menu_open);
  }

  return (
    <div id={style.sidebar}>
      <div id={style.nav_icon} onClick={handleOnClickMenu} ref={menuButton}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div id={style.sidebar_content} ref={containerSidebar}>
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

    // <div id={style.main_container}>
    //   <div id={style.container_sidebar} ref={containerRef}>
    //     <aside id={style.sidebar}>
    //       <img src={logoImg} alt="" />
    //       <h1>Gestão Financeira</h1>

    //       <div id={style.menu_list}>

    //       </div>
    //     </aside>
    //   </div>

    // </div>
  );
};
