import { useState } from "react";

import {
  FiGrid,
  FiUsers,
  FiBarChart2,
  FiSettings,
  FiHelpCircle,
  FiLogOut,
  FiFolder,
  FiCheckSquare,
  FiCheckCircle,
  FiActivity,
  FiPlus,
  FiUserPlus,
  FiFileText,
  FiArrowUpRight,
  FiMoreHorizontal,
  FiSearch,
  FiSave,
  FiBell,
  FiShield,
} from "react-icons/fi";

import DashboardCard from "./DashboardCard";
import ProgressBar from "./ProgressBar";
import EmptyState from "./EmptyState";

export default function DashboardContent({
  activeMenu,
  setActiveMenu,
  search,
  setSearch,
  onLogout,
}) {
  const [loading, setLoading] = useState(false);

  /* =========================
     STATISTICS DATA
  ========================= */

  const statsCards = [
    {
      title: "Total Users",
      value: "12,450",
      icon: <FiUsers />,
      change: "+12.5%",
      changeType: "positive",
    },
    {
      title: "Total Projects",
      value: "248",
      icon: <FiFolder />,
      change: "+8.2%",
      changeType: "positive",
    },
    {
      title: "Active Tasks",
      value: "1,286",
      icon: <FiCheckSquare />,
      change: "+5.4%",
      changeType: "positive",
    },
    {
      title: "Completed Tasks",
      value: "864",
      icon: <FiCheckCircle />,
      change: "+18.3%",
      changeType: "positive",
    },
  ];

  /* =========================
     RECENT ACTIVITIES
  ========================= */

  const activities = [
    {
      initials: "JS",
      name: "John Smith",
      activity: "Created a new project",
      time: "2 min ago",
    },
    {
      initials: "EM",
      name: "Emma Wilson",
      activity: "Completed the dashboard task",
      time: "15 min ago",
    },
    {
      initials: "RK",
      name: "Robert King",
      activity: "Added a new team member",
      time: "1 hour ago",
    },
    {
      initials: "AM",
      name: "Alex Morgan",
      activity: "Updated project details",
      time: "3 hours ago",
    },
  ];

  /* =========================
     RECENT USERS
  ========================= */

  const recentUsers = [
    {
      initials: "JD",
      name: "John Doe",
      email: "john@example.com",
      status: "Active",
    },
    {
      initials: "EW",
      name: "Emma Wilson",
      email: "emma@example.com",
      status: "Active",
    },
    {
      initials: "RK",
      name: "Robert King",
      email: "robert@example.com",
      status: "Pending",
    },
    {
      initials: "AM",
      name: "Alex Morgan",
      email: "alex@example.com",
      status: "Active",
    },
  ];

  /* =========================
     USERS DATA
  ========================= */

  const users = [
    {
      initials: "JD",
      name: "John Doe",
      email: "john@example.com",
      role: "Developer",
      status: "Active",
    },
    {
      initials: "EW",
      name: "Emma Wilson",
      email: "emma@example.com",
      role: "Designer",
      status: "Active",
    },
    {
      initials: "RK",
      name: "Robert King",
      email: "robert@example.com",
      role: "Manager",
      status: "Pending",
    },
    {
      initials: "AM",
      name: "Alex Morgan",
      email: "alex@example.com",
      role: "Developer",
      status: "Active",
    },
    {
      initials: "SM",
      name: "Sarah Miller",
      email: "sarah@example.com",
      role: "Tester",
      status: "Inactive",
    },
  ];

  /* =========================
     PROJECTS DATA
  ========================= */

  const projects = [
    {
      id: "#PR-1001",
      name: "Admin Dashboard",
      client: "Stackly",
      status: "In Progress",
      progress: 75,
    },
    {
      id: "#PR-1002",
      name: "E-Commerce Website",
      client: "TechFlow",
      status: "Completed",
      progress: 100,
    },
    {
      id: "#PR-1003",
      name: "Mobile Application",
      client: "NextGen",
      status: "In Progress",
      progress: 55,
    },
    {
      id: "#PR-1004",
      name: "CRM Platform",
      client: "Digital Hub",
      status: "Pending",
      progress: 25,
    },
  ];

  /* =========================
     FILTER USERS
  ========================= */

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()),
  );

  /* =========================
     LOADING STATE
  ========================= */

  if (loading) {
    return (
      <div className="loading-state">
        <div className="loader"></div>

        <h3>Loading Dashboard...</h3>

        <p>Please wait while we load your data.</p>
      </div>
    );
  }

  /* =========================
     DASHBOARD
  ========================= */

  if (activeMenu === "Dashboard") {
    return (
      <div className="dashboard-content">
        {/* Statistics Cards */}

        <section className="stats-grid">
          {statsCards.map((card) => (
            <DashboardCard
              key={card.title}
              title={card.title}
              value={card.value}
              icon={card.icon}
              change={card.change}
              changeType={card.changeType}
            />
          ))}
        </section>

        {/* Quick Actions */}

        <section className="dashboard-section">
          <div className="section-heading">
            <div>
              <h3>Quick Actions</h3>
              <p>Perform common actions quickly</p>
            </div>
          </div>

          <div className="quick-actions">
            <button
              className="quick-action-btn"
              onClick={() => setActiveMenu("Users")}
            >
              <FiUserPlus />
              <span>Add User</span>
            </button>

            <button
              className="quick-action-btn"
              onClick={() => setActiveMenu("Projects")}
            >
              <FiPlus />
              <span>Create Project</span>
            </button>

            <button
              className="quick-action-btn"
              onClick={() => setActiveMenu("Projects")}
            >
              <FiCheckSquare />
              <span>Add Task</span>
            </button>

            <button
              className="quick-action-btn"
              onClick={() => setActiveMenu("Analytics")}
            >
              <FiFileText />
              <span>Create Report</span>
            </button>
          </div>
        </section>

        {/* Charts and Progress */}

        <section className="dashboard-grid">
          <div className="content-card chart-card">
            <div className="content-card-header">
              <div>
                <h3>Project Overview</h3>
                <p>Project performance this month</p>
              </div>

              <select defaultValue="This Month">
                <option>This Month</option>
                <option>Last Month</option>
                <option>This Year</option>
              </select>
            </div>

            <div className="chart-container">
              <div className="chart-bars">
                <div className="chart-column">
                  <span style={{ height: "45%" }}></span>
                  <small>Mon</small>
                </div>

                <div className="chart-column">
                  <span style={{ height: "65%" }}></span>
                  <small>Tue</small>
                </div>

                <div className="chart-column">
                  <span style={{ height: "55%" }}></span>
                  <small>Wed</small>
                </div>

                <div className="chart-column">
                  <span style={{ height: "85%" }}></span>
                  <small>Thu</small>
                </div>

                <div className="chart-column">
                  <span style={{ height: "70%" }}></span>
                  <small>Fri</small>
                </div>

                <div className="chart-column">
                  <span style={{ height: "95%" }}></span>
                  <small>Sat</small>
                </div>

                <div className="chart-column">
                  <span style={{ height: "78%" }}></span>
                  <small>Sun</small>
                </div>
              </div>
            </div>
          </div>

          {/* Progress */}

          <div className="content-card progress-card">
            <div className="content-card-header">
              <div>
                <h3>Project Progress</h3>
                <p>Current project completion</p>
              </div>
            </div>

            <ProgressBar title="Admin Dashboard" progress={75} />
            <ProgressBar title="E-Commerce Platform" progress={92} />
            <ProgressBar title="Mobile Application" progress={55} />
            <ProgressBar title="CRM System" progress={35} />
          </div>
        </section>

        {/* Recent Data */}

        <section className="dashboard-grid">
          {/* Recent Activities */}

          <div className="content-card">
            <div className="content-card-header">
              <div>
                <h3>Recent Activities</h3>
                <p>Latest activities from your team</p>
              </div>

              <button
                className="view-btn"
                onClick={() => setActiveMenu("Analytics")}
              >
                View All
                <FiArrowUpRight />
              </button>
            </div>

            <div className="activity-list">
              {activities.map((activity) => (
                <div
                  className="activity-item"
                  key={`${activity.name}-${activity.time}`}
                >
                  <div className="activity-avatar">{activity.initials}</div>

                  <div className="activity-details">
                    <h4>{activity.name}</h4>
                    <p>{activity.activity}</p>
                  </div>

                  <span>{activity.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Users */}

          <div className="content-card">
            <div className="content-card-header">
              <div>
                <h3>Recent Users</h3>
                <p>Recently added users</p>
              </div>

              <button
                className="view-btn"
                onClick={() => setActiveMenu("Users")}
              >
                View All
                <FiArrowUpRight />
              </button>
            </div>

            <div className="recent-users-list">
              {recentUsers.map((user) => (
                <div className="recent-user-item" key={user.email}>
                  <div className="activity-avatar">{user.initials}</div>

                  <div className="recent-user-info">
                    <h4>{user.name}</h4>
                    <p>{user.email}</p>
                  </div>

                  <span className={`status ${user.status.toLowerCase()}`}>
                    {user.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Loading Button */}

        <div className="dashboard-demo-actions">
          <button
            className="demo-loading-btn"
            onClick={() => {
              setLoading(true);

              setTimeout(() => {
                setLoading(false);
              }, 1500);
            }}
          >
            Test Loading State
          </button>
        </div>
      </div>
    );
  }

  /* =========================
     MY PROFILE
  ========================= */

  if (activeMenu === "My Profile") {
    return (
      <div className="dashboard-content">
        <div className="page-section-header">
          <div>
            <h2>My Profile</h2>
            <p>Manage your personal profile information.</p>
          </div>

          <button className="primary-btn">
            <FiSave />
            Save Changes
          </button>
        </div>

        <div className="content-card profile-page-card">
          <div className="profile-page-header">
            <div className="profile-page-avatar">AD</div>

            <div>
              <h2>Admin User</h2>
              <p>Administrator</p>
            </div>
          </div>

          <div className="profile-form">
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" defaultValue="Admin User" />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" defaultValue="admin@demo.com" />
            </div>

            <div className="form-group">
              <label>Role</label>
              <input type="text" defaultValue="Administrator" disabled />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input type="text" placeholder="Enter phone number" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* =========================
     USERS
  ========================= */

  if (activeMenu === "Users") {
    return (
      <div className="dashboard-content">
        <div className="page-section-header">
          <div>
            <h2>Users</h2>
            <p>Manage all users from one place.</p>
          </div>

          <button className="primary-btn">
            <FiUserPlus />
            Add User
          </button>
        </div>

        <div className="content-card">
          <div className="table-top">
            <h3>All Users</h3>
          </div>

          {filteredUsers.length > 0 ? (
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredUsers.map((user) => (
                    <tr key={user.email}>
                      <td>
                        <div className="table-user">
                          <div className="activity-avatar">{user.initials}</div>

                          <div>
                            <h4>{user.name}</h4>
                            <p>{user.email}</p>
                          </div>
                        </div>
                      </td>

                      <td>{user.role}</td>

                      <td>
                        <span className={`status ${user.status.toLowerCase()}`}>
                          {user.status}
                        </span>
                      </td>

                      <td>
                        <button className="icon-action-btn">
                          <FiMoreHorizontal />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <EmptyState
              icon={<FiUsers />}
              title="No Users Found"
              description="There are no users matching your search."
            />
          )}
        </div>
      </div>
    );
  }

  /* =========================
     ORDERS / PROJECTS
  ========================= */

  if (activeMenu === "Projects") {
    return (
      <div className="dashboard-content">
        <div className="page-section-header">
          <div>
            <h2>Projects</h2>
            <p>Track and manage your ongoing projects.</p>
          </div>

          <button className="primary-btn">
            <FiPlus />
            Create Project
          </button>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-card-top">
                <div>
                  <span className="project-id">{project.id}</span>

                  <h3>{project.name}</h3>

                  <p>{project.client}</p>
                </div>

                <button className="icon-action-btn">
                  <FiMoreHorizontal />
                </button>
              </div>

              <div className="project-card-bottom">
                <div className="progress-info">
                  <span>Progress</span>
                  <span>{project.progress}%</span>
                </div>

                <div className="progress-track">
                  <div
                    className="progress-fill"
                    style={{
                      width: `${project.progress}%`,
                    }}
                  />
                </div>

                <span
                  className={`status ${project.status
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {project.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  /* =========================
     ANALYTICS
  ========================= */

  if (activeMenu === "Analytics") {
    return (
      <div className="dashboard-content">
        <div className="page-section-header">
          <div>
            <h2>Analytics</h2>
            <p>Monitor your platform performance.</p>
          </div>

          <button className="primary-btn">
            <FiFileText />
            Download Report
          </button>
        </div>

        <section className="stats-grid">
          <DashboardCard
            title="Total Visits"
            value="48,250"
            icon={<FiActivity />}
            change="+16.4%"
            changeType="positive"
          />

          <DashboardCard
            title="New Users"
            value="1,248"
            icon={<FiUsers />}
            change="+10.8%"
            changeType="positive"
          />

          <DashboardCard
            title="Projects Created"
            value="248"
            icon={<FiFolder />}
            change="+7.2%"
            changeType="positive"
          />

          <DashboardCard
            title="Tasks Completed"
            value="864"
            icon={<FiCheckCircle />}
            change="+21.3%"
            changeType="positive"
          />
        </section>

        <section className="dashboard-grid">
          <div className="content-card chart-card">
            <div className="content-card-header">
              <div>
                <h3>User Activity</h3>
                <p>Weekly user activity</p>
              </div>
            </div>

            <div className="chart-container">
              <div className="chart-bars">
                <div className="chart-column">
                  <span style={{ height: "50%" }}></span>
                  <small>Mon</small>
                </div>

                <div className="chart-column">
                  <span style={{ height: "75%" }}></span>
                  <small>Tue</small>
                </div>

                <div className="chart-column">
                  <span style={{ height: "60%" }}></span>
                  <small>Wed</small>
                </div>

                <div className="chart-column">
                  <span style={{ height: "90%" }}></span>
                  <small>Thu</small>
                </div>

                <div className="chart-column">
                  <span style={{ height: "70%" }}></span>
                  <small>Fri</small>
                </div>

                <div className="chart-column">
                  <span style={{ height: "95%" }}></span>
                  <small>Sat</small>
                </div>

                <div className="chart-column">
                  <span style={{ height: "82%" }}></span>
                  <small>Sun</small>
                </div>
              </div>
            </div>
          </div>

          <div className="content-card progress-card">
            <div className="content-card-header">
              <div>
                <h3>Performance</h3>
                <p>Current system performance</p>
              </div>
            </div>

            <ProgressBar title="User Engagement" progress={82} />

            <ProgressBar title="Task Completion" progress={74} />

            <ProgressBar title="Project Delivery" progress={91} />

            <ProgressBar title="Team Productivity" progress={68} />
          </div>
        </section>
      </div>
    );
  }

  /* =========================
     SETTINGS
  ========================= */

  if (activeMenu === "Settings") {
    return (
      <div className="dashboard-content">
        <div className="page-section-header">
          <div>
            <h2>Settings</h2>
            <p>Manage your application preferences.</p>
          </div>

          <button className="primary-btn">
            <FiSave />
            Save Changes
          </button>
        </div>

        <div className="settings-list">
          <div className="settings-item">
            <div className="settings-icon">
              <FiUsers />
            </div>

            <div className="settings-info">
              <h3>Account Settings</h3>
              <p>Manage your account and profile information.</p>
            </div>
          </div>

          <div className="settings-item">
            <div className="settings-icon">
              <FiBell />
            </div>

            <div className="settings-info">
              <h3>Notifications</h3>
              <p>Configure email and application notifications.</p>
            </div>
          </div>

          <div className="settings-item">
            <div className="settings-icon">
              <FiShield />
            </div>

            <div className="settings-info">
              <h3>Security</h3>
              <p>Manage password and security preferences.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* =========================
     HELP & SUPPORT
  ========================= */

  if (activeMenu === "Help & Support") {
    return (
      <div className="dashboard-content">
        <div className="content-card support-card">
          <div className="support-icon">
            <FiHelpCircle />
          </div>

          <h2>How can we help you?</h2>

          <p>Find answers, guides, and support for your dashboard.</p>

          <div className="support-actions">
            <button className="primary-btn">
              <FiFileText />
              View Documentation
            </button>

            <button className="secondary-btn">Contact Support</button>
          </div>
        </div>
      </div>
    );
  }

  /* =========================
     LOGOUT PAGE
  ========================= */

  if (activeMenu === "Logout") {
    return (
      <div className="dashboard-content">
        <div className="logout-page">
          <div className="logout-icon">
            <FiLogOut />
          </div>

          <h2>Ready to Logout?</h2>

          <p>Are you sure you want to logout from your account?</p>

          <div className="logout-actions">
            <button
              className="secondary-btn"
              onClick={() => setActiveMenu("Dashboard")}
            >
              Cancel
            </button>

            <button className="danger-btn" onClick={onLogout}>
              <FiLogOut />
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* =========================
     FALLBACK
  ========================= */

  return (
    <div className="dashboard-content">
      <EmptyState
        icon={<FiGrid />}
        title="Page Not Found"
        description="The requested content is not available."
      />
    </div>
  );
}
