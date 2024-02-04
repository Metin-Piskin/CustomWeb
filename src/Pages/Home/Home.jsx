import React, { useEffect, useState } from "react";

import "./Home.css";
import Avatar from "../../assets/Avatar.png";

const Home= () => {
  const [showImage, setShowImage] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timeoutImgId = setTimeout(() => {
      setShowImage(true);
    }, 100);
    const timeoutTextId = setTimeout(() => {
      setShowText(true);
    }, 110);
    return () => {
      clearTimeout(timeoutImgId);
      clearTimeout(timeoutTextId);
    };
  }, []);
  return (
    <div className="HomeContainer">
      <div className={`HomeTextContainer ${showText ? "visible" : ""}`}>
        <p className="HomeOneText">Lorem, ipsum.</p>
        <p className="HomeTwoText">Lorem</p>
        <span className="HomeThreeText">
          20<span>24</span>
        </span>
        <p className="HomeFourText">Lorem, ipsum dolor.</p>
      </div>
      <img
        src={Avatar}
        alt=""
        className={`HomeLogoImg ${showImage ? "visible" : ""}`}
      />
    </div>
  );
};

export default Home;
