import React from 'react';

let Header = React.createClass({
    render: function() {
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
              </ul> {/* end #nav */}
            </nav> {/* end #nav-wrap */}
            <div className="row banner">
              <div className="banner-text">
                <h1 className="responsive-headline">I'm Jonathan Doe.</h1>
                <h3>I'm a Manila based <span>graphic designer</span>, <span>illustrator</span> and <span>webdesigner</span> creating awesome and
                  effective visual identities for companies of all sizes around the globe. Let's <a className="smoothscroll" href="#about">start scrolling</a>
                  and learn more <a className="smoothscroll" href="#about">about me</a>.</h3>
                <hr />
                <ul className="social">
                  <li><a href="#"><i className="fa fa-facebook" /></a></li>
                  <li><a href="#"><i className="fa fa-twitter" /></a></li>
                  <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                  <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                  <li><a href="#"><i className="fa fa-instagram" /></a></li>
                  <li><a href="#"><i className="fa fa-dribbble" /></a></li>
                  <li><a href="#"><i className="fa fa-skype" /></a></li>
                </ul>
              </div>
            </div>
            <p className="scrolldown">
              <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
            </p>
          </header> {/* Header End */}
          {/* About Section
     ================================================== */}
          <section id="about">
            <div className="row">
              <div className="three columns">
                <img className="profile-pic" src="images/profilepic.jpg" alt="" />
              </div>
              <div className="nine columns main-col">
                <h2>About Me</h2>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                  eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                  voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                  voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                  sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.
                </p>
                <div className="row">
                  <div className="columns contact-details">
                    <h2>Contact Details</h2>
                    <p className="address">
                      <span>Jonathan Doe</span><br />
                      <span>1600 Amphitheatre Parkway<br />
                        Mountain View, CA 94043 US
                      </span><br />
                      <span>(123)456-7890</span><br />
                      <span>anyone@website.com</span>
                    </p>
                  </div>
                  <div className="columns download">
                    <p>
                      <a href="#" className="button"><i className="fa fa-download" />Download Resume</a>
                    </p>
                  </div>
                </div> {/* end row */}
              </div> {/* end .main-col */}
            </div>
          </section> {/* About Section End*/}
        </div>
      );
    }
  });

  export default Header;