import React, { useEffect, useState } from "react";

import "./AboutUs.css";
import Avatar from "../../assets/Avatar.png";

const AboutUs = () => {
  const [showImg, setShowImg] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timeoutImgId = setTimeout(() => {
      setShowImg(true);
    }, 100);
    const timeoutTitleId = setTimeout(() => {
      setShowTitle(true);
    }, 100);
    const timeoutTextId = setTimeout(() => {
      setShowText(true);
    }, 150);
    return () => {
      clearTimeout(timeoutImgId);
      clearTimeout(timeoutTitleId);
      clearTimeout(timeoutTextId);
    };
  }, []);

  return (
    <div className="AboutContainer">
      <img className={`AboutUsAvatarImg ${showImg ? "visible" : ""}`} src={Avatar} alt="" />
      <div className="AboutUsTextContainer">
        <h2 className={`AboutUsTitle ${showTitle ? "visible" : ""}`}>About Us</h2>
        <p className={`AboutUsText ${showText ? "visible" : ""}`}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos officiis
          culpa voluptatibus dolorem ea. Aperiam, officia neque, vel quae soluta
          consectetur quidem ab aspernatur enim non voluptas quod maxime ducimus
          ad ut, aut quam architecto repudiandae excepturi! Debitis, amet quod
          quis perferendis fuga exercitationem similique veniam voluptate
          tempora quas totam libero, numquam iusto cum sit porro. Iusto esse
          modi ullam ut sunt, omnis aliquam quas, adipisci nisi, deserunt optio
          vitae. Ipsum a ut adipisci explicabo, vitae officia sint dolorem!
          Obcaecati dolorum fuga sit dignissimos eligendi!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
