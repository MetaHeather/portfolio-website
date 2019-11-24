import React, {Component} from 'react';

class Header extends Component {
    render() {
      return (
        <div>
          <header id="home">
            <nav id="nav-wrap">
              <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
              <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
              <ul id="nav" className="nav">
                <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                <li><a className="smoothscroll" href="#about">About</a></li>
                <li><a className="smoothscroll" href="#resume">Resume</a></li>
                <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
                <li><a className="smoothscroll" href="#contact">Contact</a></li>
              </ul> 
            </nav> 
            <div className="row banner">
              <div className="banner-text">
                <h1 className="responsive-headline">Hi, I'm Heather.</h1>
                <h3>I'm an Austin based <span>Junior Software Engineer</span>, and <span>webdesigner.</span> creating awesome and
                  projects.<a className="smoothscroll" href="#about">Start scrolling</a>
                  to learn more <a className="smoothscroll" href="#about">about me</a>.</h3>
                <hr />
                <ul className="social">
                  <li><a href="#"><i className="fa fa-twitter" /></a></li>
                  <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                </ul>
              </div>
            </div>
            <p className="scrolldown">
              <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
            </p>
          </header> 
          <section id="about">
            <div className="row">
              <div className="three columns">
                <img className="profile-pic" src="images/profilepic.jpg" alt="" />
              </div>
              <div className="nine columns main-col">
                <h2>About Me</h2>
                <p>
                    I am an Austin based, Junior Full Stack developer looking for a place to work where I can make an impact.
                </p>
                <div className="row">
                  <div className="columns contact-details">
                    <h2>Contact Details</h2>
                    <p className="address">
                      <span>Heather Etheridge</span><br />
                      <span>Austin Texas</span><br />
                      <span>heathernetheridge@gmail.com</span>
                    </p>
                  </div>
                  <div className="columns download">
                    <p>
                      <a href="#" className="button"><i className="fa fa-download" />Download Resume</a>
                    </p>
                  </div>
                </div>
              </div> 
            </div>
          </section> 
        </div>
      )}
}
  

  export default Header;