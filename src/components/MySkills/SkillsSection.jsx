import React from "react";
import TitleWrapper from "../UtilsComponents/TitleWrapper/TitleWrapper";

function SkillsSection({ title, children, className }) {
  return (
    <>
    <TitleWrapper title={title} level="h2" className={className} />
    <div className={`my-skills_section ${className || ''}`}>
      {children}
    </div>
    </>
  )
}

export default SkillsSection;