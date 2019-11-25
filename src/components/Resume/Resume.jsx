import React, {Component} from 'react';

class Resume extends Component {
  render() {
    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>General Assembly</h3>
                <p className="info">Software Engineering Immersive<span>•</span> <em className="date">October 2019</em></p>
                <p>
                Three month, 500 hour full-time and full-stack software engineering program conducted in a multi-campus connected setting. 
                I gained experience with the latest front-end and back-end programming languages, tools and methodologies, 
                including: JavaScript, ReactJs, NodeJS, Express, Python, Django, MongoDB, Amazon Web Services S3, git, GitHub, PostgreSQL, Agile/Scrum
                </p>
              </div>
            </div> 
            <div className="row item">
              <div className="twelve columns">
                <h3>Full Sail University</h3>
                <p className="info">120 Credit Hours<span>•</span> <em className="date">June 2019</em></p>
                <p>
                Was provided with the focused knowledge and understanding needed to deploy modern web applications. 
                Used industry standard tools, including modern client-side and server-side languages, 
                relational and non-relational database structures, and frameworks used in modern web stacks.
                Some of the courses I would like to highlight: Discrete Mathmatics, Database Structures, Emerging Interface Design,
                Designing for Web Standards, Server Side Languages, Web Application Integration.
                </p>
              </div>
            </div> 
          </div> 
        </div> 
       
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <p>
              I have familiarity with building fullstack applications, RESTful API's and React applications. 
            </p>
            <div className="bars">
              <ul className="skills">
                <li><span className="bar-expand javascript" /><em>JavaScript</em></li>
                <li><span className="bar-expand react" /><em>React</em></li>
                <li><span className="bar-expand nodejs" /><em>Node.js</em></li>
                <li><span className="bar-expand git" /><em>git</em></li>
                <li><span className="bar-expand mongodb" /><em>MongoDB</em></li>
                <li><span className="bar-expand pythondjango" /><em>Python/Django</em></li>
              </ul>
            </div>
          </div> 
        </div> 

        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
              <h3>I'm currently available for hire!</h3>
                <p className="info">Junior Software Engineer <span>•</span> <em className="date">Present</em></p>
                <p>
                  
                  You can use the contact form below, or send your inquiry to heathernetheridge@gmail.com
                </p>
              </div>
            </div> 
          </div>
        </div>
      </section>
    )}
}

export default Resume;