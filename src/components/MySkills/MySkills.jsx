import React from "react";
import SkillsSection from "./SkillsSection";
import SkillCategory from "./SkillCategory";
import SkillList from "./SkillList";
import { frontendSkills, otherSkillsCategories } from "./skillsData";

function MySkills() {

  function renderSkillCategory(categoryTitle, skills, className, key) {
    return (
      <SkillCategory title={categoryTitle} key={key} className={className}>
        <SkillList skills={skills} />
      </SkillCategory>
    )
  }

  return (
    <section className="my-skills">
      <SkillsSection title='Mes compétences principales' className='principal'>
        {renderSkillCategory('Frontend', frontendSkills, 'principal')}
      </SkillsSection>
      <SkillsSection title='Mes autres compétences' className='other'>
        {otherSkillsCategories.map(category => 
          renderSkillCategory(category.title, category.skills, 'other' , category.title)
        )}
      </SkillsSection>
    </section>
  );
}

export default MySkills;