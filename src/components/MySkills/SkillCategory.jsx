import React from "react";
import TitleWrapper from "../UtilsComponents/TitleWrapper/TitleWrapper";

function SkillsCategory({ title, className, children }) {
  return (
    <div className={`my-skills_category ${className}`}>
      <TitleWrapper title={title} level="h3" className={className}/>
      {children}
    </div>
  )
}

export default SkillsCategory;