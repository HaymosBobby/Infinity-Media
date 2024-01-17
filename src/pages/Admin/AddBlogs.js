// import { Editor } from "@tinymce/tinymce-react";
// import ReactQuill from "react-quill";
import JoditEditor from "jodit-react";
import axios from "axios";
import { useEffect, useMemo, useRef, useState } from "react";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import Select from "react-select";
import "react-quill/dist/quill.snow.css";
// import DOMPurify from "dompurify";
import Spinner from "../../components/Spinner";

const AddBlogs = () => {
  const editorRef = useRef(null);
  const placeholder = "message";

  const config = useMemo(() => {
    return {
      // readonly: false, // all options from https://xdsoft.net/jodit/docs/,
      placeholder: placeholder,
      height: "300px",
    };
  }, [placeholder]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [message, setMessage] = useState("");
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.token;
  const id = user.userDetails._id;

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/imedia-categories"
        );
        setCategories(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("excerpt", excerpt);
    formData.append("message", message);
    formData.append("image1", image1);
    formData.append("image2", image2);
    formData.append("userId", id);
    category.forEach((cat) => {
      formData.append("categories[]", cat.name);
    });

    try {
      setIsLoading(true);
      setError(false);
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
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(true);
      setErrorMessage(
        error.response ? error.response.data.message : error.message
      );
      console.log(error);
    }
  };

  return (
    <div className="add_blogs">
      <div className="top">
        <h1>Add new Blog</h1>
      </div>
      <div className="bottom">
        <div className="message">
          <p>{error ? errorMessage : ""}</p>
        </div>
        <form id="form_data" onSubmit={handleSubmit}>
          <div className="file_container">
            <small className="preview">Preview Images: </small>
            <div className="file_top">
              <div>
                <img
                  src={
                    image1 && image1 !== null
                      ? URL.createObjectURL(image1)
                      : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                  }
                  alt="primary"
                />
              </div>
              <div>
                <img
                  src={
                    image2 && image2 !== null
                      ? URL.createObjectURL(image2)
                      : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                  }
                  alt="secondary"
                />
              </div>
            </div>
            <div className="file_bottom">
              <div className="form_input">
                <label htmlFor="p_file">
                  Upload Primary Image: <DriveFolderUploadOutlined />
                </label>
                <input
                  type="file"
                  id="p_file"
                  onChange={(e) => {
                    setImage1(e.target.files[0]);
                  }}
                />
              </div>
              <div className="form_input">
                <label htmlFor="s_file">
                  Upload Secondary Image: <DriveFolderUploadOutlined />
                </label>
                <input
                  type="file"
                  id="s_file"
                  onChange={(e) => {
                    setImage2(e.target.files[0]);
                  }}
                />
              </div>
            </div>
          </div>
          <Select
            options={categories}
            value={category}
            onChange={(selectedOptions) => setCategory(selectedOptions)}
            getOptionLabel={(option) => option.name}
            getOptionValue={(option) => option.name}
            isMulti
            className="categories"
          />
          <div className="form_group">
            <div className="form_input">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                placeholder="title"
                id="title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="form_input">
              <label htmlFor="excerpt">Excerpt</label>
              <input
                type="text"
                placeholder="excerpt"
                id="excerpt"
                onChange={(e) => setExcerpt(e.target.value)}
              />
            </div>
            <div className="form_input">
              <label htmlFor="content">Message</label>
              <div className="message">
                <JoditEditor
                  ref={editorRef}
                  value={message}
                  onChange={(content) => setMessage(content)}
                  tabIndex={1}
                  config={config}
                  id="content"
                />
              </div>
            </div>
          </div>
          <button className="btn" type="submit">
            {isLoading ? <Spinner /> : "Create Blog"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBlogs;
