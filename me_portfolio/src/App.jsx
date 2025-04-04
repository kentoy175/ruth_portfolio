import { useState } from 'react'
import './App.css'
import img1 from './image/img1.jpg'
import project1 from './image/project1.png'
import project2 from './image/project2.png'

function App() {
  return (
    <div className="app">
      <header>
        <nav>
          <div className="logo">Portfolio</div>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          <button className="cta-button">Hire Me</button>
        </nav>
      </header>

      <section id="home" className="hero-section">
        <div className="hero-content">
          <h1>Hi I'm <span className="highlight">Ruth Mariel</span></h1>
          <h1>A UI UX Designer</h1>
          <p>Crafting beautiful and functional web experiences.</p>
          <button className="cta-button">Download CV</button>
        </div>
        <div className="hero-image">
          <div className="image-container">
            <img src={img1} alt="Ruth Mariel profile" />
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <h2>About <span className="highlight">Me</span></h2>
        <div className="about-content">
          <div className="about-image">
            <div className="image-container">
              <img src={img1} alt="Ruth Mariel profile" />
            </div>
          </div>
          <div className="about-text">
            <h3>UI UX <span className="highlight">Designer</span></h3>
            <p>I'm a passionate frontend developer with expertise in creating responsive and user-friendly web applications. With strong skills in HTML, CSS, JavaScript, and modern frameworks like React, I build beautiful interfaces that deliver exceptional user experiences.</p>
          </div>
        </div>
      </section>

      <section id="projects" className="projects-section">
        <h2>My <span className="highlight">Projects</span></h2>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image">
              <img src={project1} alt="Project 1" />
            </div>
            <div className="project-info">
              <h3>Trackify Website</h3>
              <p>A fully web application platform built with React and Vite, featuring for tracking system.</p>
              <div className="project-tags">
                <span>React</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>
              <div className="project-links">
                <a href="https://www.figma.com/design/3LN66dgfEofkTzquMlVU0G/website-track?node-id=607-317&t=Rp5DWXOMXn9jJ6Ij-1" aria-label="View Live"><i className="fas fa-globe"></i> Live</a>
              </div>
            </div>
          </div>
          
          <div className="project-card">
            <div className="project-image">
              <img src={project2} alt="Project 2" />
            </div>
            <div className="project-info">
              <h3>Paro UI UX Design</h3>
              <p>A UI UX design for a mobile application,for community management.</p>
              <div className="project-tags">
                <span>Figma</span>
               
              </div>
              <div className="project-links">
                <a href="https://www.figma.com/design/kKrFO1lvZTdBpv1PSD1zm6/PARO-APPLICATION?node-id=26-34&t=XDgMmDIf5W22Ut7Q-1" aria-label="View Live"><i className="fas fa-globe"></i> Live</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <h2>Contact <span className="highlight">Me</span></h2>
        <form className="contact-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="tel" placeholder="Phone" />
          <textarea placeholder="Message"></textarea>
          <button type="submit" className="cta-button">Send Message</button>
        </form>
      </section>

      <footer>
        <div className="social-icons">
          <a href="#" aria-label="GitHub"><i className="fab fa-github"></i></a>
          <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
          <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
          <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
        </div>
      </footer>
    </div>
  )
}

export default App
