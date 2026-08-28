import { useState } from "react";

import {
  FiGrid,
  FiUsers,
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
  FiSave,
  FiBell,
  FiShield,
  FiTrash2,
  FiX,
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
     MODALS
  ========================= */

  const [showUserModal, setShowUserModal] = useState(false);

  const [showProjectModal, setShowProjectModal] = useState(false);

  const [showTaskModal, setShowTaskModal] = useState(false);

  /* =========================
     FORM STATES
  ========================= */

  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    role: "Developer",
    status: "Active",
  });

  const [newProject, setNewProject] = useState({
    name: "",
    client: "",
    status: "Pending",
    progress: 0,
  });

  const [newTask, setNewTask] = useState({
    title: "",
    project: "",
    status: "Pending",
  });

  /* =========================
     USERS STATE
  ========================= */

  const [users, setUsers] = useState([
    {
      id: 1,
      initials: "JD",
      name: "John Doe",
      email: "john@example.com",
      role: "Developer",
      status: "Active",
    },
    {
      id: 2,
      initials: "EW",
      name: "Emma Wilson",
      email: "emma@example.com",
      role: "Designer",
      status: "Active",
    },
    {
      id: 3,
      initials: "RK",
      name: "Robert King",
      email: "robert@example.com",
      role: "Manager",
      status: "Pending",
    },
    {
      id: 4,
      initials: "AM",
      name: "Alex Morgan",
      email: "alex@example.com",
      role: "Developer",
      status: "Active",
    },
    {
      id: 5,
      initials: "SM",
      name: "Sarah Miller",
      email: "sarah@example.com",
      role: "Tester",
      status: "Inactive",
    },
  ]);

  /* =========================
     PROJECTS STATE
  ========================= */

  const [projects, setProjects] = useState([
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
  ]);

  /* =========================
     TASKS STATE
  ========================= */

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Create Login Page",
      project: "Admin Dashboard",
      status: "Completed",
    },
    {
      id: 2,
      title: "Build User Management",
      project: "Admin Dashboard",
      status: "In Progress",
    },
    {
      id: 3,
      title: "Design Product Page",
      project: "E-Commerce Website",
      status: "Pending",
    },
  ]);

  /* =========================
     ACTIVITIES
  ========================= */

  const [activities, setActivities] = useState([
    {
      id: 1,
      initials: "JS",
      name: "John Smith",
      activity: "Created a new project",
      time: "2 min ago",
    },
    {
      id: 2,
      initials: "EM",
      name: "Emma Wilson",
      activity: "Completed the dashboard task",
      time: "15 min ago",
    },
    {
      id: 3,
      initials: "RK",
      name: "Robert King",
      activity: "Added a new team member",
      time: "1 hour ago",
    },
  ]);

  /* =========================
     ADD ACTIVITY
  ========================= */

  const addActivity = (name, activity) => {
    const initials = name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

    const newActivity = {
      id: Date.now(),
      initials,
      name,
      activity,
      time: "Just now",
    };

    setActivities((prev) => [newActivity, ...prev]);
  };

  /* =========================
     ADD USER
  ========================= */

  const handleAddUser = (e) => {
    e.preventDefault();

    if (!newUser.name || !newUser.email) {
      alert("Please enter name and email.");
      return;
    }

    const initials = newUser.name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

    const user = {
      id: Date.now(),
      initials,
      ...newUser,
    };

    setUsers((prev) => [...prev, user]);

    addActivity(newUser.name, "Joined the platform");

    setNewUser({
      name: "",
      email: "",
      role: "Developer",
      status: "Active",
    });

    setShowUserModal(false);
  };

  /* =========================
     DELETE USER
  ========================= */

  const handleDeleteUser = (id, name) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${name}?`,
    );

    if (!confirmDelete) return;

    setUsers((prev) => prev.filter((user) => user.id !== id));

    addActivity("Admin", `Deleted user ${name}`);
  };

  /* =========================
     CREATE PROJECT
  ========================= */

  const handleCreateProject = (e) => {
    e.preventDefault();

    if (!newProject.name || !newProject.client) {
      alert("Please enter project name and client.");
      return;
    }

    const project = {
      id: `#PR-${1000 + projects.length + 1}`,
      name: newProject.name,
      client: newProject.client,
      status: newProject.status,
      progress: Number(newProject.progress),
    };

    setProjects((prev) => [...prev, project]);

    addActivity("Admin", `Created project ${newProject.name}`);

    setNewProject({
      name: "",
      client: "",
      status: "Pending",
      progress: 0,
    });

    setShowProjectModal(false);
  };

  /* =========================
     DELETE PROJECT
  ========================= */

  const handleDeleteProject = (id, name) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${name}?`,
    );

    if (!confirmDelete) return;

    setProjects((prev) => prev.filter((project) => project.id !== id));

    addActivity("Admin", `Deleted project ${name}`);
  };

  /* =========================
     ADD TASK
  ========================= */

  const handleAddTask = (e) => {
    e.preventDefault();

    if (!newTask.title || !newTask.project) {
      alert("Please enter task details.");
      return;
    }

    const task = {
      id: Date.now(),
      ...newTask,
    };

    setTasks((prev) => [...prev, task]);

    addActivity("Admin", `Added task ${newTask.title}`);

    setNewTask({
      title: "",
      project: "",
      status: "Pending",
    });

    setShowTaskModal(false);

    setActiveMenu("Tasks");
  };

  /* =========================
     DELETE TASK
  ========================= */

  const handleDeleteTask = (id, title) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete "${title}"?`,
    );

    if (!confirmDelete) return;

    setTasks((prev) => prev.filter((task) => task.id !== id));

    addActivity("Admin", `Deleted task ${title}`);
  };

  /* =========================
     COMPLETE TASK
  ========================= */

  const handleCompleteTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              status: "Completed",
            }
          : task,
      ),
    );

    addActivity("Admin", "Completed a task");
  };

  /* =========================
     FILTER DATA
  ========================= */

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()),
  );

  const filteredProjects = projects.filter(
    (project) =>
      project.name.toLowerCase().includes(search.toLowerCase()) ||
      project.client.toLowerCase().includes(search.toLowerCase()),
  );

  const filteredTasks = tasks.filter(
    (task) =>
      task.title.toLowerCase().includes(search.toLowerCase()) ||
      task.project.toLowerCase().includes(search.toLowerCase()),
  );

  /* =========================
     DYNAMIC STATS
  ========================= */

  const statsCards = [
    {
      title: "Total Users",
      value: users.length,
      icon: <FiUsers />,
      change: "Live Data",
      changeType: "positive",
    },
    {
      title: "Total Projects",
      value: projects.length,
      icon: <FiFolder />,
      change: "Live Data",
      changeType: "positive",
    },
    {
      title: "Active Tasks",
      value: tasks.filter(
        (task) => task.status === "In Progress" || task.status === "Pending",
      ).length,
      icon: <FiCheckSquare />,
      change: "Live Data",
      changeType: "positive",
    },
    {
      title: "Completed Tasks",
      value: tasks.filter((task) => task.status === "Completed").length,
      icon: <FiCheckCircle />,
      change: "Live Data",
      changeType: "positive",
    },
  ];

  /* =========================
     LOADING
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

        <section className="dashboard-section">
          <div className="section-heading">
            <h3>Quick Actions</h3>
            <p>Perform common actions quickly</p>
          </div>

          <div className="quick-actions">
            <button
              className="quick-action-btn"
              onClick={() => setShowUserModal(true)}
            >
              <FiUserPlus />
              <span>Add User</span>
            </button>

            <button
              className="quick-action-btn"
              onClick={() => setShowProjectModal(true)}
            >
              <FiPlus />
              <span>Create Project</span>
            </button>

            <button
              className="quick-action-btn"
              onClick={() => setShowTaskModal(true)}
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

        <section className="dashboard-grid">
          <div className="content-card">
            <div className="content-card-header">
              <div>
                <h3>Project Overview</h3>
                <p>Project performance this month</p>
              </div>
            </div>

            <div className="chart-container">
              <div className="chart-bars">
                {[
                  ["Mon", 45],
                  ["Tue", 65],
                  ["Wed", 55],
                  ["Thu", 85],
                  ["Fri", 70],
                  ["Sat", 95],
                  ["Sun", 78],
                ].map(([day, height]) => (
                  <div className="chart-column" key={day}>
                    <span style={{ height: `${height}%` }}></span>
                    <small>{day}</small>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="content-card">
            <div className="content-card-header">
              <div>
                <h3>Project Progress</h3>
                <p>Current project completion</p>
              </div>
            </div>

            {projects.slice(0, 4).map((project) => (
              <ProgressBar
                key={project.id}
                title={project.name}
                progress={project.progress}
              />
            ))}
          </div>
        </section>

        <section className="dashboard-grid">
          <div className="content-card">
            <div className="content-card-header">
              <div>
                <h3>Recent Activities</h3>
                <p>Latest activities from your team</p>
              </div>
            </div>

            <div className="activity-list">
              {activities.slice(0, 5).map((activity) => (
                <div className="activity-item" key={activity.id}>
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
              {users
                .slice(-4)
                .reverse()
                .map((user) => (
                  <div className="recent-user-item" key={user.id}>
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

        {showUserModal && (
          <div className="modal-overlay">
            <div className="modal">
              <div className="modal-header">
                <h3>Add New User</h3>

                <button
                  className="modal-close"
                  onClick={() => setShowUserModal(false)}
                >
                  <FiX />
                </button>
              </div>

              <form onSubmit={handleAddUser}>
                <div className="form-group">
                  <label>Full Name</label>

                  <input
                    type="text"
                    value={newUser.name}
                    onChange={(e) =>
                      setNewUser({
                        ...newUser,
                        name: e.target.value,
                      })
                    }
                    placeholder="Enter full name"
                  />
                </div>

                <div className="form-group">
                  <label>Email</label>

                  <input
                    type="email"
                    value={newUser.email}
                    onChange={(e) =>
                      setNewUser({
                        ...newUser,
                        email: e.target.value,
                      })
                    }
                    placeholder="Enter email"
                  />
                </div>

                <div className="form-group">
                  <label>Role</label>

                  <select
                    value={newUser.role}
                    onChange={(e) =>
                      setNewUser({
                        ...newUser,
                        role: e.target.value,
                      })
                    }
                  >
                    <option>Developer</option>
                    <option>Designer</option>
                    <option>Manager</option>
                    <option>Tester</option>
                  </select>
                </div>

                <div className="modal-actions">
                  <button
                    type="button"
                    className="secondary-btn"
                    onClick={() => setShowUserModal(false)}
                  >
                    Cancel
                  </button>

                  <button type="submit" className="primary-btn">
                    <FiUserPlus />
                    Add User
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {showProjectModal && (
          <div className="modal-overlay">
            <div className="modal">
              <div className="modal-header">
                <h3>Create Project</h3>

                <button
                  className="modal-close"
                  onClick={() => setShowProjectModal(false)}
                >
                  <FiX />
                </button>
              </div>

              <form onSubmit={handleCreateProject}>
                <div className="form-group">
                  <label>Project Name</label>

                  <input
                    type="text"
                    value={newProject.name}
                    onChange={(e) =>
                      setNewProject({
                        ...newProject,
                        name: e.target.value,
                      })
                    }
                    placeholder="Enter project name"
                  />
                </div>

                <div className="form-group">
                  <label>Client Name</label>

                  <input
                    type="text"
                    value={newProject.client}
                    onChange={(e) =>
                      setNewProject({
                        ...newProject,
                        client: e.target.value,
                      })
                    }
                    placeholder="Enter client name"
                  />
                </div>

                <div className="form-group">
                  <label>Status</label>

                  <select
                    value={newProject.status}
                    onChange={(e) =>
                      setNewProject({
                        ...newProject,
                        status: e.target.value,
                      })
                    }
                  >
                    <option>Pending</option>
                    <option>In Progress</option>
                    <option>Completed</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Progress (%)</label>

                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={newProject.progress}
                    onChange={(e) =>
                      setNewProject({
                        ...newProject,
                        progress: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="modal-actions">
                  <button
                    type="button"
                    className="secondary-btn"
                    onClick={() => setShowProjectModal(false)}
                  >
                    Cancel
                  </button>

                  <button type="submit" className="primary-btn">
                    <FiPlus />
                    Create Project
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {showTaskModal && (
          <div className="modal-overlay">
            <div className="modal">
              <div className="modal-header">
                <h3>Add New Task</h3>

                <button
                  className="modal-close"
                  onClick={() => setShowTaskModal(false)}
                >
                  <FiX />
                </button>
              </div>

              <form onSubmit={handleAddTask}>
                <div className="form-group">
                  <label>Task Title</label>

                  <input
                    type="text"
                    value={newTask.title}
                    onChange={(e) =>
                      setNewTask({
                        ...newTask,
                        title: e.target.value,
                      })
                    }
                    placeholder="Enter task title"
                  />
                </div>

                <div className="form-group">
                  <label>Project</label>

                  <select
                    value={newTask.project}
                    onChange={(e) =>
                      setNewTask({
                        ...newTask,
                        project: e.target.value,
                      })
                    }
                  >
                    <option value="">Select Project</option>

                    {projects.map((project) => (
                      <option key={project.id} value={project.name}>
                        {project.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label>Status</label>

                  <select
                    value={newTask.status}
                    onChange={(e) =>
                      setNewTask({
                        ...newTask,
                        status: e.target.value,
                      })
                    }
                  >
                    <option>Pending</option>
                    <option>In Progress</option>
                    <option>Completed</option>
                  </select>
                </div>

                <div className="modal-actions">
                  <button
                    type="button"
                    className="secondary-btn"
                    onClick={() => setShowTaskModal(false)}
                  >
                    Cancel
                  </button>

                  <button type="submit" className="primary-btn">
                    <FiCheckSquare />
                    Add Task
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
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

          <button
            className="primary-btn"
            onClick={() => setShowUserModal(true)}
          >
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
                    <tr key={user.id}>
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
                        <button
                          className="icon-action-btn delete-btn"
                          onClick={() => handleDeleteUser(user.id, user.name)}
                        >
                          <FiTrash2 />
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

        {showUserModal && (
          <div className="modal-overlay">
            <div className="modal">
              <div className="modal-header">
                <h3>Add New User</h3>

                <button
                  className="modal-close"
                  onClick={() => setShowUserModal(false)}
                >
                  <FiX />
                </button>
              </div>

              <form onSubmit={handleAddUser}>
                <div className="form-group">
                  <label>Full Name</label>

                  <input
                    type="text"
                    value={newUser.name}
                    onChange={(e) =>
                      setNewUser({
                        ...newUser,
                        name: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="form-group">
                  <label>Email</label>

                  <input
                    type="email"
                    value={newUser.email}
                    onChange={(e) =>
                      setNewUser({
                        ...newUser,
                        email: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="form-group">
                  <label>Role</label>

                  <select
                    value={newUser.role}
                    onChange={(e) =>
                      setNewUser({
                        ...newUser,
                        role: e.target.value,
                      })
                    }
                  >
                    <option>Developer</option>
                    <option>Designer</option>
                    <option>Manager</option>
                    <option>Tester</option>
                  </select>
                </div>

                <div className="modal-actions">
                  <button
                    type="button"
                    className="secondary-btn"
                    onClick={() => setShowUserModal(false)}
                  >
                    Cancel
                  </button>

                  <button type="submit" className="primary-btn">
                    Add User
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }

  /* =========================
     PROJECTS
  ========================= */

  if (activeMenu === "Projects") {
    return (
      <div className="dashboard-content">
        <div className="page-section-header">
          <div>
            <h2>Projects</h2>
            <p>Track and manage your ongoing projects.</p>
          </div>

          <div className="header-actions">
            <button
              className="secondary-btn"
              onClick={() => setShowTaskModal(true)}
            >
              <FiCheckSquare />
              Add Task
            </button>

            <button
              className="primary-btn"
              onClick={() => setShowProjectModal(true)}
            >
              <FiPlus />
              Create Project
            </button>
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-card-top">
                <div>
                  <span className="project-id">{project.id}</span>

                  <h3>{project.name}</h3>

                  <p>{project.client}</p>
                </div>

                <button
                  className="icon-action-btn delete-btn"
                  onClick={() => handleDeleteProject(project.id, project.name)}
                >
                  <FiTrash2 />
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

        {showProjectModal && (
          <div className="modal-overlay">
            <div className="modal">
              <div className="modal-header">
                <h3>Create Project</h3>

                <button
                  className="modal-close"
                  onClick={() => setShowProjectModal(false)}
                >
                  <FiX />
                </button>
              </div>

              <form onSubmit={handleCreateProject}>
                <div className="form-group">
                  <label>Project Name</label>

                  <input
                    type="text"
                    value={newProject.name}
                    onChange={(e) =>
                      setNewProject({
                        ...newProject,
                        name: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="form-group">
                  <label>Client Name</label>

                  <input
                    type="text"
                    value={newProject.client}
                    onChange={(e) =>
                      setNewProject({
                        ...newProject,
                        client: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="form-group">
                  <label>Status</label>

                  <select
                    value={newProject.status}
                    onChange={(e) =>
                      setNewProject({
                        ...newProject,
                        status: e.target.value,
                      })
                    }
                  >
                    <option>Pending</option>
                    <option>In Progress</option>
                    <option>Completed</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Progress</label>

                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={newProject.progress}
                    onChange={(e) =>
                      setNewProject({
                        ...newProject,
                        progress: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="modal-actions">
                  <button
                    type="button"
                    className="secondary-btn"
                    onClick={() => setShowProjectModal(false)}
                  >
                    Cancel
                  </button>

                  <button type="submit" className="primary-btn">
                    Create Project
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {showTaskModal && (
          <div className="modal-overlay">
            <div className="modal">
              <div className="modal-header">
                <h3>Add New Task</h3>

                <button
                  className="modal-close"
                  onClick={() => setShowTaskModal(false)}
                >
                  <FiX />
                </button>
              </div>

              <form onSubmit={handleAddTask}>
                <div className="form-group">
                  <label>Task Title</label>

                  <input
                    type="text"
                    value={newTask.title}
                    onChange={(e) =>
                      setNewTask({
                        ...newTask,
                        title: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="form-group">
                  <label>Project</label>

                  <select
                    value={newTask.project}
                    onChange={(e) =>
                      setNewTask({
                        ...newTask,
                        project: e.target.value,
                      })
                    }
                  >
                    <option value="">Select Project</option>

                    {projects.map((project) => (
                      <option key={project.id} value={project.name}>
                        {project.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label>Status</label>

                  <select
                    value={newTask.status}
                    onChange={(e) =>
                      setNewTask({
                        ...newTask,
                        status: e.target.value,
                      })
                    }
                  >
                    <option>Pending</option>
                    <option>In Progress</option>
                    <option>Completed</option>
                  </select>
                </div>

                <div className="modal-actions">
                  <button
                    type="button"
                    className="secondary-btn"
                    onClick={() => setShowTaskModal(false)}
                  >
                    Cancel
                  </button>

                  <button type="submit" className="primary-btn">
                    Add Task
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }

  /* =========================
     TASKS
  ========================= */

  if (activeMenu === "Tasks") {
    return (
      <div className="dashboard-content">
        <div className="page-section-header">
          <div>
            <h2>Tasks</h2>
            <p>Manage all project tasks.</p>
          </div>

          <button
            className="primary-btn"
            onClick={() => setShowTaskModal(true)}
          >
            <FiPlus />
            Add Task
          </button>
        </div>

        <div className="content-card">
          {filteredTasks.length > 0 ? (
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Task</th>
                    <th>Project</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredTasks.map((task) => (
                    <tr key={task.id}>
                      <td>{task.title}</td>

                      <td>{task.project}</td>

                      <td>
                        <span
                          className={`status ${task.status
                            .toLowerCase()
                            .replace(" ", "-")}`}
                        >
                          {task.status}
                        </span>
                      </td>

                      <td className="task-actions">
                        {task.status !== "Completed" && (
                          <button
                            className="icon-action-btn"
                            onClick={() => handleCompleteTask(task.id)}
                          >
                            <FiCheckCircle />
                          </button>
                        )}

                        <button
                          className="icon-action-btn delete-btn"
                          onClick={() => handleDeleteTask(task.id, task.title)}
                        >
                          <FiTrash2 />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <EmptyState
              icon={<FiCheckSquare />}
              title="No Tasks Found"
              description="Create a new task to get started."
            />
          )}
        </div>

        {showTaskModal && (
          <div className="modal-overlay">
            <div className="modal">
              <div className="modal-header">
                <h3>Add New Task</h3>

                <button
                  className="modal-close"
                  onClick={() => setShowTaskModal(false)}
                >
                  <FiX />
                </button>
              </div>

              <form onSubmit={handleAddTask}>
                <div className="form-group">
                  <label>Task Title</label>

                  <input
                    type="text"
                    value={newTask.title}
                    onChange={(e) =>
                      setNewTask({
                        ...newTask,
                        title: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="form-group">
                  <label>Project</label>

                  <select
                    value={newTask.project}
                    onChange={(e) =>
                      setNewTask({
                        ...newTask,
                        project: e.target.value,
                      })
                    }
                  >
                    <option value="">Select Project</option>

                    {projects.map((project) => (
                      <option key={project.id} value={project.name}>
                        {project.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label>Status</label>

                  <select
                    value={newTask.status}
                    onChange={(e) =>
                      setNewTask({
                        ...newTask,
                        status: e.target.value,
                      })
                    }
                  >
                    <option>Pending</option>
                    <option>In Progress</option>
                    <option>Completed</option>
                  </select>
                </div>

                <div className="modal-actions">
                  <button
                    type="button"
                    className="secondary-btn"
                    onClick={() => setShowTaskModal(false)}
                  >
                    Cancel
                  </button>

                  <button type="submit" className="primary-btn">
                    Add Task
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
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
            title="Total Users"
            value={users.length}
            icon={<FiUsers />}
            change="Live Data"
            changeType="positive"
          />

          <DashboardCard
            title="Projects Created"
            value={projects.length}
            icon={<FiFolder />}
            change="Live Data"
            changeType="positive"
          />

          <DashboardCard
            title="Active Tasks"
            value={tasks.filter((task) => task.status !== "Completed").length}
            icon={<FiCheckSquare />}
            change="Live Data"
            changeType="positive"
          />

          <DashboardCard
            title="Tasks Completed"
            value={tasks.filter((task) => task.status === "Completed").length}
            icon={<FiCheckCircle />}
            change="Live Data"
            changeType="positive"
          />
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
              <p>Configure application notifications.</p>
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
     LOGOUT
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
