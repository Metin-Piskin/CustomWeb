import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  FaLinkedinIn,
  FaXTwitter,
  FaGithub,
  FaInstagram,
} from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

import "./RightHeader.css";

const RightHeader = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const [showHomeText, setShowHomeText] = useState(false);
  const [showVisitText, setShowVisitText] = useState(false);
  const [showAboutText, setShowAboutText] = useState(false);
  const [showContactText, setShowContactText] = useState(false);
  const [showLinkText, setShowLinkText] = useState(false);

  useEffect(() => {
    const timeoutHomeId = setTimeout(() => {
      setShowHomeText(true);
    }, 100);
    const timeoutVisitId = setTimeout(() => {
      setShowVisitText(true);
    }, 150);
    const timeoutAboutId = setTimeout(() => {
      setShowAboutText(true);
    }, 200);
    const timeoutContactId = setTimeout(() => {
      setShowContactText(true);
    }, 250);
    const timeoutLinkId = setTimeout(() => {
      setShowLinkText(true);
    }, 300);
    return () => {
      clearTimeout(timeoutHomeId);
      clearTimeout(timeoutVisitId);
      clearTimeout(timeoutAboutId);
      clearTimeout(timeoutContactId);
      clearTimeout(timeoutLinkId);
    };
  }, []);

  const handleLinkedinInIconClick = () => {
    const targetUrl =
      "https://www.linkedin.com/in/metin-pi%C5%9Fkin-9489b3245/";
    window.location.href = targetUrl;
  };

  const handleTwitterIconClick = () => {
    const targetUrl = "https://twitter.com/MtnPskn";
    window.location.href = targetUrl;
  };

  const handleInstagramIconClick = () => {
    const targetUrl = "https://www.instagram.com/metin_piskin/";
    window.location.href = targetUrl;
  };

  const handleGithubIconClick = () => {
    const targetUrl = "https://github.com/Metin-Piskin";
    window.location.href = targetUrl;
  };

  const handleMailIconClick = () => {
    const emailAddress = "metin_piskin@outlook.com";
    const mailtoLink = `mailto:${emailAddress}`;
    window.open(mailtoLink, "_blank");
  };

  return (
    <div className="RightHeaderContainer">
      <ul className="RightHeaderPageListContainer">
        <li className="RightHeaderPageList">
          <Link
            className={`RightHeaderPageListLink ${
              showHomeText ? "visible" : ""
            }`}
            style={currentPath === "/" ? { color: "#FE5406" } : {}}
            to="/"
          >
            HOME
          </Link>
        </li>
        <li className="RightHeaderPageList">
          <Link
            className={`RightHeaderPageListLink ${
              showVisitText ? "visible" : ""
            }`}
            style={currentPath === "/visit" ? { color: "#FE5406" } : {}}
            to="/visit"
          >
            VISIT US
          </Link>
        </li>
        <li className="RightHeaderPageList">
          <Link
            className={`RightHeaderPageListLink ${
              showAboutText ? "visible" : ""
            }`}
            style={currentPath === "/about" ? { color: "#FE5406" } : {}}
            to="/about"
          >
            ABOUT US
          </Link>
        </li>
        <li className="RightHeaderPageList">
          <Link
            className={`RightHeaderPageListLink ${
              showContactText ? "visible" : ""
            }`}
            style={currentPath === "/contact" ? { color: "#FE5406" } : {}}
            to="/contact"
          >
            CONTACT
          </Link>
        </li>
      </ul>
      <div
        className={`RightHeaderBottomContainer ${
          showLinkText ? "visible" : ""
        }`}
      >
        <FaLinkedinIn
          size={15}
          onClick={handleLinkedinInIconClick}
          style={{ cursor: "pointer" }}
        />
        <FaXTwitter
          size={15}
          onClick={handleTwitterIconClick}
          style={{ cursor: "pointer" }}
        />
        <FaInstagram
          size={15}
          onClick={handleInstagramIconClick}
          style={{ cursor: "pointer" }}
        />
        <FaGithub
          size={15}
          onClick={handleGithubIconClick}
          style={{ cursor: "pointer" }}
        />
        <IoIosMail
          size={15}
          onClick={handleMailIconClick}
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

export default RightHeader;
