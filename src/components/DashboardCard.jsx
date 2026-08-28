export default function DashboardCard({
  title,
  value,
  icon,
  change,
  changeType,
}) {
  return (
    <div className="dashboard-card">
      <div className="card-top">
        <div>
          <p className="card-title">{title}</p>

          <h2>{value}</h2>
        </div>

        <div className="card-icon">{icon}</div>
      </div>

      <p
        className={`card-change ${changeType === "negative" ? "negative" : ""}`}
      >
        {change} from last month
      </p>
    </div>
  );
}
