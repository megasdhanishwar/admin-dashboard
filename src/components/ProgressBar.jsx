import React from 'react'

export default function ProgressBar({ title, progress, colorClass = "" }) {
  return (
    <div className="progress-item">
      <div className="progress-info">
        <span>{title}</span>
        <span>{progress}%</span>
      </div>

      <div className="progress-track">
        <div
          className={`progress-fill ${colorClass}`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
