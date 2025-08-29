import "./Contact.css";

const STATUS_CONFIG = {
  current: "available", // enum: ['available', 'busy', 'unavailable']
  messages: {
    available: "available for new opportunities",
    busy: "busy but open to great opportunities",
    unavailable: "not taking on new projects right now",
  },
};

function Contact() {
  const contactLinks = [
    {
      type: "email",
      label: "Email",
      value: "williammarlette3@gmail.com",
    },
    {
      type: "github",
      label: "GitHub",
      value: "@willcat",
      url: "https://github.com/willmarl",
    },
    {
      type: "linkedin",
      label: "LinkedIn",
      value: "/in/willmarl",
      url: "https://linkedin.com/in/willmarl",
    },
    {
      type: "resume",
      label: "Resume",
      value: "View PDF",
      url: "/public/resume.pdf", // Put your resume in public folder
    },
  ];

  return (
    <section className="contact">
      <div className="contact__content">
        <h2 className="contact__title">Drop a Line</h2>
        <p className="contact__subtitle">Here's how you can reach me</p>

        <div className="contact__links">
          {contactLinks.map((link, index) => (
            <a
              key={index}
              href={link?.url}
              target={link.type !== "email" ? "_blank" : undefined}
              rel={link.type !== "email" ? "noopener noreferrer" : undefined}
              download={link.download}
              className={`contact__link contact__link--${link.type}`}
            >
              <div className="contact__link-content">
                <h3 className="contact__link-label">{link.label}</h3>
                <p className="contact__link-value">{link.value}</p>
              </div>
              <div className="contact__link-arrow">→</div>
            </a>
          ))}
        </div>

        <div className="contact__cta">
          <p className="contact__cta-text">
            Currently{" "}
            <span
              className={`contact__status contact__status-${STATUS_CONFIG.current}`}
            >
              {STATUS_CONFIG.messages[STATUS_CONFIG.current]}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
