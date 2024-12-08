import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import './Mainpage.css';
import profile from './profile.png';
import {SiReact, SiDocker, SiKubernetes, SiPython, SiCss3, SiHtml5, SiLinux,
  SiMongodb, SiMysql, SiGit, SiJavascript, SiPhp, SiGithub, SiLinkedin, SiGmail, SiKotlin, SiRstudioide, SiJenkins,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress
} from 'react-icons/si';
import ChristmasScene from './background';
import artgalery from './photos/artgallery.svg';
import wedding from './photos/wedding.svg';


export default function MainPage() {
  const [text] = useTypewriter({
    words: ['System Engineer', 'Full Stack Developer', 'DevOps Engineer'],
    loop: 0,
    delaySpeed: 3000,
  });

  return (
    <div>
        <ChristmasScene />
      {/* Hero Section */}
      <div className="section">
        <h1>
          SUHANSA KASHMIRA
          <br />
          <span>
            I&apos;m&nbsp;{text}<Cursor />
          </span>
        </h1>
        <div className="profile">
          <img src={profile} alt="Suhansa Kashmira" />
        </div>
      </div>

      {/* Social Media Section */}
      <div className="section">
        <h2>Connect with Me</h2>
        
        <div className="social">
          <div>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <SiGithub size={50} title="GitHub" />
            </a>
            <span>GitHub</span>
          </div>
          <div>
            <a href="https://linkedin.com/in/suhansa-kashmira-998a942b6" target="_blank" rel="noopener noreferrer">
              <SiLinkedin size={50} title="LinkedIn" />
            </a>
            <span>LinkedIn</span>
          </div>
          <div>
            <a href="mailto:suhansa2816@gmail.com">
              <SiGmail size={50} title="Gmail" />
            </a>
            <span>Gmail</span>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <div className="about-me">
        <h2>About Me</h2>
        <p>
        As an Information Technology student at SLIIT, I am passionate about using technology
          to solve real-world problems. I have a strong foundation in programming, software
          development, and project management. Currently, I am working on projects such as an
          art gallery management system and a mindfulness and stress relief mobile app, which
          have sharpened my skills in user interface design, database management, and app
          development. Eager to explore new technologies and take on challenges, I am driven by
          innovation and continuous learning to push the boundaries of what technology can
          achieve.
        </p>
      </div>

      {/* Skills Section */}
      <div className="section skills">
        <h2>Skills</h2>
        <div className="icon-skills">
          <div className="box"><SiHtml5 title="HTML" size={50} color="#E34F26" /></div>
          <div className="box"><SiCss3 title="CSS" size={50} color="#1572B6" /></div>
          <div className="box"><SiJavascript title="JavaScript" size={50} color="#F7DF1E" /></div>
          <div className="box"><SiPhp title="PHP" size={50} color="#777BB4" /></div>
          <div className='box'><SiTailwindcss title='Tailwindcss' size={50} color="white" /></div>


          <div className="box"><SiMongodb title="MongoDB" size={50} color="#47A248" /></div>
          <div className="box"><SiExpress title="ExpressJS" size={50} color="#61DBFB" /></div>
          <div className="box"><SiReact title="ReactJS" size={50} color="#61DBFB" /></div>
          <div className="box"><SiNodedotjs title="NodeJS" size={50} color="#61DBFB" /></div>
          
          <div className="box"><SiPython title="Python" size={50} color="#306998" /></div>
          <div className="box"><SiLinux title="Linux" size={50} color="#FCC624" /></div>
          
          <div className="box"><SiMysql title="MySQL" size={50} color="#4479A1" /></div>
          <div className="box"><SiGit title="Git" size={50} color="#F05032" /></div>
          <div className="box"><SiKotlin title='Kotlin' size={50} color="#0095D5" /></div>
          <div className="box"><SiRstudioide title='R studio' size={50} color="#276DC3" /></div>
          <div className="box"><SiGithub title='GitHub' size={50} color="white" /></div>
          <div className="box"><SiDocker title="Docker" size={50} color="#2496ED" /></div>
          <div className="box"><SiKubernetes title="Kubernetes" size={50} color="#326CE5" /></div>
          <div className='box'><SiJenkins title='Jenkins' size={50} color="#D24939" /></div>
          
        </div>
        
        <h1>Projects</h1>
       
       <h1>Web Developments</h1>
        <div className="project">
          <h2>Art Gallery Management System</h2>
          <img src={artgalery} alt="Art gallery " />
          <div className="project-details">
          <p>
          This project is a comprehensive web application developed using the MERN stack (MongoDB, Express, React, and Node.js). It is designed to streamline the management of art galleries by providing robust features for both administrators and users.

          <br/><br/>Key Features:<br/>

          <b>Inquiry and Feedback Management System:</b> Developed a personalized module to handle customer inquiries and feedback efficiently.<br/>
          <br/><b>Dynamic and User-Friendly Interface: </b>Leveraged React to create an intuitive interface for browsing, managing, and displaying artwork.
          <br/><b>Database Management:</b> Utilized MongoDB for storing and retrieving gallery data, ensuring scalability and performance.<br/><br/>
          This project showcases expertise in full-stack development and a focus on delivering practical, user-centered solutions.
          </p>
          </div>

          <h2>Wedding Managment system </h2>
          <img src={wedding} alt="wedding managment project" />
          <div className="project-details">
            <p>
            This project is a comprehensive web application developed using Apache Tomcat and Java. It is designed to streamline the planning and management of weddings by providing essential features for both couples and event planners.<br/><br/>

            <b>Key Features:</b><br/><br/>

            <b>Guest and RSVP Management:</b> A module for managing guest lists, sending invitations, and tracking RSVPs in real-time.<br/>

            <b>Vendor and Budget Tracking:</b> Allows users to organize wedding-related vendors (e.g., caterers, photographers) and manage expenses within the set budget.<br/>

            <b>Event Scheduling:</b> Facilitates scheduling and tracking of wedding-related events such as the ceremony, reception, and rehearsals.<br/>

            <b>User Authentication:</b> Developed secure user authentication for couples, guests, and wedding planners to manage their profiles and event details.<br/>

            </p>


            <h2>Mobile App Development</h2>
            
          </div>
      </div>
    </div>  
    </div>
  );
}
