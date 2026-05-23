import { useState } from "react";
import Modal from "react-modal";
import Slider from "react-slick";
import "./Projects.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import invare1 from "../../assets/project-images/invare/invare-1.jpg";
import invare2 from "../../assets/project-images/invare/invare-2.jpg";
import invare3 from "../../assets/project-images/invare/invare-3.jpg";
import invare4 from "../../assets/project-images/invare/invare-4.jpg";
import invare5 from "../../assets/project-images/invare/invare-5.jpg";
import invare6 from "../../assets/project-images/invare/invare-6.jpg";
import invare7 from "../../assets/project-images/invare/invare-7.jpg";
import bbi1 from "../../assets/project-images/BBI/bbi-1.png";
import bbi2 from "../../assets/project-images/BBI/bbi-2.png";
import bbi3 from "../../assets/project-images/BBI/bbi-3.png";
import bbi4 from "../../assets/project-images/BBI/bbi-4.png";
import comfypick1 from "../../assets/project-images/ezcomfypick/comfypick-1.jpg";
import comfypick2 from "../../assets/project-images/ezcomfypick/comfypick-2.jpg";
import comfypick3 from "../../assets/project-images/ezcomfypick/comfypick-3.jpg";
import comfypick4 from "../../assets/project-images/ezcomfypick/comfypick-4.jpg";
import comfypick5 from "../../assets/project-images/ezcomfypick/comfypick-5.jpg";
import comfypick6 from "../../assets/project-images/ezcomfypick/comfypick-6.jpg";
import monno1 from "../../assets/project-images/monno/monno-1.jpg";
import monno2 from "../../assets/project-images/monno/monno-2.jpg";
import monno3 from "../../assets/project-images/monno/monno-3.jpg";
import monno4 from "../../assets/project-images/monno/monno-4.jpg";
import monno5 from "../../assets/project-images/monno/monno-5.jpg";
import monno6 from "../../assets/project-images/monno/monno-6.jpg";
import dect1 from "../../assets/project-images/DECT/DECT_1.jpg";
import dect2 from "../../assets/project-images/DECT/DECT_2.jpg";
import dect3 from "../../assets/project-images/DECT/DECT_3.jpg";
import dect4 from "../../assets/project-images/DECT/DECT_4.jpg";

// set app element for react-modal accessibility
Modal.setAppElement("#root");

function Projects() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const projects = [
    {
      id: "monno",
      title: "Monno",
      description:
        "My personal full-stack boilerplate, the base I build every new project on. NestJS backend + Next.js frontend in a pnpm monorepo (name comes from mono repo + NestJS + Next.js). Comes with everything I'd want on any new site: custom auth from scratch (username/password, OAuth, 2-token system, sessions with geolocation and risk scoring), role-based access, admin dashboard, BullMQ worker, file uploads (local or S3), Stripe infrastructure, rate limiting, Swagger docs, and 231 tests across unit, integration, API, and E2E. Also has an AI scaffolding CLI that generates structured prompts for adding new CRUD resources, so the AI stays on track instead of going off and inventing its own architecture.",
      tags: [
        "NestJS",
        "Nextjs",
        "Prisma",
        "PostgreSQL",
        "Redis",
        "BullMQ",
        "Boilerplate",
      ],
      links: [
        {
          type: "github",
          label: "GitHub repo",
          url: "https://github.com/willmarl/monno",
        },
        {
          type: "website",
          label: "Live demo",
          url: "https://willmarl.github.io/monno-demo/",
        },
      ],
      images: [
        { original: monno1 },
        { original: monno2 },
        { original: monno3 },
        { original: monno4 },
        { original: monno5 },
        { original: monno6 },
      ],
    },
    {
      id: "invare",
      title: "Invare",
      description:
        "Invare is a full-stack hardware inventory tracker for makers. You forget what you have, order duplicates, then wait 2 weeks for parts you already own. A 30-second lookup fixes that. Browse official community-curated units (Arduino boards, sensors, motors, etc.) with attached code snippets and library notes, clone them into your own inventory, or create custom entries. Built on my NestJS + Next.js boilerplate Monno. A complete rebuild of the original MERN version.",
      tags: [
        "Nextjs",
        "NestJS",
        "Prisma",
        "PostgreSQL",
        "Inventory Management",
      ],
      links: [
        {
          type: "website",
          label: "Live website",
          url: "https://invare.app/",
        },
      ],
      images: [
        { original: invare1 },
        { original: invare2 },
        { original: invare3 },
        { original: invare4 },
        { original: invare5 },
        { original: invare6 },
        { original: invare7 },
      ],
    },
    {
      id: "bbi",
      title: "Bonanza Breeze Inc",
      description:
        "Full-stack website and CRM for a Tampa-based HVAC startup. Customers can request appointments with an interactive booking calendar (real-time slot availability, conflict prevention, blocked days) or submit quote requests. Every new appointment and quote fires a Discord webhook so the owner gets notified instantly without checking an inbox. Admin dashboard covers customers, staff, calendar, quotes, appointments, and audit logs. Also consulted on domain registration, DNS setup, and self-hosted deployment on Oracle Cloud's free tier. Built on my NestJS + Next.js boilerplate Monno. A full rebuild of the original MERN version.",
      tags: [
        "Nextjs",
        "NestJS",
        "Prisma",
        "PostgreSQL",
        "CRM",
        "Discord Webhook",
        "Resend",
        "Oracle Cloud",
        "Self-Hosted",
      ],
      links: [
        {
          type: "website",
          label: "Live website",
          url: "https://bonanzabreeze.com/",
        },
      ],
      images: [
        { original: bbi1 },
        { original: bbi2 },
        { original: bbi3 },
        { original: bbi4 },
      ],
    },
    {
      id: "comfypick",
      title: "ezcomfypick",
      description:
        "A mobile-first web UI for sorting ComfyUI-generated images and videos with a Tinder-style swipe interface, built to run on a homelab so you can filter AI generations from your phone without sitting at your PC. Swipe right to keep (drops into a collection folder), swipe left to trash, undo your last swipe. Gallery view lets you browse kept images, filter by collection or tags, and move files around. The backend is just Python moving files with pathlib. Collections are real filesystem folders, no DB coupling. SQLite only tracks tags. Ships as a single Docker container published to Docker Hub.",
      tags: ["FastAPI", "Python", "React", "SQLite", "Docker", "Homelab"],
      links: [
        {
          type: "github",
          label: "Github repo",
          url: "https://github.com/willmarl/ezcomfypick",
        },
      ],
      images: [
        { original: comfypick1 },
        { original: comfypick2 },
        { original: comfypick3 },
        { original: comfypick4 },
        { original: comfypick5 },
        { original: comfypick6 },
      ],
    },
    {
      id: "dect",
      title: "DECT",
      description:
        "DECT (Don't Enjoy Creating Tests?) automates writing test cases from functional requirement documents. Upload a PDF spec, pick which requirements to process, and it runs an 8-step LLM pipeline that produces a ready-to-import CSV covering atomic breakdown, equivalence partitioning, boundary value analysis, deduplication, and final test case generation with steps, preconditions, test data, and expected results. Each step saves its output to disk, so if something fails you resume from where it left off without reprocessing. The LLM provider is swappable via config: OpenAI, Ollama, or Anthropic. Runs locally with a Gradio UI served through FastAPI.",
      tags: [
        "Python",
        "LangChain",
        "LangGraph",
        "FastAPI",
        "Gradio",
        "OpenAI API",
      ],
      links: [
        {
          type: "github",
          label: "Github repo",
          url: "https://github.com/willmarl/dect",
        },
      ],
      images: [
        { original: dect1 },
        { original: dect2 },
        { original: dect3 },
        { original: dect4 },
      ],
    },
  ];

  // Carousel settings for react-slick
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    pauseOnHover: true,
  };

  // Modal carousel settings
  const modalSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    initialSlide: selectedImageIndex,
  };

  const openModal = (project, imageIndex) => {
    setSelectedProject(project);
    setSelectedImageIndex(imageIndex);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProject(null);
  };

  return (
    <section className="projects">
      <h2 className="projects__title">Featured Projects</h2>

      <div className="projects__grid">
        {projects.map((project, projectIndex) => (
          <div key={project.id} className="project">
            <div className="project__carousel">
              <Slider {...carouselSettings}>
                {project.images.map((image, index) => (
                  <div key={index} className="project__slide">
                    <img
                      src={image.original}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="project__image"
                      onClick={() => openModal(project, index)}
                    />
                  </div>
                ))}
              </Slider>
            </div>

            <div className="project__info">
              <h3 className="project__title">{project.title}</h3>
              <p className="project__desc">{project.description}</p>

              <div className="project__links">
                {project.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`project__link project__link--${link.type}`}
                  >
                    {link.type === "github" && (
                      <span className="project__link-icon">⚡</span>
                    )}
                    {link.type === "website" && (
                      <span className="project__link-icon">🌐</span>
                    )}
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="project__tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="project__tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal with carousel */}
      {selectedProject && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="project__modal"
          overlayClassName="project__modal-overlay"
          contentLabel="Project Image Gallery"
        >
          <button
            onClick={closeModal}
            className="project__modal-close"
            aria-label="Close modal"
          >
            ×
          </button>
          <div className="project__modal-content">
            <Slider {...modalSettings}>
              {selectedProject.images.map((image, index) => (
                <div key={index} className="project__modal-slide">
                  <img
                    src={image.original}
                    alt={`${selectedProject.title} screenshot ${index + 1}`}
                    className="project__modal-image"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </Modal>
      )}
    </section>
  );
}

export default Projects;
