import React from "react";
import host from "../img/host.jpg";
import podcast1 from "../img/podcast1.jpg";
import blogimage from "../img/blogimage.jpg";

const About = () => {
  return (
    <div className="about_page">
      <div className="page_header_section"></div>
      <div className="about_hero">
        <div className="about_image">
          <img src={podcast1} alt="about us" className="first_image" />
          <img src={host} alt="about us" className="second_image" />
          <img src={blogimage} alt="about us" className="third_image" />
          <div className="underlay"></div>
        </div>
        <div className="about_content">
          <h4>About Us</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, at ducimus velit cum eum aliquid.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis voluptate fugit sapiente eveniet dolor doloribus rem
            tempora cumque aliquam molestiae!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            similique minus autem expedita quibusdam excepturi nisi vel aliquam
            accusantium magnam omnis, ab officiis quidem ea.
          </p>
          <div className="partners">
            <span className="partner">
              <img src={host} alt="aamedia" /> AAMedia 
            </span>
            <span className="partner">
              <img src={host} alt="rockcitymedia" /> RockcityMedia 
            </span>
          </div>
        </div>
      </div>
      <div className="mop">
        <h4>Meet Our Presenters</h4>
        <div className="pre_container">
          <div className="pre_card">
            <div className="pre_image">
              <img src={podcast1} alt="presenter" />
            </div>
            <div className="pre_profile">
              <h6 className="pre_name">Adegoke Michael</h6>
              <h6 className="prog">Orin Igbanni</h6>
            </div>
          </div>  
          <div className="pre_card">
            <div className="pre_image">
              <img src={podcast1} alt="presenter" />
            </div>
            <div className="pre_profile">
              <h6 className="pre_name">Adegoke Michael</h6>
              <h6 className="prog">Orin Igbanni</h6>
            </div>
          </div>  
          <div className="pre_card">
            <div className="pre_image">
              <img src={podcast1} alt="presenter" />
            </div>
            <div className="pre_profile">
              <h6 className="pre_name">Adegoke Michael</h6>
              <h6 className="prog">Orin Igbanni</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
