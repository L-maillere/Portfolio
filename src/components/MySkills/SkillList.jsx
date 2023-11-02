import React from "react";

function SkillList({ skills }) {
  return (
    <ul className="my-skills_list">
      {skills.map(skill => (
        <li key={skill.name}>
          <img src={skill.icon} alt={skill.name} />
          <span>{skill.name}</span>
        </li>
      ))}
    </ul>
  )
}

export default SkillList;