import React, {Component} from 'react';

class ContactUs extends Component{
    render() {
      return (
        <section id="contact">
          <div className="row section-head">
            <div className="two columns header-col">
              <h1><span>Get In Touch.</span></h1>
            </div>
            <div className="ten columns">
              <p className="lead">I can be contacted by Email at any time &#9786;
              </p>
            </div>
          </div>
          <div className="row">
            <div className="eight columns">
              <form action method="post" id="contactForm" name="contactForm">
                <fieldset>
                  <div>
                    <label htmlFor="contactName">Name <span className="required">*</span></label>
                    <input type="text" defaultValue={""} size={35} id="contactName" name="contactName" />
                  </div>
                  <div>
                    <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                    <input type="text" defaultValue={""} size={35} id="contactEmail" name="contactEmail" />
                  </div>
                  <div>
                    <label htmlFor="contactSubject">Subject</label>
                    <input type="text" defaultValue={""} size={35} id="contactSubject" name="contactSubject" />
                  </div>
                  <div>
                    <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                    <textarea cols={50} rows={15} id="contactMessage" name="contactMessage" defaultValue={""} />
                  </div>
                  <div>
                    <button className="submit">Submit</button>
                    <span id="image-loader">
                      <img alt="" src="images/loader.gif" />
                    </span>
                  </div>
                </fieldset>
              </form> 
              <div id="message-warning"> Error.</div>
              <div id="message-success">
                <i className="fa fa-check" />Your message was sent, thank you!<br />
              </div>
            </div>
            <aside className="four columns footer-widgets">
              <div className="widget widget_tweets">
                <h4 className="widget-title">Send me an email</h4>
                <ul id="twitter">
                  <li>
                    <span>
                      I'll get back to you as soon as possible.
                      In the mean time, be sure to check out some of my 
                      projects up above!
                    </span>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </section>
      )}
  }

  export default ContactUs;