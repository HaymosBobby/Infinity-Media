// import { Editor } from "@tinymce/tinymce-react";
// import JoditEditor from "jodit-react";
import axios from "axios";
import { useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "../../firebase";

const AddBlogs = () => {
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [message, setMessage] = useState("");
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);

  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.token;
  const id = user.userDetails._id;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("excerpt", excerpt);
    formData.append("message", message);
    formData.append("image1", image1);
    formData.append("image2", image2);
    formData.append("userId", id);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/imedia-blogs",
        formData,
        {
          headers: {
            "x-auth-token": token,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="add_blogs">
      <form
        // action="http://localhost:5000/api/imedia-blogs"
        // method="POST"
        // encType="multipart/form-data"
        id="form_data"
        onSubmit={handleSubmit}
      >
        <div>
          <input
            className="blog_img"
            type="file"
            // name="image1"
            onChange={(e) => {
              setImage1(e.target.files[0]);
            }}
          />
          <input
            className="blog_img"
            type="file"
            // name="image2"
            onChange={(e) => {
              setImage2(e.target.files[0]);
            }}
          />
        </div>
        <div className="fore_content">
          <input
            type="text"
            placeholder="title"
            className="fore"
            // name="title"
            // ref={titleRef}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="excerpt"
            className="fore"
            // name="excerpt"
            // ref={excerptRef}
            onChange={(e) => setExcerpt(e.target.value)}
          />
        </div>
        <div className="message_container">
          <div className="message">
            {/* <JoditEditor
              // apiKey="jg2inr5c2519k4ut882bhoysxzfeivtkvdmxhba8zdq43ghq"
              // textareaName="message"
              // initialValue="Add some random text"

              // onChange={e => setMessage(e.target.value)}
              ref={messageRef}
              tabIndex={1}
            /> */}
            <textarea
              name="message"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
        </div>
        <button type="submit">Create Post </button>
      </form>
    </div>
  );
};

export default AddBlogs;
