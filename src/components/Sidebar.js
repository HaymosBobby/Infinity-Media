import sideImage from "../img/ibackground.jpeg";
import infinity from  '../img/infinity.mp4';
import blogimage from "../img/blogimage.jpg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div>
        <img className="lead" src={sideImage} alt="Sidebar" />
      </div>
      <div className="lead_content">
        <h3>Infinity Media</h3>
        <h4>" The mirror to the world "</h4>
      </div>
      <div>
        <video className="watch" src={infinity} loop autoPlay muted controls />
      </div>
      <div className="divider">
        <div className="line left_line"></div>
        <h4>Explore</h4>
        <div className="line right_line"></div>
      </div>
      <div className="call_to_action">
        <img src={blogimage} alt="Sidebar" />
        <button >Click Here</button>
      </div>
    </div>
  );
};

export default Sidebar;
// loop='false' autoPlay='false'