import {
  NotificationsNoneOutlined,
  ChatBubbleOutlineOutlined,
  ListOutlined,
  WbSunny,
  FullscreenExitOutlined,
  SearchOutlined,
  ArrowDropDown,
} from "@mui/icons-material";
import profile from "../../img/host.jpg";
import { Link, Navigate } from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";

const DashNav = () => {
  // const navigate = useNavigate();
  const { dispatch } = useContext(Context);
  const [open, setOpen] = useState(false);
  const openDrop = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  const handleLogout = () => {
    dispatch({type: "LOGOUT"});
    localStorage.clear();
    <Navigate to="/imedia-admin/login" replace={true} />;
  };

  return (
    <div className="dash_nav">
      <div className="dash_nav_container">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlined />
        </div>
        <div className="items">
          {/* <div className="item">
            <LanguageOutlined />
            English
          </div> */}
          <div className="item">
            {/* {darkMode ? <WbSunny /> : <DarkModeOutlined />} onClick={handleDarkMode} */}
            <WbSunny />
          </div>
          <div className="item">
            <FullscreenExitOutlined />
          </div>
          <div className="item not">
            <NotificationsNoneOutlined />
            <div className="counter">1</div>
          </div>
          <div className="item not">
            <ChatBubbleOutlineOutlined />
            <div className="counter">4</div>
          </div>
          <div className="item">
            <ListOutlined />
          </div>
          <div className="item">
            <img src={profile} alt="" className="avatar" />
            <div className="user">
              <span onClick={openDrop}>
                admin
                <ArrowDropDown />
              </span>

              <div className={`user_dropdown ${open ? "openDrop" : ""}`}>
                <ul>
                  <li>
                    <Link to="/">Settings</Link>
                  </li>
                  <li onClick={handleLogout}>Log Out</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashNav;
