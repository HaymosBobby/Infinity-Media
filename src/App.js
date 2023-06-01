import { Navigate, Route, Routes } from "react-router-dom";
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
import { Context } from "./context/Context";
import { useContext } from "react";
// import { Context } from "./context/Context";

function App() {
  // console.log(user);
  const { user } = useContext(Context);

  // const [state ] =  useReducer(INITIAL_STATE);

  
  

  return (
    <div className="App">
      {/* <AuthContextProvder> */}
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
          {/* <Route path="/imedia-admin/dashboard" element={<Admin />} /> */}
          <Route
            exact
            path="/imedia-admin/login"
            element={
              user && user !== null ? (
                <Navigate to="/imedia-admin/dashboard" />
              ) : (
                <LogIn />
              )
            }
          />
          <Route exact path="/imedia-admin/signup" element={<SignUp />} />
        </Route>
        <Route element={<WithNav />}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/blogs" element={<Blogs />} />
          <Route exact path="/podcast/:id" element={<PodcastPage />} />
          <Route exact path="/blog/:id" element={<SingleBlog />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/programs" element={<Programs />} />
          <Route exact path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
      {/* </AuthContextProvider> */}
    </div>
  );
}

export default App;
