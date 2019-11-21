var NewComponent = React.createClass({
    render: function() {
      return (
  
        <section id="call-to-action">
          <div className="row">
            <div className="two columns header-col">
              <h1><span>Get Hosting.</span></h1>
            </div>
            <div className="seven columns">
              <h2><a href="http://www.dreamhost.com/r.cgi?287326|STYLESHOUT">Host This Template on Dreamhost.</a></h2>
              <p>Looking for an awesome and reliable webhosting? Try <a href="http://www.dreamhost.com/r.cgi?287326|STYLESHOUT"><span>DreamHost</span></a>.
                Get <span>$50 off</span> when you sign up with the promocode <span>STYLESHOUT</span>. 
                {/* Simply type	the promocode in the box labeled “Promo Code” when placing your order. */}</p>
            </div>
            <div className="three columns action">
              <a href="http://www.dreamhost.com/r.cgi?287326|STYLESHOUT" className="button">Sign Up Now</a>
            </div>
          </div>
        </section>
      );
    }
  });