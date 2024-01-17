import Blog from "../components/Blog";
import Loader from "../components/Loader";
import Sidebar from "../components/Sidebar";
import { useContext } from "react";
import Error from "../components/Error";
import { AppContext } from "../context/AppContext/Context";

const Blogs = () => {
  const { isLoadingB, errorB, errorMessageB, blogs } = useContext(AppContext);

  return (
    <div className="blogs_page">
      <div className="page_header_section"></div>

      <div className="container">
        {isLoadingB ? (
          <Loader />
        ) : errorB ? (
          <Error message={errorMessageB} />
        ) : (
          <div className="blogs">
            {blogs &&
              blogs.length > 0 &&
              blogs.map((blog) => {
                return <Blog blog={blog} key={blog._id} />;
              })}
          </div>
        )}
        <Sidebar />
      </div>
    </div>
  );
};

export default Blogs;
