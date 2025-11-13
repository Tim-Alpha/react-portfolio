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
    title: 'SaaS Admin Dashboard',
    description: 'A comprehensive admin dashboard for a SaaS application with user management, analytics, and billing features. Built with modern React and Node.js technologies.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/Tim-Alpha',
    demo: '#'
  },
  {
    title: 'Chat or Support System',
    description: 'A real-time chat application supporting both direct and group messaging, with online presence indicators and file sharing capabilities.',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    github: 'https://github.com/Tim-Alpha',
    demo: '#'
  },
  {
    title: 'Task Manager',
    description: 'A web-based task management tool featuring drag-and-drop functionality, task creation, team collaboration, and progress tracking.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/Tim-Alpha',
    demo: '#'
  },
  {
    title: 'E-Commerce Store',
    description: 'A full-featured e-commerce platform with product catalog, shopping cart, payment integration, and order management system.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/Tim-Alpha',
    demo: '#'
  },
  {
    title: 'Public APIs Service',
    description: 'A collection of publicly accessible APIs, providing endpoints for various data and services with comprehensive documentation.',
    tags: ['Node.js', 'Express', 'MongoDB', 'REST API'],
    github: 'https://github.com/Tim-Alpha',
    demo: '#'
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio website showcasing my work, skills, and experience as a web developer. Built with React and Vue.js.',
    tags: ['React', 'Vue.js', 'TypeScript', 'CSS'],
    github: 'https://github.com/Tim-Alpha',
    demo: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <line x1="3" y1="9" x2="21" y2="9"/>
                    <line x1="9" y1="21" x2="9" y2="9"/>
                  </svg>
                </div>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

