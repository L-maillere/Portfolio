import { React, useEffect, useRef } from "react";

function ThumbnailBar({ projects, currentSlide, changeSlide }) {
  const thumbnailBarRef = useRef(); // Référence à la barre de miniatures

  useEffect(() => {
    const thumbnailBar = thumbnailBarRef.current;
    if (thumbnailBar) {
      const activeThumbnail = thumbnailBar.children[currentSlide]; // Obtient la miniature active en utilisant currentSlide
      if (activeThumbnail) {
        // Calculer la position de défilement pour centrer la miniature
        const scrollX = activeThumbnail.offsetLeft + activeThumbnail.clientWidth / 2 - thumbnailBar.clientWidth / 2;
        thumbnailBar.scroll({ left: scrollX, behavior: 'smooth' });
      }
    }
  }, [currentSlide]); // Se déclenche lorsque currentSlide change

  return (
    <div className="my-projects_thumbnail-bar" ref={thumbnailBarRef}>
      {projects.map((project, index) => (
        <img
          key={project.id}
          src={project.image}
          alt={project.title}
          className={`thumbnail ${index === currentSlide ? 'active' : ''}`}
          onClick={() => changeSlide(index)}
        />
      ))}
    </div>
  );
}

export default ThumbnailBar;