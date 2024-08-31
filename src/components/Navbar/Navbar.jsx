import logoImg from "../../assets/logo.png";
import Styles from "./navbarStyle.module.scss";

export function Navbar() {
  return (
    <header>
      <div id={Styles.navbar}>
        <div id={Styles.logo_brand}>
          <img src={logoImg} alt="Logo" />
          <h1>Gestão Financeira</h1>
        </div>

        <div id={Styles.ul_list}>
          <ul>
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/">Gerar Relatório</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
