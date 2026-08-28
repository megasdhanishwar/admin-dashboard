import {
  FiGrid,
  FiUsers,
  FiShoppingBag,
  FiBarChart2,
  FiSettings,
  FiLogOut,
  FiChevronsLeft,
  FiChevronsRight,
  FiX,
} from "react-icons/fi";

export default function Sidebar({
  sidebarOpen,
  setSidebarOpen,
  sidebarCollapsed,
  setSidebarCollapsed,
  activeMenu,
  setActiveMenu,
  onLogout,
}) {
  const menuItems = [
    {
      name: "Dashboard",
      icon: <FiGrid />,
      section: "OVERVIEW",
    },
    {
      name: "Users",
      icon: <FiUsers />,
      section: "MANAGEMENT",
    },
    {
      name: "Projects",
      icon: <FiShoppingBag />,
      section: "MANAGEMENT",
    },
    {
      name: "Analytics",
      icon: <FiBarChart2 />,
      section: "MANAGEMENT",
    },
    {
      name: "Settings",
      icon: <FiSettings />,
      section: "SYSTEM",
    },
  ];

  const handleMenuClick = (menuName) => {
    setActiveMenu(menuName);

    // Close sidebar after selecting a menu on mobile
    if (window.innerWidth <= 768) {
      setSidebarOpen(false);
    }
  };

  const handleLogout = () => {
    setSidebarOpen(false);
    onLogout();
  };

  return (
    <>
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`sidebar ${
          sidebarOpen ? "mobile-open" : ""
        } ${sidebarCollapsed ? "collapsed" : ""}`}
      >
        {/* Sidebar Header */}
        <div className="sidebar-header">
          <div className="logo">
            <div className="logo-icon">#</div>

            <div className="logo-details">
              <div className="logo-text">AdminFlow</div>

              <div className="logo-subtext">ADMIN PANEL</div>
            </div>
          </div>

          {/* Mobile Close Button */}
          <button
            className="close-mobile"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close sidebar"
          >
            <FiX />
          </button>
        </div>

        {/* Sidebar Navigation */}
        <div className="sidebar-content">
          {/* OVERVIEW */}
          <p className="menu-title overview-title">OVERVIEW</p>

          <nav className="nav-menu">
            <button
              className={`nav-item ${
                activeMenu === "Dashboard" ? "active" : ""
              }`}
              onClick={() => handleMenuClick("Dashboard")}
              title="Dashboard"
            >
              <span className="nav-icon">
                <FiGrid />
              </span>

              <span className="nav-text">Dashboard</span>
            </button>
          </nav>

          {/* MANAGEMENT */}
          <p className="menu-title management-title">MANAGEMENT</p>

          <nav className="nav-menu">
            {menuItems
              .filter((item) => item.section === "MANAGEMENT")
              .map((item) => (
                <button
                  key={item.name}
                  className={`nav-item ${
                    activeMenu === item.name ? "active" : ""
                  }`}
                  onClick={() => handleMenuClick(item.name)}
                  title={item.name}
                >
                  <span className="nav-icon">{item.icon}</span>

                  <span className="nav-text">{item.name}</span>
                </button>
              ))}
          </nav>

          {/* SYSTEM */}
          <p className="menu-title management-title">SYSTEM</p>

          <nav className="nav-menu">
            <button
              className={`nav-item ${
                activeMenu === "Settings" ? "active" : ""
              }`}
              onClick={() => handleMenuClick("Settings")}
              title="Settings"
            >
              <span className="nav-icon">
                <FiSettings />
              </span>

              <span className="nav-text">Settings</span>
            </button>
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="sidebar-footer">
          <button
            className="nav-item logout"
            onClick={handleLogout}
            title="Logout"
          >
            <span className="nav-icon">
              <FiLogOut />
            </span>

            <span className="nav-text">Logout</span>
          </button>

          {/* Collapse Button */}
          <button
            className="sidebar-collapse-btn"
            onClick={() => setSidebarCollapsed((previous) => !previous)}
            title={sidebarCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
          >
            {sidebarCollapsed ? (
              <FiChevronsRight />
            ) : (
              <>
                <FiChevronsLeft />
                <span className="collapse-text">Collapse</span>
              </>
            )}
          </button>
        </div>
      </aside>
    </>
  );
}
