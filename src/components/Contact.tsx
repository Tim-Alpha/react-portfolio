import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-content">
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="form-input form-textarea"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary form-submit">
                Send
              </button>
            </form>
          </div>
          <div className="contact-info">
            <div className="contact-item">
              <h3>Email</h3>
              <a href="mailto:sachin@example.com">sachin@example.com</a>
            </div>
            <div className="contact-social">
              <a 
                href="https://www.linkedin.com/in/sachin-kinha-3b3041260/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-social-link"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://github.com/Tim-Alpha" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-social-link"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>GitHub</span>
              </a>
              <a 
                href="https://t.me/SachinKinha" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-social-link"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.169 1.858-.896 6.728-.896 6.728-.896 6.728-1.268 7.938-1.268 7.938s-.169.169-.338.169c-.338 0-.507-.169-.507-.338 0-.169 1.268-1.607 1.607-2.357.169-.338.169-.507.169-.507s-2.695-1.607-3.715-2.186c-.169-.169-.338-.169-.338 0 0 .169.169.338.338.507.507.507 1.268 1.268 1.775 1.775.338.338.507.507.338.676 0 .169-.169.338-.338.507-.507.507-1.268 1.268-1.775 1.775-.338.338-.507.507-.676.507-.169 0-.338-.169-.338-.338 0-.169.169-.338.338-.507.338-.338 1.268-1.268 1.775-1.775.338-.338.507-.507.338-.676 0-.169-.169-.338-.338-.507-.507-.507-1.268-1.268-1.775-1.775-.338-.338-.507-.507-.338-.676 0-.169.169-.338.338-.507.507-.507 1.268-1.268 1.775-1.775.338-.338.507-.507.676-.507.169 0 .338.169.338.338 0 .169-.169.338-.338.507-.338.338-1.268 1.268-1.775 1.775-.338.338-.507.507-.338.676 0 .169.169.338.338.507.507.507 1.268 1.268 1.775 1.775.338.338.507.507.676.507.169 0 .338-.169.338-.338 0-.169-.169-.338-.338-.507-.338-.338-1.268-1.268-1.775-1.775-.338-.338-.507-.507-.338-.676 0-.169.169-.338.338-.507.507-.507 1.268-1.268 1.775-1.775.338-.338.507-.507.676-.507.169 0 .338.169.338.338 0 .169-.169.338-.338.507z"/>
                </svg>
                <span>Telegram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

