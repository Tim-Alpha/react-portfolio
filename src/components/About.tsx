import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './About.css';

const About = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation({ triggerOnce: true });
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollAnimation({ triggerOnce: true, rootMargin: '0px 0px -100px 0px' });

  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 
          ref={titleRef}
          className={`section-title fade-in ${titleVisible ? 'visible' : ''}`}
        >
          About
        </h2>
        <div 
          ref={contentRef}
          className={`about-content fade-in ${contentVisible ? 'visible' : ''}`}
        >
          <div className="about-text">
            <p className="about-description">
              I'm a full stack web developer with industrial experience in building scalable, high-performance web applications.
              With <strong>100+ repositories</strong> on GitHub, I've worked on diverse projects ranging from database scaling architectures
              to AI-powered systems and blockchain applications.
            </p>
            <p className="about-description">
              My expertise includes designing and implementing <strong>Master-Slave database architectures</strong> for high availability,
              building <strong>AI-powered platforms</strong> for co-founder matching, developing <strong>automated email systems</strong>,
              and creating <strong>smart contract solutions</strong> on blockchain. I specialize in creating performant, maintainable
              applications using cutting-edge technologies.
            </p>
            <p className="about-description">
              I've contributed to projects involving <strong>video processing, recommendation systems, smart contract development,
              and large-scale web applications</strong>. My work demonstrates proficiency in both frontend and backend development,
              with a strong focus on scalability, performance optimization, and clean architecture.
            </p>
            <p className="about-description">
              When I'm not coding, you can find me exploring new frameworks, contributing to open-source projects,
              or sharing knowledge with the developer community. I'm passionate about solving complex problems and
              turning them into elegant, production-ready solutions.
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

