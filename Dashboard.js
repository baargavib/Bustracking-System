import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Welcome to the Bus Tracking System</h1>
      <p>Select an option below:</p>
      <div>
        <Link to="/bus-tracking">
          <button style={{ margin: "10px", padding: "10px 20px" }}>Track Bus</button>
        </Link>
        <Link to="/profile">
          <button style={{ margin: "10px", padding: "10px 20px" }}>Profile</button>
        </Link>
        <Link to="/logout">
          <button style={{ margin: "10px", padding: "10px 20px", background: "red", color: "white" }}>Logout</button>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
