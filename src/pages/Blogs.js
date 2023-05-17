import Blog from "../components/Blog";
import Loader from "../components/Loader";
import Sidebar from "../components/Sidebar";
import { useState, useEffect } from "react";
import axios from "axios";

const Blogs = () => {
  const [blogLists, setBlogLists] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const url = "http://localhost:5000/api/imedia-blogs";
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(url);
        const data = response.data;
        setBlogLists(data);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setError(true);
      }
    };

    fetchData();
  }, [url]);

  // console.log(blogLists);

  return (
    <div className="blogs_page">
      <div className="page_header_section"></div>

      <div className="container">
        {isLoading ? (
          <Loader />
        ) : error ? (
          "An Error Occurred"
        ) : (
          <div className="blogs">
            {blogLists.length > 0 &&
              blogLists.map((blog) => {
                return (
                  <Blog
                    title={blog.title}
                    excerpt={blog.excerpt}
                    createdAt={blog.createdAt}
                    picOne={blog.picOne.imageUrl}
                    key={blog._id}
                    id={blog._id}
                  />
                );
              })}
          </div>
        )}
        <Sidebar />
      </div>
    </div>
  );
};

export default Blogs;