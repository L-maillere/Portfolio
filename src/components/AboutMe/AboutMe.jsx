import TitleWrapper from '../UtilsComponents/TitleWrapper/TitleWrapper';
import photoCV from '../../assets/photo_cv.jpg';
import { Link } from 'react-router-dom';

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <div className='content-wrapper'>
      <TitleWrapper title = "Mon histoire" level="h2"/>
      <div className="about-me_my-story">
        <div className='about-me_my-story_text'>
          <p>
            Je suis développeur web frontend depuis peu, mais ma passion pour l'informatique a débuté il y a longtemps. Dès l'âge de 12 ans, avec les serveurs Minecraft moddés comme première approche de code, ainsi que mes premières tentatives d'apprentissage du langage C grâce au "site du zéro" (ancêtre d'OpenClassrooms). 
            Après le lycée, j'ai décidé d'embrasser pleinement cette passion et je suis entré à l'école 42 en 2018. 
            Cette immersion d'un an et demi m'a donné une solide base en programmation, mais le besoin d'être indépendant financièrement m'a mis sur un autre chemin professionnel en tant que vendeur chez Xiaomi. 
            Cette expérience de 3 ans m'a beaucoup enseigné notamment sur le travail en équipe, le conseil client et le leadership.
          </p>
          <br />
          <p>
            En 2023, mon aspiration à devenir développeur s'est ravivée et m'a mené à OpenClassrooms, où j'ai obtenu un diplôme de niveau BAC+2 en développement web frontend. 
            Cette formation m'a permis de réaliser plus de 10 projets professionnalisants, que vous pouvez découvrir dans la section Portfolio de ce site. 
            Aujourd'hui, grâce à ma récente formation et à mon parcours varié, je suis prêt à entamer ce nouveau chapitre en tant que développeur web, avec une soif d'apprendre et une motivation à toute épreuve.
          </p>
          <Link to="/portfolio" className="button">Mon portfolio</Link>
        </div>
        <img src={photoCV} alt="tosti" className="my-picture"/>
      </div>
      </div>
    </section>
  )
}

export default AboutMe;