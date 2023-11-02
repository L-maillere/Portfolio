import slash from '../../../assets/svg/slash.svg';

function TitleWrapper({ title, className, level = "h2" }) {
  let Heading;

  switch(level) {
    case "h1":
      Heading = "h1";
      break;
    case "h3":
      Heading = "h3";
      break;
    case "h4":
      Heading = "h4";
      break;
    case "h5":
      Heading = "h5";
      break;
    case "h6":
      Heading = "h6";
      break;
    default:
      Heading = "h2";
  }

  return (
    <div className={`title-wrapper ${className} ${level}`}>
      <img src={slash} alt="slash" className="slash"/>
      <Heading>{title}</Heading>
    </div>
  )
}

export default TitleWrapper;