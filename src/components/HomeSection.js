
import { PlayArrow } from "@mui/icons-material";

const HomeSection = () => {
  return (
    <div className="home_section">
      <div>
        <div className="content">
          <h1><span>Experience</span> the best of <span className="typewriter">Entertainment</span></h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, dolore corporis mollitia necessitatibus officia ab sint ipsa laboriosam at iure.</p>
          <button><PlayArrow className="play"/> Start listening</button>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
