import React from "react";
import SideBar from "../../components/dashboard/SideBar";
import HomeNav from "../../components/nav/HomeNav";
import DashboardHome from "./DashboardHome";

const Dashboard = () => {
  return (
    <div>
      <HomeNav />
      <SideBar />
      {}
      <DashboardHome/>
    </div>
  );
};

export default Dashboard;
