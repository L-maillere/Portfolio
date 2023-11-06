import React from "react";


function ProjectSlide({ project, active }) {
  const slideClass = active ? "active" : "";

  return (
      <img 
        src={project.image} 
        alt={project.title}
        className={slideClass} 
      />
  )
}

export default ProjectSlide;