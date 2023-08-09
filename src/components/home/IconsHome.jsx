import React, { useState } from "react";
import { Link } from "react-router-dom";

import IconGit from "../../images/iconmonstr-github-1.svg";
import Skills from "../../images/skills.png";
import Contacts from "../../images/contacts.png";
import Project from "../../images/projects.png";
import MeImg from "../../images/eu.png";

export default function IconsHome() {
  const icons = [
    {
      image: Skills,
      name: "Skills",
    },
    {
      image: MeImg,
      name: "about-me",
    },
    {
      image: Contacts,
      name: "contacts",
    },
    {
      image: Project,
      name: "projects",
    },
  ];

  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleMouseOver = (iconIndex) => () => {
    setHoveredIcon(iconIndex);
  };

  const handleMouseOut = () => {
    setHoveredIcon(null);
  };

  return (
    <div className="flex justify-center items-center">
      {icons.map((icon, index) => (
        <div key={index}>
          <div className="flex justify-center m-12">
            {hoveredIcon === index && (
              <Link to={`/${icon.name.toLowerCase()}`}>
                <h1
                  className="font-bold bg-gradient-to-r text-transparent bg-clip-text from-orange-400 to-orange-600
                  hover:from-orange-600 hover:to-orange-700 transition-all hover:border-b-2 hover:border-orange-600
                  sm:text-2xl md:text-3xl lg:text-6xl"
                >
                  {icon.name}
                </h1>
              </Link>
            )}
          </div>
          <div className="m-8">
            <Link to={`/${icon.name.toLowerCase()}`}>
              <img
                src={icon.image}
                alt=""
                className="w-56 h-56"
                onMouseOver={handleMouseOver(index)}
                onMouseOut={handleMouseOut}
              />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
