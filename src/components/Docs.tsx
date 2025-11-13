import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './Docs.css';

interface DocsProps {
  isOpen: boolean;
  onClose: () => void;
}

const Docs = ({ isOpen, onClose }: DocsProps) => {
  const [readmeContent, setReadmeContent] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      const fetchReadme = async () => {
        try {
          const response = await fetch('/README.md');
          if (response.ok) {
            const text = await response.text();
            setReadmeContent(text);
          } else {
            setReadmeContent('# Documentation\n\nUnable to load documentation. Please check the README.md file.');
          }
        } catch (error) {
          console.error('Error loading README:', error);
          setReadmeContent('# Documentation\n\nError loading documentation file.');
        } finally {
          setLoading(false);
        }
      };

      fetchReadme();
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="docs-overlay" onClick={onClose}>
      <div className="docs-modal" onClick={(e) => e.stopPropagation()}>
        <div className="docs-header">
          <h2 className="docs-title">Documentation</h2>
          <button 
            className="docs-close-btn"
            onClick={onClose}
            aria-label="Close documentation"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div className="docs-content">
          {loading ? (
            <div className="docs-loading">
              <div className="loading-spinner"></div>
              <p>Loading documentation...</p>
            </div>
          ) : (
            <div className="docs-markdown">
              <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({node, ...props}) => <h1 className="docs-h1" {...props} />,
                  h2: ({node, ...props}) => <h2 className="docs-h2" {...props} />,
                  h3: ({node, ...props}) => <h3 className="docs-h3" {...props} />,
                  p: ({node, ...props}) => <p className="docs-p" {...props} />,
                  code: ({node, inline, ...props}: any) => 
                    inline ? (
                      <code className="docs-code-inline" {...props} />
                    ) : (
                      <code className="docs-code-block" {...props} />
                    ),
                  pre: ({node, ...props}) => <pre className="docs-pre" {...props} />,
                  a: ({node, ...props}) => <a className="docs-link" target="_blank" rel="noopener noreferrer" {...props} />,
                  ul: ({node, ...props}) => <ul className="docs-ul" {...props} />,
                  ol: ({node, ...props}) => <ol className="docs-ol" {...props} />,
                  li: ({node, ...props}) => <li className="docs-li" {...props} />,
                  blockquote: ({node, ...props}) => <blockquote className="docs-blockquote" {...props} />,
                  table: ({node, ...props}) => <table className="docs-table" {...props} />,
                  thead: ({node, ...props}) => <thead className="docs-thead" {...props} />,
                  tbody: ({node, ...props}) => <tbody className="docs-tbody" {...props} />,
                  tr: ({node, ...props}) => <tr className="docs-tr" {...props} />,
                  th: ({node, ...props}) => <th className="docs-th" {...props} />,
                  td: ({node, ...props}) => <td className="docs-td" {...props} />,
                }}
              >
                {readmeContent}
              </ReactMarkdown>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Docs;

