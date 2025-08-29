import { useState } from "react";
import Modal from "react-modal";
import Slider from "react-slick";
import "./Projects.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import invare1 from "../../assets/project-images/invare/invare-1.png";
import invare2 from "../../assets/project-images/invare/invare-2.png";
import invare3 from "../../assets/project-images/invare/invare-3.png";
import invare4 from "../../assets/project-images/invare/invare-4.png";
import bbi1 from "../../assets/project-images/BBI/bbi-1.png";
import bbi2 from "../../assets/project-images/BBI/bbi-2.png";
import bbi3 from "../../assets/project-images/BBI/bbi-3.png";
import bbi4 from "../../assets/project-images/BBI/bbi-4.png";

// set app element for react-modal accessibility
Modal.setAppElement("#root");

function Projects() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const projects = [
    {
      id: "invare",
      title: "Invare",
      description:
        "Invare is a full-stack inventory app for makers to track Arduino, ESP, and Raspberry Pi modules. Users can add parts from a curated list or custom entries, view tags and code snippets, and search by category. I designed the app with excalidraw, then worked with Claude to bring the UI to life. It includes a lightweight GPT-powered assistant that answers questions based on the user’s inventory. No vector DB or RAG setup (yet) just a smart preprompt from the backend.",
      tags: ["OpenAI", "MERN", "Inventory Management"],
      links: [
        {
          type: "github",
          label: "Frontend Repo",
          url: "https://github.com/willmarl/invare",
        },
        {
          type: "github",
          label: "Backend Repo",
          url: "https://github.com/willmarl/invare-api",
        },
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
      ],
    },
    {
      id: "bbi",
      title: "Bonanza Breeze Inc",
      description:
        "Built a full-stack HVAC business management system for Bonanza Breeze Inc, a Tampa-based company. Delivered both a custom CRM dashboard (appointments, customers, quotes, staff, payments) and a responsive public-facing website. Also acted as a technical consultant—guiding the non-technical client through registering a domain, configuring DNS, and deploying via Oracle Cloud’s free-tier VPS to keep costs low. Integrated Resend for email delivery and Square API for payments, ensuring a secure, modern, self-hosted solution on a startup budget.",
      tags: [
        "MERN",
        "CRM",
        "Square API",
        "Resend",
        "Oracle Cloud",
        "Self-Hosted",
        "Full-Stack",
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
