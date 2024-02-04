import React from "react";

import "./VisitUs.css";
import ContentsCard from "../../Components/ContentsCard";
import Avatar from "../../assets/Avatar.png";

const VisitUs = () => {
  return (
    <div className="VisitContainer">
      <ContentsCard
        imageSrc={Avatar}
        title="Card Title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <ContentsCard
        imageSrc={Avatar}
        title="Card Title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <ContentsCard
        imageSrc={Avatar}
        title="Card Title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <ContentsCard
        imageSrc={Avatar}
        title="Card Title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <ContentsCard
        imageSrc={Avatar}
        title="Card Title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <ContentsCard
        imageSrc={Avatar}
        title="Card Title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <ContentsCard
        imageSrc={Avatar}
        title="Card Title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <ContentsCard
        imageSrc={Avatar}
        title="Card Title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
    </div>
  );
};

export default VisitUs;
