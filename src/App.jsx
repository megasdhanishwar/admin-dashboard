import { useState } from "react";
import "./App.css";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import DashboardContent from "./components/DashboardContent";
import Login from "./components/Login";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true",
  );

  const [activeMenu, setActiveMenu] = useState("Dashboard");

  // Mobile sidebar
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Desktop sidebar collapse
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Global search
  const [search, setSearch] = useState("");

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");

    setIsLoggedIn(false);

    setActiveMenu("Dashboard");
    setSidebarOpen(false);
    setSidebarCollapsed(false);
    setSearch("");
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div
      className={`app-layout ${sidebarCollapsed ? "sidebar-is-collapsed" : ""}`}
    >
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        sidebarCollapsed={sidebarCollapsed}
        setSidebarCollapsed={setSidebarCollapsed}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        onLogout={handleLogout}
      />

      <div className="main-layout">
        <Topbar
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          setIsSidebarOpen={setSidebarOpen}
          search={search}
          setSearch={setSearch}
          onLogout={handleLogout}
        />

        <main className="main-content">
          <DashboardContent
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
            search={search}
            setSearch={setSearch}
            onLogout={handleLogout}
          />
        </main>
      </div>
    </div>
  );
}
