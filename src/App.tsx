import { FormEvent, useRef } from "react";
import { Dashboard } from "./Components/Dashboard/Dashboard";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import style from "./css/appStyle.module.scss";

function App() {
  const menuButton = useRef<HTMLDivElement>(null);
  const sidebarDiv = useRef<HTMLDivElement>(null);

  function handleOnClickMenu(event: FormEvent) {
    event.preventDefault();
    menuButton.current?.classList.toggle(style.open);
    sidebarDiv.current?.classList.toggle(style.open);
  }

  return (
    <div id={style.main}>
      <div id={style.nav_icon} onClick={handleOnClickMenu} ref={menuButton}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div id={style.div_view} ref={sidebarDiv}>
        <Sidebar />
      </div>

      <Dashboard />
    </div>
  );
}

export default App;
