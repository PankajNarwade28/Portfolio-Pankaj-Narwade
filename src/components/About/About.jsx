import React from "react";
import "./About.css";
export const About = () => {
  return (
    <>
      <div className="hero-container" id="About">
        <div className="hero-img" data-aos="fade-right">
          <div className="hero-section1">
            <div className="image">
              <img
                src="./assets/images/image-02.png"
                alt=""
                className="image"
              />
            </div>
          </div>
        </div>
        <div className="hero-content about-section" data-aos="fade-left">
          <h1 className="heading" data-aos="fade-up">
            About Me
          </h1>
          <p className="para">
            Hello! I'm <strong className="blue">Pankaj Digambar Narwade</strong>
            , a passionate and motivated MERN Stack Developer and a recent
            <b> Bachelor of Computer Applications (BCA) </b>graduate from
            G.S.G.College Umarkhed. With a strong foundation in Programming and
            web development, and a keen interest in building dynamic and
            responsive web applications, I am excited to begin my professional
            journey in the tech industry.
          </p>
          <div>
            <table>
              <tr>
                <th>Education </th>
                <th>School</th>
                <th>Marks</th>
                <th>Year</th>
              </tr>
              <tr>
                <td>BCA</td>
                <td>Gsg College </td>
                <td>8.0</td>
                <td>2021-24</td>
              </tr>
              <tr>
                <td>HSC</td>
                <td>Gsg jr College </td>
                <td>93.67%</td>
                <td>2020-21</td>
              </tr>
              <tr>
                <td>SSC</td>
                <td>MJPV </td>
                <td>84.20%</td>
                <td>2018-19</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
