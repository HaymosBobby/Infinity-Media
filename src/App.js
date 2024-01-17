import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Blogs from "./pages/Blogs";
import Home from "./pages/Home";
import PodcastPage from "./pages/PodcastPage";
import SingleBlog from "./pages/SingleBlog";
import Admin from "./pages/admin/Admin";
import AddBlogs from "./pages/admin/AddBlogs";
import AllBlogs from "./pages/admin/AllBlogs";
import AddPodcasts from "./pages/admin/AddPodcasts";
import AllPodcasts from "./pages/admin/AllPodcasts";
import AddPrograms from "./pages/admin/AddPrograms";
import WithoutNav from "./WithComponents/WithoutNav";
import WithNav from "./WithComponents/WithNav";
import Dashboard from "./WithComponents/Dashboard";

import "./styles/app.scss";
import LogIn from "./pages/admin/LogIn";
import SignUp from "./pages/admin/SignUp";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Programs from "./pages/Programs";
import { AuthContext } from "./context/AuthContext/Context";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext/Context";
import axios from "axios";

// https://images.getpng.net/uploads/preview/instagram-social-network-app-interface-icons-smartphone-frame-screen-template27-1151637511568djfdvfkdob.webp

function App() {
  const { user } = useContext(AuthContext);
  const { dispatch } = useContext(AppContext);
  const location = useLocation();

  useEffect(() => {
    const fetchPodcasts = async () => {
      dispatch({
        type: "FETCH_PODCAST_START",
      });
      try {
        const response = await axios.get(
          "http://localhost:5000/api/imedia-podcasts"
        );

        dispatch({
          type: "FETCH_PODCAST_SUCCESS",
          payload: response.data.data,
        });
      } catch (error) {
        dispatch({
          type: "FETCH_PODCAST_FAILURE",
          payload: error.response ? error.response.data.message : error.message,
        });
      }
    };

    const fetchBlogs = async () => {
      dispatch({
        type: "FETCH_BLOG_START",
      });
      try {
        const response = await axios.get(
          "http://localhost:5000/api/imedia-blogs"
        );

        dispatch({
          type: "FETCH_BLOG_SUCCESS",
          payload: response.data.data,
        });
      } catch (error) {
        dispatch({
          type: "FETCH_BLOG_FAILURE",
          payload: error.response ? error.response.data.message : error.message,
        });
      }
    };
    location.pathname !== "/imedia-admin/login" &&
      location.pathname !== "/imedia-admin/signup" &&
      fetchPodcasts();
    location.pathname !== "/imedia-admin/login" &&
      location.pathname !== "/imedia-admin/signup" &&
      fetchBlogs();
  }, [dispatch,location.pathname]);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/imedia-admin/dashboard"
          element={
            <ProtectedRoutes>
              <Dashboard />
            </ProtectedRoutes>
          }
        >
          <Route index element={<Admin />} />
          <Route path="add-posts" element={<AddBlogs />} />
          <Route path="all-posts" element={<AllBlogs />} />
          <Route path="add-podcasts" element={<AddPodcasts />} />
          <Route path="all-podcasts" element={<AllPodcasts />} />
          <Route path="add-programs" element={<AddPrograms />} />
        </Route>
        <Route element={<WithoutNav />}>
          <Route
            exact
            path="/imedia-admin/login"
            element={
              user && user !== null && user.isAdmin ? (
                <Navigate to="/imedia-admin/dashboard" />
              ) : (
                <LogIn />
              )
            }
          />
          <Route exact path="/imedia-admin/signup" element={<SignUp />} />
        </Route>
        <Route element={<WithNav />}>
          <Route exact index element={<Home />} />
          <Route exact path="/blogs" element={<Blogs />} />
          <Route exact path="/podcast/:id" element={<PodcastPage />} />
          <Route exact path="/blog/:id" element={<SingleBlog />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/programs" element={<Programs />} />
          <Route exact path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
      {/* <audio
        src={podcastUrl}
        ref={podcastRef}
        onTimeUpdate={timeUpdateHandler}
        onEnded={songEndHandler}
      ></audio> */}
    </div>
  );
}

export default App;
