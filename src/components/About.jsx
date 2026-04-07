import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, Code, Database, Layout } from 'lucide-react';
import './About.css';

const About = () => {
  const skills = [
    { name: 'Network', icon: <Layout size={20} /> },
    { name: 'Linux', icon: <Code size={20} /> },
    { name: 'Python', icon: <BookOpen size={20} /> },
    { name: 'Java', icon: <Database size={20} /> }
  ];

  const certifications = [
    { title: 'AdSp', date: '2025. 05', org: '한국산업인력공단' },
    { title: 'CCNA', date: '2024. 11', org: 'Cisco' },
    { title: 'SQL Developer (SQLD)', date: '2024. 08', org: '한국데이터산업진흥원' }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About.</h2>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>항상 성장하는 개발자</h3>
            <p>
              안녕하세요, 새로운 기술을 배우고 적용하는 것을 좋아하는 마인드를 가진 개발자입니다.
              사용자 친화적이고 직관적인 제품을 만드는 데 관심이 많으며, 코드의 품질과 성능을 최적화하기 위해 끊임없이 탐구합니다.
            </p>
            <p>
              단순히 기능이 동작하는 것을 넘어서 세련되고 완성도 높은 디지털 경험을 제공하는 것을 목표로 하고 있습니다.
            </p>
          </motion.div>

          <div className="about-details">
            <motion.div
              className="skills-box"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="detail-title"><Code size={22} /> Tech Skills</h4>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    {skill.icon}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="cert-box"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="detail-title"><Award size={22} /> Certifications</h4>
              <ul className="cert-list">
                {certifications.map((cert, index) => (
                  <li key={index} className="cert-item">
                    <div className="cert-info">
                      <span className="cert-title">{cert.title}</span>
                      <span className="cert-date">{cert.date}</span>
                    </div>
                    <span className="cert-org">{cert.org}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
