import React, { useState } from "react";
import { useNavigate } from "react-router-dom"

import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaRegUser } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";

import "./TopRightHeader.css";

const TopRightHeader = () => {
  const navigate= useNavigate();
  const [inputVisibility, setInputVisibility] = useState(false);
  const [showInputOn, setShowInputOn] = useState(false);

  const SearchClick = () => {
    const timeoutInputOnId = setTimeout(() => {
      setShowInputOn(!showInputOn);
    }, 100);
    setInputVisibility(!inputVisibility);
    return () => {
      clearTimeout(timeoutInputOnId);
    };
  };
  return (
    <div className="TopRightHeaderContainer">
      <HiOutlineShoppingBag style={{ cursor: "pointer" }} onClick={()=> navigate(`visit`)}/>
      <FaRegUser style={{ cursor: "pointer" }} onClick={()=> navigate(`login`)} />
      <FiSearch onClick={SearchClick} style={{ cursor: "pointer" }} />
      {inputVisibility ? (
        <input
          placeholder="Ara"
          className={`TopRightHeaderInput ${showInputOn ? "onvisible" : ""}`}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default TopRightHeader;
