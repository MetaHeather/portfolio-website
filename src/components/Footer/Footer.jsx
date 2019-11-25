import React, {Component}from 'react';

class Footer extends Component{
    render(){
      return (
        <footer>
          <div className="row">
            <div className="twelve columns">
              <ul className="social-links">
                <li><a href="https://twitter.com/MetaHeather" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter" /></a></li>
                <li><a href="https://www.linkedin.com/in/heatheretheridge/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" /></a></li>
                <li><a href="https://github.com/MetaHeather?tab=repositories" target="_blank" rel="noopener noreferrer"><i className="fa fa-github" /></a></li>
              </ul>
              <ul className="copyright">
                <li>© Copyright 2019 MetaHeather</li>
                <li>Designed with  &#x2661;</li>   
              </ul>
            </div>
            <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
          </div>
        </footer>
      )}
  }

export default Footer;