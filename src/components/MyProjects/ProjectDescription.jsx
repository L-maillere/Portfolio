import React from "react";
import { Link } from "react-router-dom";
import TitleWrapper from "../UtilsComponents/TitleWrapper/TitleWrapper";

function ProjectSlide({ project }) {
  return (
    <div className="my-projects_description">
      <TitleWrapper title={project.title} level="h3" />
      <p>{project.description}</p>
      <Link to={`/projects/${project.detailsUrl}`}>Plus de détails</Link>
    </div>
  )
}

export default ProjectSlide;