import React from "react";
import { Outlet } from "react-router";
import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import DashNav from "../components/dashboard/DashNav";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <DashboardSidebar />
      <div className="dash_child">
        <DashNav />
        <div className="dashboard_children">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
