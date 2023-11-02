import Html5svg from '../../assets/svg/skills/html5.svg';
import Css3svg from '../../assets/svg/skills/css3.svg';
import Jssvg from '../../assets/svg/skills/javascript.svg';
import Reactsvg from '../../assets/svg/skills/react.svg';
import Reduxsvg from '../../assets/svg/skills/redux.svg';
import Sasssvg from '../../assets/svg/skills/sass.svg';
import Pixisvg from '../../assets/svg/skills/pixi.svg';
import LightHousesvg from '../../assets/svg/skills/lighthouse.svg';
import Wavesvg from '../../assets/svg/skills/wave.svg';
import Jasminesvg from '../../assets/svg/skills/jasmine.svg';
import Jestsvg from '../../assets/svg/skills/jest.svg';
import Nodejssvg from '../../assets/svg/skills/nodejs.svg';
import MongoDBsvg from '../../assets/svg/skills/mongodb.svg';
import Githubsvg from '../../assets/svg/skills/github.svg';
import Notionsvg from '../../assets/svg/skills/notion.svg';
import VSCodesvg from '../../assets/svg/skills/vscode.svg';
import Npmsvg from '../../assets/svg/skills/npm.svg';
import Figmasvg from '../../assets/svg/skills/figma.svg';
import ChatGPTsvg from '../../assets/svg/skills/chatgpt.svg';
import GitCopilotsvg from '../../assets/svg/skills/gitcopilot.svg';
import Swaggersvg from '../../assets/svg/skills/swagger.svg';

export const frontendSkills = [
  { name: 'HTML5', icon: Html5svg },
  { name: 'CSS3', icon: Css3svg },
  { name: 'Sass', icon: Sasssvg },
  { name: 'React', icon: Reactsvg },
  { name: 'Redux', icon: Reduxsvg },
  { name: 'JavaScript', icon: Jssvg },
  { name: 'PixiJS', icon: Pixisvg },
];

export const otherSkillsCategories = [
  { 
    title: 'SEO', 
    skills: [
      { name: 'Lighthouse', icon: LightHousesvg},
      { name: 'Wave', icon: Wavesvg},
    ] 
  },
  { 
    title: 'Testing', 
    skills: [
      { name: 'Jasmine', icon: Jasminesvg},
      { name: 'Jest', icon: Jestsvg},
    ] 
  },
  { 
    title: 'Backend', 
    skills: [
      { name: 'Node.js', icon: Nodejssvg},
      { name: 'MongoDB', icon: MongoDBsvg},
    ] 
  },
  { 
    title: 'Developer Utilities', 
    skills: [
      { name: 'GitHub', icon: Githubsvg},
      { name: 'Notion', icon: Notionsvg},
      { name: 'VS Code', icon: VSCodesvg},
      { name: 'Npm', icon: Npmsvg},
      { name: 'Figma', icon: Figmasvg},
      { name: 'ChatGPT', icon: ChatGPTsvg},
      { name: 'GitCopilot', icon: GitCopilotsvg},
      { name: 'Swagger', icon: Swaggersvg},
    ] 
  }
];