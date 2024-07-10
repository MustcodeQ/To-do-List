import React from 'react';
import './Sidebar.css';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Must code</h2>
      </div>
      <ul className="sidebar-list">
        <li className="sidebar-item">
          <i className="fa-solid fa-house"></i>
          <span>Management</span>
        </li>
        <li className="sidebar-item">
          <i className="fa-solid fa-bullseye"></i>
          <span>Goals</span>
        </li>
        <li className="sidebar-item">
          <i className="fa-solid fa-chart-line"></i>
          <span>Time Analyse</span>
        </li>
        <li className="sidebar-item">
          <i className="fa-solid fa-cog"></i>
          <span>Settings</span>
        </li>
        <li className="sidebar-item">
          <i className="fa-solid fa-cogs"></i>
          <span>Custom Services</span>
        </li>
      </ul>
    </div>
  );
}
