import { FiberManualRecord } from "@mui/icons-material";
// import blogimage from "../img/blogimage.jpg";
import { Link } from "react-router-dom";

const Blog = ({ title, excerpt, createdAt, picOne, id }) => {
  const iso = new Date(createdAt);
  const date = iso.toLocaleDateString("sv-SE");
  // d.toLocaleDateString('en-US');
  return (
    <div className="card">
      <div className="card_content">
        <img className="card_image" src={picOne} alt={title} />
        <div className="card_info">
          <div className="blog_info">
            <span className="txt_small">Infinity media</span>
            <FiberManualRecord sx={{ fontSize: 6 }} />
            <span className="txt_small">{date}</span>
          </div>
          <div className="card_title">
            <Link to={`/blog/${id}`}>
              <h4>{title}</h4>
            </Link>
          </div>
          <div className="card_excerpt">
            <p>{excerpt}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
