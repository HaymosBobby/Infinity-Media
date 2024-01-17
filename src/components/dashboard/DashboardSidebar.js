import { Link, useLocation } from "react-router-dom";
import {
  sideBarEditData,
  sideBarServicesData,
  sideBarUsefulData,
  sideBarUserData,
  sideBarViewData,
} from "../../util/SidebarData";
import { Dashboard } from "@mui/icons-material";
import logo from "../../img/ilogo.png";

const DashboardSidebar = () => {
  let location = useLocation();

  return (
    <div className="dashboard_sidebar">
      <Link to="/" className="top">
        <img src={logo} alt="imedia" className="logo" />
        <h3 className="lead_text">Infinity Media</h3>
      </Link>
      <div className="center">
        <div className="lists">
          <div className="func">
            <span>Main</span>
          </div>
          <Link to="/imedia-admin/dashboard">
            <div
              className={`list_item ${
                location.pathname === "/imedia-admin/dashboard" ? "active" : ""
              }`}
            >
              <Dashboard />
              <span className="name">Dashboard</span>
            </div>
          </Link>
        </div>
        <div className="lists">
          <div className="func">
            <span>View And Manage</span>
          </div>
          {sideBarViewData.map((data) => {
            return (
              <Link to={data.path} key={data.name}>
                <div
                  className={`list_item ${
                    location.pathname === data.path ? "active" : ""
                  }`}
                >
                  {data.icon}
                  <span className="name">{data.name}</span>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="lists">
          <div className="func">
            <span>Edit</span>
          </div>
          {sideBarEditData.map((data) => {
            return (
              <Link to={data.path} key={data.name}>
                <div
                  className={`list_item ${
                    location.pathname === data.path ? "active" : ""
                  }`}
                >
                  {data.icon}
                  <span className="name">{data.name}</span>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="lists">
          <div className="func">
            <span>Useful</span>
          </div>
          {sideBarUsefulData.map((data) => {
            return (
              <Link to={data.path} key={data.name}>
                <div
                  className={`list_item ${
                    location.pathname === data.path ? "active" : ""
                  }`}
                >
                  {data.icon}
                  <span className="name">{data.name}</span>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="lists">
          <div className="func">
            <span>Services</span>
          </div>
          {sideBarServicesData.map((data) => {
            return (
              <Link to={data.path} key={data.name}>
                <div
                  className={`list_item ${
                    location.pathname === data.path ? "active" : ""
                  }`}
                >
                  {data.icon}
                  <span className="name">{data.name}</span>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="lists">
          <div className="func">
            <span>User</span>
          </div>
          {sideBarUserData.map((data) => {
            return (
              <Link to={data.path} key={data.name}>
                <div
                  className={`list_item ${
                    location.pathname === data.path ? "active" : ""
                  }`}
                >
                  {data.icon}
                  <span className="name">{data.name}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
