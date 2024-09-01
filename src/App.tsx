import { Dashboard } from "./Components/Dashboard/Dashboard";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import "./css/appStyle.css";

function App() {
  return (
    <div id="main">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
