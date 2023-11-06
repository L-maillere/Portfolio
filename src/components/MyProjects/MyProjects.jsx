import React, { useEffect, useState } from "react";
import ProjectSlide from "./ProjectSlide";
import ProjectDescription from "./ProjectDescription";
import NavigationArrows from "./NavigationArrows";
import ThumbnailBar from "./ThumbnailBar";
import projectsData from "./projectsData";
import TitleWrapper from "../UtilsComponents/TitleWrapper/TitleWrapper";


function MyProjects() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === projectsData.length - 1 ? 0 : prevSlide + 1
      );
    }, 8000);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  const changeSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  }

  return (
    <div className="my-projects">
      <TitleWrapper title="Mes projets" level="h2" />
      <div className="my-projects_slider-wrapper">
        <NavigationArrows 
          totalSlides={projectsData.length}
          currentSlide={currentSlide}
          changeSlide={changeSlide}
        />
        <div className="my-projects_slider">
          {projectsData.map((project, index) => (
            <ProjectSlide
              key={project.id}
              project={project}
              active={index === currentSlide}
            />
          ))}
        </div>
        <ThumbnailBar 
          projects={projectsData}
          currentSlide={currentSlide}
          changeSlide={changeSlide}
        />
      </div>
      <ProjectDescription project={projectsData[currentSlide]} />
    </div>
  );
}

export default MyProjects;