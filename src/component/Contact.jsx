import "./Contact.css"
import gmail from "../assets/social/gmail.png";
import linedin from "../assets/social/linkedin.png";
import facebook from "../assets/social/facebook.png";
import phone from "../assets/social/phone.png"
import github from "../assets/social/github.png"
const Contact = () =>{
    return(
        <div>
            <div className="contact-section">
                <div className="contact-heading">
                    <h2>📱Contact Me</h2>
                    <p>Discover more about who I am, what I do, and what drives my passion for development.</p>
                    <span>Explore my journey from curious learner to passionate developer—uncover <br/> the experiences, values, and creative mindset that shape my<br/> approach to building purposeful digital solutions.</span>
                    <div className="connections">
                        <div className="connection-head">
                            <h3>Connect Me On</h3>
                        </div>
                        <div className="connect">
                        <img src={gmail} alt="Gmail Image" /> <a href="mailto:chetan.vastradanju4@gmail.com">chetan.vastradanju4@gmail.com</a>
                        </div>
                        <div className="connect">
                        <img src={linedin} alt="Linkedin Image" srcset="" /><a href="https://www.linkedin.com/in/chetan-vastrad-020a811b0/" target="_blank"> Chetan Vastrad</a>
                        </div>
                        <div className="connect">
                        <img src={facebook} alt="Facebook Image" srcset="" /><a href="https://www.facebook.com/chetan.vastrad" target="_blank"> https://www.facebook.com/chetan.vastrad</a>
                        </div>
                        <div className="connect">
                        <img src={github} alt="GitHub Image" srcset="" /><a href="https://github.com/chetan-vastrad" target="_blank"> https://github.com/chetan-vastrad</a>
                        </div>
                        <div className="connect">
                        <img src={phone} alt="Phone Image" srcset="" /><a href="tel:+917218798712">+91 72187 98712</a>
                        </div>
                    </div>
                </div>
                <div className="contact-form">
                <h2>Let's Connect</h2>
                    <form action="">
                        <div className="input-section">
                        <input type="text" placeholder="Name" />
                        </div>
                        <div className="input-section">
                        <input type="text" placeholder="Email" />
                        </div>
                        <div className="input-section">
                        <input type="text" placeholder="Number" />
                        </div>
                        <div className="input-section">
                        <textarea name=""  placeholder="Message" rows={5}></textarea>
                        </div>
                        <div className="submit-btn">
                            <button>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Contact;