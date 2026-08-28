import { useEffect, useRef, useState } from "react";

import {
  FiBell,
  FiChevronDown,
  FiMenu,
  FiUser,
  FiSettings,
  FiLogOut,
  FiCheckCircle,
  FiUsers,
  FiFolder,
  FiCheckSquare,
  FiSearch,
  FiX,
} from "react-icons/fi";

export default function Topbar({
  activeMenu,
  setActiveMenu,
  setIsSidebarOpen,
  search,
  setSearch,
  onLogout,
}) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const profileRef = useRef(null);
  const notificationRef = useRef(null);

  const notifications = [
    {
      id: 1,
      icon: <FiUsers />,
      title: "New user registered",
      description: "John Smith has joined your platform.",
      time: "2 minutes ago",
    },
    {
      id: 2,
      icon: <FiFolder />,
      title: "New project created",
      description: "The E-Commerce project was created.",
      time: "15 minutes ago",
    },
    {
      id: 3,
      icon: <FiCheckSquare />,
      title: "Task completed",
      description: "Dashboard UI task has been completed.",
      time: "1 hour ago",
    },
    {
      id: 4,
      icon: <FiCheckCircle />,
      title: "Project completed",
      description: "CRM Platform project is now completed.",
      time: "3 hours ago",
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }

      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setIsNotificationOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleProfileClick = () => {
    setIsNotificationOpen(false);
    setIsProfileOpen((previous) => !previous);
  };

  const handleNotificationClick = () => {
    setIsProfileOpen(false);
    setIsNotificationOpen((previous) => !previous);
  };

  const goToPage = (page) => {
    setActiveMenu(page);
    setIsProfileOpen(false);
    setSearch("");
  };

  const handleMobileMenu = () => {
    setIsSidebarOpen(true);
  };

  return (
    <header className="topbar">
      {/* =========================
          MOBILE MENU
      ========================= */}

      <button
        className="mobile-menu-btn"
        onClick={handleMobileMenu}
        aria-label="Open sidebar"
      >
        <FiMenu />
      </button>

      {/* =========================
          PAGE TITLE
      ========================= */}

      <div className="topbar-title">
        <h2>{activeMenu}</h2>

        <p>
          {activeMenu === "Dashboard"
            ? "Manage your dashboard here"
            : `Manage your ${activeMenu.toLowerCase()} here`}
        </p>
      </div>

      {/* =========================
          GLOBAL SEARCH
      ========================= */}

      <div className="global-search">
        <FiSearch className="search-icon" />

        <input
          type="text"
          placeholder={`Search ${activeMenu.toLowerCase()}...`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label={`Search ${activeMenu}`}
        />

        {search && (
          <button
            className="clear-search-btn"
            onClick={() => setSearch("")}
            aria-label="Clear search"
            type="button"
          >
            <FiX />
          </button>
        )}
      </div>

      {/* =========================
          RIGHT SECTION
      ========================= */}

      <div className="topbar-right">
        {/* =========================
            NOTIFICATIONS
        ========================= */}

        <div className="topbar-dropdown-wrapper" ref={notificationRef}>
          <button
            className="notification-btn"
            onClick={handleNotificationClick}
            aria-label="Notifications"
            type="button"
          >
            <FiBell />

            <span className="notification-dot"></span>
          </button>

          {isNotificationOpen && (
            <div className="notification-dropdown">
              <div className="dropdown-header">
                <div>
                  <h3>Notifications</h3>

                  <p>You have {notifications.length} new notifications</p>
                </div>
              </div>

              <div className="notification-list">
                {notifications.map((notification) => (
                  <div className="notification-item" key={notification.id}>
                    <div className="notification-icon">{notification.icon}</div>

                    <div className="notification-content">
                      <h4>{notification.title}</h4>

                      <p>{notification.description}</p>

                      <span>{notification.time}</span>
                    </div>
                  </div>
                ))}
              </div>

              <button
                className="view-all-notifications"
                onClick={() => {
                  setIsNotificationOpen(false);
                  setActiveMenu("Dashboard");
                }}
                type="button"
              >
                View all notifications
              </button>
            </div>
          )}
        </div>

        {/* =========================
            PROFILE
        ========================= */}

        <div className="topbar-dropdown-wrapper" ref={profileRef}>
          <button
            className="profile-btn"
            onClick={handleProfileClick}
            type="button"
          >
            <div className="topbar-avatar">AD</div>

            <div className="profile-info">
              <h4>Admin User</h4>

              <p>Administrator</p>
            </div>

            <FiChevronDown className={isProfileOpen ? "rotate-chevron" : ""} />
          </button>

          {isProfileOpen && (
            <div className="profile-dropdown">
              <div className="profile-dropdown-user">
                <div className="dropdown-avatar">AD</div>

                <div>
                  <h4>Admin User</h4>

                  <p>admin@demo.com</p>
                </div>
              </div>

              <div className="dropdown-divider"></div>

              <button onClick={() => goToPage("My Profile")} type="button">
                <FiUser />
                My Profile
              </button>

              <button onClick={() => goToPage("Settings")} type="button">
                <FiSettings />
                Settings
              </button>

              <div className="dropdown-divider"></div>

              <button
                className="dropdown-logout"
                onClick={onLogout}
                type="button"
              >
                <FiLogOut />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
