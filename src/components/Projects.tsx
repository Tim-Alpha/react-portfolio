import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Projects.css';

interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: 'Co-founder Finder',
    description: 'A comprehensive platform for discovering and connecting with talented co-founders from Startup School. Features advanced search, AI-powered profile analysis, profile management, and a coin-based contribution system. Includes admin dashboard with analytics and user management.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'AI Integration'],
    github: 'https://github.com/Tim-Alpha',
    demo: 'https://yc.empowerverse.org/',
    image: '/co-founder-finder.png'
  },
  {
    title: 'Alpha Automation Cold Email System',
    description: 'An advanced cold email automation platform with contact management, CSV upload, email template customization, IMAP configuration, and real-time email sending progress tracking. Features dashboard analytics, email history, and success rate monitoring.',
    tags: ['React', 'Node.js', 'Express', 'Email Automation', 'IMAP'],
    github: 'https://github.com/Tim-Alpha',
    demo: 'https://coldemail.empowerverse.org/dashboard',
    image: '/cold-email.png'
  },
  {
    title: 'Blog Backend - Master-Slave DB Architecture',
    description: 'A scalable blog backend system implementing MySQL Master-Slave replication architecture using Docker. Features include pagination, Redis caching, automatic failover, and high availability. Built with Node.js, Express, and Docker Compose for easy deployment.',
    tags: ['Node.js', 'MySQL', 'Docker', 'Redis', 'Database Scaling'],
    github: 'https://github.com/Tim-Alpha/blog-backend',
    demo: 'https://github.com/Tim-Alpha/blog-backend'
  },
  {
    title: 'Video Recommendation System',
    description: 'An intelligent video recommendation platform with advanced search capabilities, video upload functionality, and personalized recommendations. Features include video processing, metadata management, and user interaction tracking.',
    tags: ['Python', 'Machine Learning', 'Video Processing', 'API'],
    github: 'https://github.com/Tim-Alpha/video-recommendation-assignment',
    demo: 'https://github.com/Tim-Alpha/video-recommendation-assignment'
  },
  {
    title: 'Smart Contract AMM',
    description: 'A decentralized Automated Market Maker (AMM) with virtual bonding curve implementation. Built on blockchain technology for token swaps and liquidity management. Features include smart contract auditing and security best practices.',
    tags: ['Solidity', 'Blockchain', 'Web3', 'Smart Contracts', 'TypeScript'],
    github: 'https://github.com/Tim-Alpha/smart-contract-AMM-virtual-bonding-curve',
    demo: 'https://github.com/Tim-Alpha/smart-contract-AMM-virtual-bonding-curve'
  },
  {
    title: 'AI Video & Image Generation System',
    description: 'An advanced AI-powered system for generating videos and images using cutting-edge machine learning models. Features include batch processing, API integration, and customizable generation parameters.',
    tags: ['Python', 'AI/ML', 'Video Generation', 'Image Processing', 'API'],
    github: 'https://github.com/Tim-Alpha/AI-Video-and-Image-Generation-System-Assignment',
    demo: 'https://github.com/Tim-Alpha/AI-Video-and-Image-Generation-System-Assignment'
  },
  {
    title: 'Video Search & Upload Bot',
    description: 'An intelligent video search and upload system with automated bot functionality. Features include video indexing, search algorithms, automated upload workflows, and integration with video platforms.',
    tags: ['Python', 'Bot Development', 'Video Processing', 'Automation'],
    github: 'https://github.com/Tim-Alpha/Video-Search-and-Upload-Bot-Assignment',
    demo: 'https://github.com/Tim-Alpha/Video-Search-and-Upload-Bot-Assignment'
  },
  {
    title: 'Web Development Assignment',
    description: 'A comprehensive web application showcasing modern web development practices. Features include responsive design, RESTful APIs, authentication, and real-time updates. Built with TypeScript and modern frameworks.',
    tags: ['TypeScript', 'React', 'Node.js', 'Web Development'],
    github: 'https://github.com/Tim-Alpha/web-assignment',
    demo: 'https://github.com/Tim-Alpha/web-assignment'
  }
];

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const { elementRef: cardRef, isVisible: cardVisible } = useScrollAnimation({ 
    triggerOnce: true, 
    rootMargin: '0px 0px -100px 0px' 
  });

  return (
    <div 
      ref={cardRef}
      className={`project-card scale-in ${cardVisible ? 'visible' : ''} stagger-delay-${(index % 4) + 1}`}
    >
              <div className="project-image">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-img"
                    loading="lazy"
                  />
                ) : (
                  <div className="project-placeholder">
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                      <line x1="3" y1="9" x2="21" y2="9"/>
                      <line x1="9" y1="21" x2="9" y2="9"/>
                    </svg>
                  </div>
                )}
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="project-tag">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      Demo
                    </a>
                  )}
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
    </div>
  );
};

const Projects = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation({ triggerOnce: true });
  const { elementRef: gridRef, isVisible: gridVisible } = useScrollAnimation({ triggerOnce: true, rootMargin: '0px 0px -50px 0px' });

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 
          ref={titleRef}
          className={`section-title fade-in ${titleVisible ? 'visible' : ''}`}
        >
          Projects
        </h2>
        <div 
          ref={gridRef}
          className={`projects-grid fade-in ${gridVisible ? 'visible' : ''}`}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

