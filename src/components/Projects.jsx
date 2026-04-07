import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, FolderGit2 as Github } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'React와 Node.js를 활용한 풀스택 쇼핑몰 웹 애플리케이션입니다. 결제 연동 및 상품 관리 기능을 포함하고 있습니다.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      github: '#',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Task Management App',
      description: '팀 협업을 위한 칸반 보드 형태의 태스크 관리 툴입니다. 드래그 앤 드롭 인터페이스를 지원합니다.',
      tags: ['React', 'TypeScript', 'Tailwind', 'Zustand'],
      github: '#',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Portfolio Design System',
      description: '모던 웹 개발을 위한 커스텀 디자인 시스템 및 UI 컴포넌트 라이브러리입니다.',
      tags: ['HTML/CSS', 'React', 'Framer Motion'],
      github: '#',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Selected Work.</h2>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              className="project-card"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                      <Github size={24} />
                    </a>
                    <a href={project.demo} target="_blank" rel="noreferrer" aria-label="Live Demo">
                      <ExternalLink size={24} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
