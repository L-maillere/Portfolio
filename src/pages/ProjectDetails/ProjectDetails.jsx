import { useParams } from "react-router-dom";
import projectsData from "../../components/MyProjects/projectsData";
import TitleWrapper from "../../components/UtilsComponents/TitleWrapper/TitleWrapper";
import Error from "../Error/Error";

function ProjectDetails() {
  const { projectUrl } = useParams();
  const project = projectsData.find(project => project.detailsUrl === projectUrl);

  if (!project) {
    return <Error />;
  }

  return (
    <section className="project-details">
      <TitleWrapper title = {project.title} level = "h1" />
      <div className="project-details_img">
        <img src={project.image} alt={project.title} />
        <div className="project-details_img-buttons">
          <a href={project.live} target="_blank" rel="noreferrer">Voir le site</a>
          <a href={project.github} target="_blank" rel="noreferrer">Voir le code</a>
        </div>
      </div>
      <div className="project-details_tags">
        {project.tags.map(tag => <span key={tag}>{tag}</span>)}
      </div>
      <div className="project-details_description">
        <TitleWrapper title="Description du projet" level="h2" />
        <p>{project.scenario}</p>
        <TitleWrapper title="Compétences évaluées" level="h2" />
        <ul className="project-details_skills">
        {project.skills.map(skill => <li key={skill}>{skill}</li>)}
        </ul>
      </div>
    </section>
  )
}

export default ProjectDetails;