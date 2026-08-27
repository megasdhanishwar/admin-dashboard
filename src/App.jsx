import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import DashboardContent from "./components/DashboardContent";
import "./App.css";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const [activeMenu, setActiveMenu] = useState("Dashboard");

  return (
    <div className="app">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        sidebarCollapsed={sidebarCollapsed}
        setSidebarCollapsed={setSidebarCollapsed}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
      />

      <div
        className={`main-layout ${
          sidebarCollapsed ? "sidebar-collapsed" : ""
        }`}
      >
        <Topbar
          setSidebarOpen={setSidebarOpen}
          activeMenu={activeMenu}
        />

        <main className="main-content">
          <DashboardContent activeMenu={activeMenu} />
        </main>
      </div>
    </div>
  );
}