import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { GastoMensal } from "./components/GastoMensal/GastoMensal";
import Styles from "./css/appStyle.module.scss";

function App() {
  return (
    <>
      <Navbar />

      <section id={Styles.dashboard_gastos}>
        <GastoMensal />
      </section>
    </>
  );
}

export default App;
