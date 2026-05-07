import Portrait from "../../assets/portrait.png";
import "./About.css";

const techStackModules = import.meta.glob("../../assets/tech-stack/*.svg", {
  eager: true,
});

function About() {
  const icons = Object.keys(techStackModules).map((path) => {
    const module = techStackModules[path];
    const name = path.split("/").pop().replace(".svg", "");
    return { name, src: module.default };
  });

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
        {icons.map((icon, index) => (
          <div key={index} className="about__slider__shape">
            <img
              className="about__slider__icon"
              src={icon.src}
              alt={icon.name}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
