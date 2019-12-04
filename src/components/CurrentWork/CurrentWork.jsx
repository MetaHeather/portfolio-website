import React, {Component} from 'react';

class CurrentWork extends Component{
    render() {
      return (
        <section id="testimonials">
          <div className="text-container">
            <div className="row">
              <div className="two columns header-col">
                <h1><span></span></h1>
              </div>
              <div className="ten columns flex-container">
                <div className="flexslider">
                  <ul className="slides">
                    <li>
                      <blockquote>
                        <p>Currently adding features such as profile pages and search
                        </p>
                        <cite>Picto</cite>
                      </blockquote>
                    </li> 
                    <li>
                      <blockquote> 
                        <p>Adding links to assignments will soon available
                        </p>
                        <cite>Planni</cite>
                      </blockquote>
                    </li>
                  </ul>
                </div> 
              </div>
            </div> 
          </div> 
        </section>
      )}
  }

  export default CurrentWork;