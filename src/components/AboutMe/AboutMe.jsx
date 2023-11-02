import TitleWrapper from '../UtilsComponents/TitleWrapper/TitleWrapper';
import tosti from '../../assets/tosti.jpg';
import { Link } from 'react-router-dom';

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <div className='content-wrapper'>
      <TitleWrapper title = "My Story" level="h2"/>
      <div className="about-me_my-story">
        <div className='about-me_my-story_text'>
          <p>
            I've recently become a frontend web developer, but my passion for computing began a long time ago. At the age of 12, modded Minecraft servers were my first introduction to coding, along with my initial attempts to learn the C language through "Le site du zéro" (the predecessor of OpenClassrooms).
            After high school, I decided to fully embrace this passion and joined the 42 school in 2018.
            This year and a half immersion provided me with a strong foundation in programming. However, the need for financial independence led me down a different professional path as a salesman at Xiaomi.
            This 3-year experience taught me a lot, especially about teamwork, customer advice, and leadership.
          </p>
          <br />
          <p>
            In 2023, my aspiration to become a developer reignited and led me to OpenClassrooms, where I earned a diploma equivalent to an associate degree in frontend web development.
            This training allowed me to complete over 10 professional projects, which you can explore in the Portfolio section of this site.
            Today, armed with my recent training and diverse background, I'm ready to embark on this new chapter as a web developer, fueled by an eagerness to learn and unwavering determination.
          </p>
          <Link to="/portfolio" className="button">My Portfolio</Link>
        </div>
        <img src={tosti} alt="tosti" className="my-picture"/>
      </div>
      </div>
    </section>
  )
}

export default AboutMe;