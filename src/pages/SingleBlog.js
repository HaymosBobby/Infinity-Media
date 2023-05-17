import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BlogComp from "../components/BlogComp";
import Loader from "../components/Loader";

const SingleBlog = () => {
  const [blog, setBlog] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

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
      }
    };

    fetchData(id);
  }, [id, url]);

  console.log(blog);
  console.log(Object.keys(blog).length);
  return (
    <div className="single_blog_page">
      <div className="page_header_section"></div>

      {isLoading ? (
        <Loader />
      ) : error ? (
        "An Error Occured"
      ) : (
        Object.keys(blog).length > 0 && (
          <BlogComp
            key={blog.id}
            id={blog.id}
            title={blog.title}
            message={blog.message}
            picOne={blog.picOne.imageUrl}
            picTwo={blog.picTwo.imageUrl}
          />
        )
      )}
    </div>
  );
};

export default SingleBlog;
