import Blog from "../components/Blog";
import Loader from "../components/Loader";
import Sidebar from "../components/Sidebar";
import { useState, useEffect } from "react";
import axios from "axios";
import Error from "../components/Error";

const Blogs = () => {
  const [blogLists, setBlogLists] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const url = "http://localhost:5000/api/imedia-blogs";
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(url);
        const data = response.data.data;
        setBlogLists(data);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setError(true);
        if (!err.response) {
          return setErrorMsg(err.message);
        }
        setErrorMsg(err.response.data);
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
          <Error message={errorMsg} />
        ) : (
          <div className="blogs">
            {blogLists.length > 0 &&
              blogLists.map((blog) => {
                return (
                  <Blog
                    title={blog.title}
                    excerpt={blog.excerpt}
                    createdAt={blog.createdAt}
                    picOneURL={blog.picOneURL}
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
