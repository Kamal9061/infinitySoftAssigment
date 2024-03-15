import React, { useState } from "react";
import sideImg from "./images/sideimg.jpg";
import lastImg from "./images/lastImg.jpg";
import listData from "./listData.json";
import Vector from "./images/Vector.png"
import ladt from "./images/ladt.svg"
import { useNavigate } from "react-router-dom";

import "./index.css";

const Project = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate(); 

  const handleLiClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const back = () => {
    navigate(-1);
  };

  return (
    <div className="container-fluid">
      <div className="row py-4 px-2">
        <div>
          <i onClick={back} class="fa fa-arrow-left  back-button" aria-hidden="true"></i>
        </div>
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <div className="card mt-5 mb-5">
          <div class="wave"></div>
          <img className="wvaeImages" src={Vector}></img>
            <div className="card-body childrd">
              <div className="liDiv mt-2">
                {listData.map((item, index) => (
                  <li
                    key={index}
                    className={
                      index === activeIndex
                        ? "proactive"
                        : index === 2
                        ? "inhold"
                        : "proinactive"
                    }
                    onClick={() => handleLiClick(index)}
                  >
                    {item.text}
                    {activeIndex === index ? (
                      <i class="fa fa-arrow-right" aria-hidden="true"></i>
                    ) : (
                      ""
                    )}
                  </li>
                ))}
              </div>
              {activeIndex !== null && (
                <div>
                  <img className="sideImg" src={sideImg} alt="Side Image" />
                  {listData[activeIndex].description && (
                    <li className="downLi">
                      {listData[activeIndex].description}
                    </li>
                  )}
                </div>
              )}
            </div>
            <img src={ladt} className="lastimgsvg"></img>
          </div>
          <div className=" col-sm-8 col-12 m-auto">
            <div className="card">
              <div className="card-body middletag">
                <h1 className="h1tag">
                  <span>The </span>Difference
                </h1>
                <p>
                  Our vision is to be the most inspiring, nurturing, and
                  educational early learning academy. Focusing on individual
                  needs, we are committed to providing the highest quality of
                  early childhood education.
                </p>
              </div>
            </div>
          </div>
          <div className=" col-sm-10 col-12 m-auto">
            <div className="card">
              <div className="card-body lastSection">
                <div className="lastParagraph">
                  <h1 className="lastfirst">
                    The Empowered <span>Difference</span>
                  </h1>
                  <p>
                    At Empowered, we are not just a childcare centre, we are a
                    second home for your child. We are bringing in a new era of
                    childcare, enabling children to unearth delight in
                    education, cultivate enjoyment from social engagement, and
                    relish the joy of creativity. With a safe and supportive
                    environment, we prepare children for life, giving them the
                    best start to the brightest possible future.
                  </p>
                </div>
                <div>
                  <img className="lastImg" src={lastImg}></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
