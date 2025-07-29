import flogo from "../assets/flogo.png";
import "./Footer.css"
import gmail from "../assets/social/gmail.png";
import linedin from "../assets/social/linkedin.png";
import facebook from "../assets/social/facebook.png";
import phone from "../assets/social/phone.png"
import github from "../assets/social/github.png"
const Footer = () =>{
    return (
      <div>
        <div className="mainfooter">
          <div className="footer-section">
            <div className="footer-logo">
              <img src={flogo} alt="Footer Logo" />
            </div>
            <div className="footerlinks">
              <div className="links">
                <h3>Quick Links</h3>
                <ul>
                  <li>
                    <a href="">Home</a>
                  </li>
                  <li>
                    <a href="">About</a>
                  </li>
                  <li>
                    <a href="">Projects</a>
                  </li>
                  <li>
                    <a href="">Contacts</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footerlinks">
              <div className="links">
                <h3>Social Media</h3>
                <ul>
                  
                  <li className="socialmedia">
                    <a href="https://www.facebook.com/chetan.vastrad" target="_blank"><img src={facebook} alt="Facebook" /></a>
                  </li>
                   <li className="socialmedia">
                    <a href="https://www.linkedin.com/in/chetan-vastrad-020a811b0/" target="_blank"><img src={linedin} alt="Linked In" /></a>
                  </li>
                   <li className="socialmedia">
                    <a href="https://github.com/chetan-vastrad" target="_blank"><img src={github} alt="GitHub" /></a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footerlinks">
              <div className="links">
                <h3>Contact Info</h3>
                <ul>
                  <li>
                  <a href="">🏠 445, Layout, Raghuvanahalli, Bangalore City Municipal Corporation Layout, Bengaluru, Karnataka 560062, India</a>
                  </li>
                  <li>
                    <a href="">📧 chetan.vastradanju4@gmail.com</a>
                  </li>
                  <li>
                    <a href="">📞 + 91 72187 98712</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="copyright">
            <p>© Copyright Chetan Vastrad. All right reserved.</p>
          </div>
        </div>
      </div>
    );
}
export default Footer;