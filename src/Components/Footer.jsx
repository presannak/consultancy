import "./FooterStyles.css"

const Footer = () => {
    return (
      <div className="footer">
        <div className="top">
          <div>
            <h1>SSV EarthMovers</h1>
            <p></p>
          </div>
          <div>
            <a href="/">
              <i className="fa-brands fa-facebook-square"></i>
            </a>
            <a href="/">
              <i className="fa-brands fa-instagram-square"></i>
            </a>
            <a href="/">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="/">
              <i className="fa-brands fa-twitter-square"></i>
            </a>
          </div>
        </div>

        <div className="bottom">
          <div>
            <h4>Projects</h4>
            <a href="/">JCB Services</a>
            <a href="/">Quarry Bounding</a>
            <a href="/">Earth Handling</a>
            <a href="/">Earth Transporting</a>
           
          </div>

          <div>
            <h4>Community</h4>
            <a href="/">Facebook</a>
            <a href="/">Instagram</a>
            <a href="/">LinkedIn</a>
            <a href="/">Twitter</a>
          </div>

          <div>
            <h4>Help</h4>
            <a href="/">Support</a>
            <a href="/">Report a problem</a>
          </div>

          <div>
            <h4>Contact</h4>
            <a href="/">+91 90479 50202</a>
            <a href="/">ssvem@ymail.com</a>
            <a href="/">35/27 F, Mettur Dam, Salem</a>
          </div>

          <div>
            <h4>Others</h4>
            <a href="/">Terms of service</a>
            <a href="/">License</a>
          </div>
        </div>
      </div>
    );
}

export default Footer;