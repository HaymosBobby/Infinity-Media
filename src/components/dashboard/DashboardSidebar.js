import { Link, useLocation } from "react-router-dom";
import { sideBarEditData, sideBarViewData } from "../../util/SidebarData";
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
      </div>
      <div className="bottom"></div>
    </div>
  );
};

export default DashboardSidebar;
