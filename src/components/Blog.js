import { FiberManualRecord } from "@mui/icons-material";
// import blogimage from "../img/blogimage.jpg";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";


const Blog = ({ blog }) => {
  const { title, excerpt, createdAt, picOneURL, _id, userId } = blog;
  const author = userId.username;
  const iso = new Date(createdAt);
  // const date = iso.toLocaleDateString("en-US", options);
  const date = formatDistanceToNow(iso);
  // d.toLocaleDateString('sv-SE');
  return (
    <div className="card">
      <div className="card_content">
        <img className="card_image" src={picOneURL} alt={title} />
        <div className="card_info">
          <div className="blog_info">
            <span className="txt_small">{author}</span>
            <FiberManualRecord sx={{ fontSize: 6 }} />
            <span className="txt_small">{date} ago</span>
          </div>
          <div className="card_title">
            <Link to={`/blog/${_id}`}>
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
