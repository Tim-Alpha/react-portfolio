import './About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              I'm a full stack web developer with industrial experience in building modern web applications.
              I specialize in creating performant and maintainable applications using cutting-edge technologies.
            </p>
            <p className="about-description">
              I enjoy turning complex problems into simple, elegant solutions. My passion lies in writing clean code,
              learning new technologies, and contributing to open-source projects.
            </p>
            <p className="about-description">
              When I'm not coding, you can find me exploring new frameworks, contributing to GitHub projects,
              or sharing knowledge with the developer community.
            </p>
            <div className="about-cta">
              <a 
                href="https://github.com/Tim-Alpha" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

