import { defineComponent } from 'vue';
import { createApp } from 'vue';
import { useEffect, useRef } from 'react';
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

const Skills = () => {
  const vueContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (vueContainerRef.current) {
      const app = createApp(SkillsVue);
      app.mount(vueContainerRef.current);
      return () => {
        app.unmount();
      };
    }
  }, []);

  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Vue.js', 'HTML/CSS']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST API', 'GraphQL']
    },
    {
      title: 'Tools',
      skills: ['Redis', 'Git', 'Docker', 'AWS', 'Linux', 'VS Code']
    }
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div ref={vueContainerRef}></div>
      </div>
    </section>
  );
};

export default Skills;

