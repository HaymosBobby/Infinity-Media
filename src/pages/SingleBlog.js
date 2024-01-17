// import axios from "axios";
// import Error from "../components/Error";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import BlogComp from "../components/BlogComp";
import Loader from "../components/Loader";
import Sidebar from "../components/Sidebar";
import { AppContext } from "../context/AppContext/Context";

const SingleBlog = () => {
  const [blog, setBlog] = useState({});
  const { id } = useParams();
  const { blogs } = useContext(AppContext);

  useEffect(() => {
    let blog =
      blogs &&
      blogs.length > 0 &&
      blogs.find((b) => {
        return b._id.toString() === id.toString();
      });
    setBlog(blog);
  }, [id, blogs]);

  return (
    <div className="single_blog_page">
      <div className="page_header_section"></div>
      <div className="container">
        <div className="single_blog">
          {!blog ? (
            <Loader />
          ) : (
            blog &&
            Object.entries(blog).length > 0 && (
              <BlogComp key={blog._id} blog={blog} />
            )
          )}
        </div>

        <Sidebar />
      </div>
    </div>
  );
};

export default SingleBlog;
// isLoading ? (
//   <Loader />
// ) : error ? (
//   <Error message={errorMsg} />
// ) :
// Object.keys(blog).length > 0 &&
