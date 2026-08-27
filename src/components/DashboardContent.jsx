import {
  FiGrid,
  FiUsers,
  FiShoppingBag,
  FiBarChart2,
  FiSettings,
  FiHelpCircle,
  FiLogOut,
  FiDollarSign,
  FiActivity,
} from "react-icons/fi";

import DashboardCard from "./DashboardCard";

export default function DashboardContent({ activeMenu }) {
  const cards = [
    {
      title: "Total Users",
      value: "12,450",
      icon: <FiUsers />,
      change: "+12.5%",
      changeType: "positive",
    },
    {
      title: "Total Orders",
      value: "1,248",
      icon: <FiShoppingBag />,
      change: "+8.2%",
      changeType: "positive",
    },
    {
      title: "Revenue",
      value: "₹84,500",
      icon: <FiDollarSign />,
      change: "+15.3%",
      changeType: "positive",
    },
    {
      title: "Active Sessions",
      value: "328",
      icon: <FiActivity />,
      change: "-2.4%",
      changeType: "negative",
    },
  ];

  const pageDetails = {
    Dashboard: {
      icon: <FiGrid />,
      title: "Dashboard Contents",
      description: "This is where the dashboard contents will be shown.",
    },

    Users: {
      icon: <FiUsers />,
      title: "User Contents",
      description: "This is where the user contents will be shown.",
    },

    Orders: {
      icon: <FiShoppingBag />,
      title: "Order Contents",
      description: "This is where the orders contents will be shown.",
    },

    Analytics: {
      icon: <FiBarChart2 />,
      title: "Analytics Contents",
      description: "This is where the analytics contents will be shown.",
    },

    Settings: {
      icon: <FiSettings />,
      title: "Settings Contents",
      description: "This is where the settings contents will be shown.",
    },

    "Help & Support": {
      icon: <FiHelpCircle />,
      title: "Help & Support",
      description: "This is where the help and support contents will be shown.",
    },

    Logout: {
      icon: <FiLogOut />,
      title: "Logout",
      description: "This is where the logout functionality will be handled.",
    },
  };

  const page = pageDetails[activeMenu];

  return (
    <div className="dashboard-content">
      {/* Show cards only for Dashboard */}
      {activeMenu === "Dashboard" && (
        <section className="stats-grid">
          {cards.map((card) => (
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
      )}

      {/* Page Content Placeholder */}
      <div className="placeholder-page">
        <div className="placeholder-icon">{page?.icon || <FiGrid />}</div>

        <h2>{page?.title || activeMenu}</h2>

        <p>
          {page?.description ||
            `This is where the ${activeMenu.toLowerCase()} contents will be shown.`}
        </p>
      </div>
    </div>
  );
}
