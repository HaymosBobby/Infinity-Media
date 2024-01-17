import { FiberManualRecord } from "@mui/icons-material";
import React from "react";
import HTMLReactParser from "html-react-parser";

// import Sidebar from "./Sidebar";

const BlogComp = ({ blog }) => {
  const {
    title,
    message,
    picOneURL,
    picTwoURL,
    userId,
    createdAt,
    categories,
  } = blog;

  const author = userId.username;
  const options = {
    // weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const iso = new Date(createdAt);

  const date = iso.toLocaleDateString("en-US", options);
  return (
    <>
      <div className="featured_image">
        <img src={picOneURL} alt="single blog" />
      </div>
      <div className="blog_info">
        <span className="txt_small">{author}</span>
        <FiberManualRecord sx={{ fontSize: 6 }} />
        <span className="txt_small">{date}</span>
        <FiberManualRecord sx={{ fontSize: 6 }} />
        <span className="txt_small">{categories[0]}</span>
      </div>
      <div className="title">
        <h4>{title}</h4>
      </div>
      <div className="single_blog_content">
        {/* <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, animi
          ratione voluptatem at beatae mollitia tenetur corporis ducimus eum
          dolorem, quae commodi fugit voluptatum, debitis neque cum porro
          recusandae ipsum aspernatur sapiente et nisi! Quaerat provident
          excepturi facere quasi illum exercitationem nihil iure, dolorem
          pariatur magni perferendis maxime possimus nesciunt! Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Assumenda modi impedit
          laboriosam doloremque quidem voluptas consectetur ea vitae fugit fuga
          nostrum, laborum obcaecati blanditiis rerum vel illum laudantium
          soluta eaque. Cumque tenetur laboriosam aperiam quia rerum atque
          voluptas, cum eveniet asperiores earum dicta minima ex autem harum
          ipsum veritatis animi.
        </p> */}
        <div className="imaged_paragraph">
          <img src={picTwoURL} alt="reference" />
          <div>{HTMLReactParser(message)}</div>
        </div>

        {/* <div>
          <h2>Subtitle</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
            accusantium inventore repellat officia non, vel autem ipsam quas
            reiciendis voluptatum quia sapiente similique! Quia, nemo
            reiciendis. Reiciendis eligendi voluptatibus tenetur ipsam doloribus
            autem enim fugiat, sint nostrum officia magnam consequatur totam
            sapiente culpa veritatis delectus, cum vel laudantium? Quam harum in
            illum quod, deserunt animi tempora neque natus aliquam nemo officia
            ipsum ducimus. Repellat maxime, saepe, maiores accusantium quos
            repudiandae vero, cum quae id autem nihil sunt molestiae
            necessitatibus sint?
          </p>
        </div> */}
      </div>
    </>
  );
};

export default BlogComp;
