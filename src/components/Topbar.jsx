import { FiBell, FiMenu, FiSearch, FiChevronDown } from "react-icons/fi";

export default function Topbar({ setSidebarOpen, activeMenu }) {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <button
          className="mobile-menu-btn"
          onClick={() => setSidebarOpen(true)}
        >
          <FiMenu />
        </button>

        <div className="page-heading">
          <h2>{activeMenu}</h2>

          <p>Manage your {activeMenu.toLowerCase()} here</p>
        </div>
      </div>

      <div className="topbar-right">
        <div className="search-box">
          <FiSearch />

          <input type="text" placeholder="Search..." />
        </div>

        <button className="notification-btn">
          <FiBell />

          <span className="notification-dot"></span>
        </button>

        <div className="profile">
          <div className="profile-avatar">AD</div>

          <div className="profile-info">
            <h4>Admin User</h4>

            <span>Administrator</span>
          </div>

          <FiChevronDown className="profile-arrow" />
        </div>
      </div>
    </header>
  );
}
