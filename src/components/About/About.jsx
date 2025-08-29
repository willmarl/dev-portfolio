import Portrait from "../../assets/portrait.png";
import HTML5 from "../../assets/tech-stack/HTML5.svg";
import CSS3 from "../../assets/tech-stack/CSS3.svg";
import JavaScript from "../../assets/tech-stack/JavaScript.svg";
import Git from "../../assets/tech-stack/Git.svg";
import GitHub from "../../assets/tech-stack/GitHub.svg";
import Figma from "../../assets/tech-stack/Figma.svg";
import Linux from "../../assets/tech-stack/Linux.svg";
import React from "../../assets/tech-stack/React.svg";
import Nodejs from "../../assets/tech-stack/Node.js.svg";
import MongoDB from "../../assets/tech-stack/MongoDB.svg";
import Express from "../../assets/tech-stack/Express.svg";
import Postman from "../../assets/tech-stack/Postman.svg";
import NGINX from "../../assets/tech-stack/NGINX.svg";
import GoogleCloud from "../../assets/tech-stack/Google Cloud.svg";
import "./About.css";

function About() {
  const icons = [
    <img src={HTML5} alt="HTML5" />,
    <img src={CSS3} alt="CSS3" />,
    <img src={JavaScript} alt="JavaScript" />,
    <img src={Git} alt="Git" />,
    <img src={GitHub} alt="GitHub" />,
    <img src={Figma} alt="Figma" />,
    <img src={Linux} alt="Linux" />,
    <img src={React} alt="React" />,
    <img src={Nodejs} alt="Node.js" />,
    <img src={MongoDB} alt="MongoDB" />,
    <img src={Express} alt="Express" />,
    <img src={Postman} alt="Postman" />,
    <img src={NGINX} alt="NGINX" />,
    <img src={GoogleCloud} alt="Google Cloud" />,
  ];

  const animationDuration = 30; // seconds

  // Auto-calculate delays for even spacing
  const shapes = icons.map((icon, index) => ({
    icon,
    delay: -(index * animationDuration) / icons.length,
  }));

  return (
    <section className="about">
      <div className="about__info">
        <div className="about__bio">
          <h2 className="about__title">William Marlette</h2>

          <div className="about__desc">
            I’m a fullstack developer with a focus on building custom business
            tools, from public websites to backend APIs and CRM dashboards. My
            recent work includes a full deployment for a real-world client —
            website, admin dashboard, and Square-integrated payment system. I
            love designing around both the user experience and system
            architecture — the start and the finish. Long-term, I’m working
            toward automating both digital and physical workflows, with a vision
            of combining software engineering, privacy-first infrastructure, and
            mechatronics. My homelab is where I prototype, learn, and experiment
            with that future.
          </div>
        </div>
        <div className="about__image">
          <img className="about__portrait" src={Portrait} alt="Image of me" />
        </div>
      </div>
      <div className="about__slider">
        {shapes.map((shape, index) => (
          <div
            key={index}
            className="about__slider__shape"
            style={{
              animationDelay: `${shape.delay}s`,
              animationDuration: `${animationDuration}s`,
            }}
          >
            <span className="about__slider__icon">{shape.icon}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
