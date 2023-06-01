import { Editor } from "@tinymce/tinymce-react";

const AddBlogs = () => {

  const handleSubmit = () => {

  }
  
  return (
    <div className="add_blogs">
      <form
        action="http://localhost:5000/api/imedia-blogs"
        method="POST"
        encType="multipart/form-data"
        id="form_data"
        onSubmit={handleSubmit}
      >
        <div>
          <input className="blog_img" type="file" name="image1" />
          <input className="blog_img" type="file" name="image2" />
        </div>
        <div className="fore_content">
          <input type="text" placeholder="title" className="fore" name="title" />
          <input type="text" placeholder="excerpt" className="fore" name="excerpt" />
        </div>

        <div className="message_container">
          <div className="message">
            <Editor
              apiKey="jg2inr5c2519k4ut882bhoysxzfeivtkvdmxhba8zdq43ghq"
              textareaName="message"
              initialValue="Add some random text"
            />
          </div>
        </div>
        <button type="submit">Create Post </button>
      </form>

      <button>Log Out</button>
    </div>
  );
};

export default AddBlogs;
