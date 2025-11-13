import './Footer.css';

interface FooterProps {
  onOpenDocs: () => void;
}

const Footer = ({ onOpenDocs }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-text">
            © {currentYear} Sachin Kinha. All rights reserved.
          </p>
          <div className="footer-links">
            <a 
              href="https://github.com/Tim-Alpha" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/sachin-kinha-3b3041260/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
            >
              LinkedIn
            </a>
            <a 
              href="https://t.me/SachinKinha" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
            >
              Telegram
            </a>
            <a 
              href="#docs" 
              onClick={(e) => { 
                e.preventDefault(); 
                onOpenDocs();
              }}
              className="footer-link footer-readme-link"
              title="View Project Documentation"
            >
              📖 Documentation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

