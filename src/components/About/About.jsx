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
            I’m a fullstack developer focused on building real tools that solve
            real problems — from public-facing business sites to backend APIs,
            admin dashboards, and homelab utilities. My recent work includes a
            full production deployment for a real client: website, CRM
            dashboard, appointment booking system, and Discord-integrated
            notifications. I like owning the full stack — from schema design to
            the UI people actually use. Long-term I’m working toward combining
            software engineering, privacy-first self-hosted infrastructure, and
            mechatronics. My homelab is where I prototype and experiment with
            that.
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
