import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BlogComp from "../components/BlogComp";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Sidebar from "../components/Sidebar";

const SingleBlog = () => {
  const [blog, setBlog] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const { id } = useParams();

  const url = `http://localhost:5000/api/imedia-blogs/${id}`;

  useEffect(() => {
    const fetchData = async (id) => {
      setIsLoading(true);
      try {
        const response = await axios.get(url);
        const data = response.data;

        // console.log(data);
        data && setBlog(data);
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

    fetchData(id);
  }, [id, url]);

  // console.log(blog);
  // console.log(Object.keys(blog).length);
  return (
    <div className="single_blog_page">
      <div className="page_header_section"></div>
      <div className="container">
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Error message={errorMsg} />
        ) : (
          Object.keys(blog).length > 0 && (
            <BlogComp
              key={blog._id}
              id={blog._id}
              title={blog.title}
              message={blog.message}
              picOne={blog.picOne}
              picTwo={blog.picTwo}
            />
          )
        )}

        <Sidebar />
      </div>
    </div>
  );
};

export default SingleBlog;
