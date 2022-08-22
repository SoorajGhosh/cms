import "./App.css";
import Dashboard from "./Dashboard/Dashboard";
import Navbar, { MobileSidebar } from "./Navbar/Navbar";
import "./App.css";
import { useState } from "react";

function App() {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <div className="container">
      {{openSidebar} && <MobileSidebar openSidebar={openSidebar}/>}
      <Navbar setOpenSidebar={setOpenSidebar}/>
      <Dashboard />
    </div>
  );
}

export default App;
