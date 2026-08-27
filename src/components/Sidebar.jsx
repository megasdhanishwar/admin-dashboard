import {
  FiGrid,
  FiUsers,
  FiShoppingBag,
  FiBarChart2,
  FiSettings,
  FiHelpCircle,
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
      name: "Orders",
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
    setSidebarOpen(false);
  };

  return (
    <>
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      <aside
        className={`sidebar ${
          sidebarOpen ? "mobile-open" : ""
        } ${sidebarCollapsed ? "collapsed" : ""}`}
      >
        {/* Logo */}
        <div className="sidebar-header">
          <div className="logo">
            <div className="logo-icon">#</div>

            {!sidebarCollapsed && (
              <div>
                <div className="logo-text">AdminFlow</div>
                <div className="logo-subtext">ADMIN PANEL</div>
              </div>
            )}
          </div>

          <button
            className="close-mobile"
            onClick={() => setSidebarOpen(false)}
          >
            <FiX />
          </button>
        </div>

        {/* Navigation */}
        <div className="sidebar-content">
          {/* OVERVIEW */}
          {!sidebarCollapsed && <p className="menu-title">OVERVIEW</p>}

          <nav className="nav-menu">
            <button
              className={`nav-item ${
                activeMenu === "Dashboard" ? "active" : ""
              }`}
              onClick={() => handleMenuClick("Dashboard")}
            >
              <span className="nav-icon">
                <FiGrid />
              </span>

              {!sidebarCollapsed && <span className="nav-text">Dashboard</span>}
            </button>
          </nav>

          {/* MANAGEMENT */}
          {!sidebarCollapsed && (
            <p className="menu-title management-title">MANAGEMENT</p>
          )}

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
                >
                  <span className="nav-icon">{item.icon}</span>

                  {!sidebarCollapsed && (
                    <span className="nav-text">{item.name}</span>
                  )}
                </button>
              ))}
          </nav>

          {/* SYSTEM */}
          {/* {!sidebarCollapsed && (
            <p className="menu-title management-title">SYSTEM</p>
          )} */}

          <nav className="nav-menu">
            <button
              className={`nav-item ${
                activeMenu === "Settings" ? "active" : ""
              }`}
              onClick={() => handleMenuClick("Settings")}
            >
              <span className="nav-icon">
                <FiSettings />
              </span>

              {!sidebarCollapsed && <span className="nav-text">Settings</span>}
            </button>
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="sidebar-footer">
          {/* Help */}
          {/* <button
            className={`nav-item ${
              activeMenu === "Help & Support" ? "active" : ""
            }`}
            onClick={() => handleMenuClick("Help & Support")}
          >
            <span className="nav-icon">
              <FiHelpCircle />
            </span>

            {!sidebarCollapsed && (
              <span className="nav-text">Help & Support</span>
            )}
          </button> */}

          {/* Logout */}
          <button
            className="nav-item logout"
          >
            <span className="nav-icon">
              <FiLogOut />
            </span>

            {!sidebarCollapsed && <span className="nav-text">Logout</span>}
          </button>

          {/* Profile */}
          {/* <div className="sidebar-profile">
            <div className="sidebar-profile-avatar">AD</div>

            {!sidebarCollapsed && (
              <div className="sidebar-profile-info">
                <h4>Admin User</h4>
                <span>Administrator</span>
              </div>
            )}

            <span className="online-dot"></span>
          </div> */}

          {/* Collapse Button */}
          <button
            className="sidebar-collapse-btn"
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          >
            {sidebarCollapsed ? (
              <FiChevronsRight />
            ) : (
              <>
                <FiChevronsLeft />

                <span>Collapse</span>
              </>
            )}
          </button>
        </div>
      </aside>
    </>
  );
}
