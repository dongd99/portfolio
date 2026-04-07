import React from 'react';
import { motion } from 'framer-motion';
import { Mail, FolderGit2 as Github, Briefcase as Linkedin, MessageCircle as Twitter } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="contact-title">Let's Work Together.</h2>
          <p className="contact-description">
            새로운 프로젝트 제안이나 궁금한 점이 있으시다면 언제든지 연락주세요.<br />
            어떤 형태의 커뮤니케이션도 환영합니다.
          </p>

          <a href="mailto:hello@example.com" className="email-button">
            <Mail size={20} /> hdw6348@kyungmin.ac.kr
          </a>

          <div className="social-links">
            <a href="#" aria-label="GitHub"><Github size={24} /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin size={24} /></a>
            <a href="#" aria-label="Twitter"><Twitter size={24} /></a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
