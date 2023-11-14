import GithubIcon from '../../assets/svg/github.svg';
import GithubIconBlue from '../../assets/svg/github-blue.svg';
import LinkedinIcon from '../../assets/svg/linkedin.svg';
import LinkedinIconBlue from '../../assets/svg/linkedin-blue.svg';
import CvIcon from '../../assets/svg/cv.svg';
import CvIconBlue from '../../assets/svg/cv-blue.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_social">
        <div className="footer_social_left">
          <a href='https://github.com/L-maillere'>
            <img src={GithubIcon} alt="github" className="footer_icon github"/>
            <img src={GithubIconBlue} alt="github" className="footer_icon github blue"/>
          </a>
          <a href='https://www.linkedin.com/in/louis-maillere/'>
            <img src={LinkedinIcon} alt="github" className="footer_icon linkedin"/>
            <img src={LinkedinIconBlue} alt="github" className="footer_icon linkedin blue"/>
          </a>
        </div>
        <a href='#empty'>
          <img src={CvIcon} alt="cv" className="footer_icon cv"/>
          <img src={CvIconBlue} alt="cv" className="footer_icon cv blue"/>
        </a>
      </div>
      <h4>Copyright © Louis Maillere - Web Welder <br /> Tous droits réservés </h4>
    </footer>
  )
}

export default Footer;