import { defineComponent } from 'vue';
import { createApp } from 'vue';
import { useEffect, useRef } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Skills.css';

const SkillsVue = defineComponent({
  name: 'SkillsVue',
  setup() {
    return {};
  },
  template: `
    <div class="skills-vue">
      <p class="vue-badge">Powered by Vue.js</p>
    </div>
  `
});

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Vue.js', 'HTML/CSS', 'JavaScript']
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'MongoDB', 'MySQL', 'PostgreSQL', 'REST API', 'Docker']
  },
  {
    title: 'Database & DevOps',
    skills: ['MySQL Replication', 'Redis', 'Docker', 'Database Scaling', 'Master-Slave Architecture']
  },
  {
    title: 'AI & Blockchain',
    skills: ['Python', 'Machine Learning', 'Solidity', 'Web3', 'Smart Contracts', 'AI Integration']
  },
  {
    title: 'Tools & Others',
    skills: ['Git', 'AWS', 'Linux', 'VS Code', 'Email Automation', 'IMAP', 'Video Processing']
  }
];

interface SkillCategoryProps {
  category: { title: string; skills: string[] };
  index: number;
}

const SkillCategory = ({ category, index }: SkillCategoryProps) => {
  const { elementRef: categoryRef, isVisible: categoryVisible } = useScrollAnimation({ 
    triggerOnce: true, 
    rootMargin: '0px 0px -100px 0px' 
  });

  return (
    <div 
      ref={categoryRef}
      className={`skill-category slide-in-left ${categoryVisible ? 'visible' : ''} stagger-delay-${(index % 5) + 1}`}
    >
      <h3 className="category-title">{category.title}</h3>
      <div className="skills-list">
        {category.skills.map((skill, skillIndex) => (
          <span key={skillIndex} className="skill-item">{skill}</span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const vueContainerRef = useRef<HTMLDivElement>(null);
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation({ triggerOnce: true });
  const { elementRef: gridRef, isVisible: gridVisible } = useScrollAnimation({ triggerOnce: true, rootMargin: '0px 0px -50px 0px' });

  useEffect(() => {
    if (vueContainerRef.current) {
      const app = createApp(SkillsVue);
      app.mount(vueContainerRef.current);
      return () => {
        app.unmount();
      };
    }
  }, []);

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 
          ref={titleRef}
          className={`section-title fade-in ${titleVisible ? 'visible' : ''}`}
        >
          Skills
        </h2>
        <div 
          ref={gridRef}
          className={`skills-grid fade-in ${gridVisible ? 'visible' : ''}`}
        >
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} category={category} index={index} />
          ))}
        </div>
        <div ref={vueContainerRef}></div>
      </div>
    </section>
  );
};

export default Skills;
