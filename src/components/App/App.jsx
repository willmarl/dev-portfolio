import React, { useState, useEffect } from "react";

import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import "./App.css";

function App() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      const starArray = [];
      for (let i = 0; i < 100; i++) {
        const starType = Math.random();
        let modifier = "small";

        if (starType > 0.8) modifier = "large";
        else if (starType > 0.6) modifier = "medium";

        starArray.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          modifier: modifier,
          twinkleDelay: Math.random() * 3,
        });
      }
      setStars(starArray);
    };

    generateStars();
  }, []);

  return (
    <div className="page">
      <div className="page__background">
        {/* Starfield */}
        <div className="page__starfield">
          {stars.map((star) => (
            <div
              key={star.id}
              className={`page__star page__star--${star.modifier}`}
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                animationDelay: `${star.twinkleDelay}s`,
              }}
            />
          ))}
        </div>

        <div className="page__clouds">
          <div className="page__cloud page__cloud--purple"></div>
          <div className="page__cloud page__cloud--blue"></div>
          <div className="page__cloud page__cloud--pink"></div>
          <div className="page__cloud page__cloud--cyan"></div>
        </div>
      </div>

      <div className="page__content">
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
