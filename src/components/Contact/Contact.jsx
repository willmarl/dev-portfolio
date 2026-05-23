import { useState } from "react";
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
  const [copied, setCopied] = useState(false);

  const handleEmailClick = () => {
    navigator.clipboard.writeText("williammarlette6@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactLinks = [
    {
      type: "email",
      label: "Email",
      value: "williammarlette6@gmail.com",
    },
    {
      type: "resume",
      label: "Fullstack Resume",
      value: "View PDF",
      url: "./resume-fullstack.pdf",
    },
    {
      type: "github",
      label: "GitHub",
      value: "@willcat",
      url: "https://github.com/willmarl",
    },
    {
      type: "resume",
      label: "QA Resume",
      value: "View PDF",
      url: "./resume-qa.pdf",
    },
    {
      type: "linkedin",
      label: "LinkedIn",
      value: "/in/willmarl",
      url: "https://linkedin.com/in/willmarl",
    },
  ];

  return (
    <section className="contact">
      <div className="contact__content">
        <h2 className="contact__title">Drop a Line</h2>
        <p className="contact__subtitle">Here's how you can reach me</p>

        <div className="contact__grid">
          {contactLinks.map((link, index) =>
            link.type === "email" ? (
              <button
                key={index}
                onClick={handleEmailClick}
                className={`contact__link contact__link--email ${copied ? "copied" : ""}`}
              >
                <h3 className="contact__link-label">{link.label}</h3>
                <p className="contact__link-value">{link.value}</p>
              </button>
            ) : (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`contact__link contact__link--${link.type}`}
              >
                <h3 className="contact__link-label">{link.label}</h3>
                <p className="contact__link-value">{link.value}</p>
              </a>
            )
          )}
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
