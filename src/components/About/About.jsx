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
            Before writing a line of app code I was already building PCs,
            running a Proxmox/Unraid homelab, managing Linux servers, and
            setting up VPSes. The coding came later, once I wanted to build web
            UIs for the self-hosted stuff I was already running. I did a web dev
            bootcamp, learned MERN, then self-taught NestJS and Next.js. Now I
            build full-stack apps and the infrastructure that runs them:
            TypeScript, NestJS, Next.js, PostgreSQL, Docker, and whatever Linux
            server needs configuring. My homelab is always running something: a
            Blender render farm off a local 4090, ComfyUI for image gen, Home
            Assistant, game servers for friends. Most of my projects started as
            tools I wanted but couldn't find, so I built them.
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
