import React from "react";
import { Route, Routes } from "react-router-dom";
import Blogs from "./pages/Blogs";
import Home from "./pages/Home";
import PodcastPage from "./pages/PodcastPage";
import SingleBlog from "./pages/SingleBlog";
import Admin from "./pages/Admin/Admin";
import AddBlogs from "./components/dashboard/AddBlogs";
import AddPodcasts from "./components/dashboard/AddPodcasts";
import AddPrograms from "./components/dashboard/AddPrograms";
import WithoutNav from "./WithComponents/WithoutNav";
import WithNav from "./WithComponents/WithNav";
import Dashboard from "./WithComponents/Dashboard";

import "./styles/app.scss";
import LogIn from "./pages/Admin/LogIn";
import SignUp from "./pages/Admin/SignUp";
// import { AuthContextProvider } from "./context/AuthContext";
// import ProtectedRoutes from "./components/ProtectedRoutes";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
// import axios from "axios";
// import { useState } from "react";
// import { useEffect } from "react";

function App() {
  // const [blogLists, setBlogLists] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get("http://localhost:8080/api/imedia-blogs");
  //     console.log(response);
  //     // setBlogLists(respons);
  //   };

  //   fetchData();
  // }, [data]);

  // console.log(blogLists);

  return (
    <div className="App">
      {/* <AuthContextProvder> */}
      <Routes>
        <Route path="/imedia-admin/dashboard" element={<Dashboard />}>
          <Route index element={<Admin />} />
          <Route path="add-posts" element={<AddBlogs />} />
          <Route path="add-podcasts" element={<AddPodcasts />} />
          <Route path="add-programs" element={<AddPrograms />} />
        </Route>
        <Route element={<WithoutNav />}>
          <Route path="/imedia-admin/dashboard" element={<Admin />} />
          <Route exact path="/imedia-login" element={<LogIn />} />
          <Route exact path="/imedia-signup" element={<SignUp />} />
        </Route>
        <Route element={<WithNav />}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/blogs" element={<Blogs />} />
          <Route exact path="/podcast/:id" element={<PodcastPage />} />
          <Route exact path="/blog/:id" element={<SingleBlog />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
      {/* </AuthContextProvider> */}
    </div>
  );
}

export default App;
