import "./Myskills.css"
import html from "../assets/skills/html.png";
import cssimg from "../assets/skills/css.png";
import js from "../assets/skills/js.png";
import react from "../assets/skills/react.png"
import jq from "../assets/skills/jq.png";
import bootstrapimg from "../assets/skills/bootstrap.png";
import res from "../assets/skills/res.png";
import web from "../assets/skills/web.png";
import arrow  from "../assets/arrow.png"
const Myskills = () =>{
    return (
      <div className="allskills">
        <div className="shillsmainhead">
          <div className="skillsheding">
            <h2>👨🏻‍💻 Mastering the Craft of Development</h2>
            <p>
              Here’s a glimpse of the technologies and tools I specialize in to
              bring ideas to life.
            </p>
          </div>
          <button>View More <span className="arrowspan"><img src={arrow} alt="Arrow Image" /></span></button>
        </div>
        <div className="skillsinner">
          <div className="skillset skillfirst">
            <img src={html} alt="Html Logo" />
            <div className="skilldis ">
              <h3>HTML</h3>
              <p>Building the Structure of the Web with HTML</p>
            </div>
          </div>
          <div className="skillset skillsecond">
            <img src={cssimg} alt="Html Logo" />
            <div className="skilldis">
              <h3>CSS</h3>
              <p>
                Styling and Enhancing User Interfaces with CSS for a Beautiful
                User Experience.
              </p>
            </div>
          </div>
          <div className="skillset skillthird">
            <img src={js} alt="Html Logo" />
            <div className="skilldis">
              <h3>JS</h3>
              <p>
                Bringing Interactivity and Dynamic Features to Websites with
                JavaScript.
              </p>
            </div>
          </div>
          {/* <div className="skillset">
            <img src={bootstrapimg} alt="Html Logo" />
            <div className="skilldis">
              <h3>Webdesign</h3>
              <p>
                {" "}
                Rapidly Developing Responsive, Mobile-First Websites with
                Bootstrap.
              </p>
            </div>
          </div>
          <div className="skillset">
            <img src={react} alt="Html Logo" />
            <div className="skilldis">
              <h3>REACT</h3>
              <p>
                Building Scalable, Component-Based User Interfaces with React.
              </p>
            </div>
          </div>
          <div className="skillset">
            <img src={jq} alt="Html Logo" />
            <div className="skilldis">
              <h3>jQuery</h3>
              <p>
                Simplifying DOM Manipulation and Enhancing Web Interactivity
                with jQuery.
              </p>
            </div>
          </div>
          <div className="skillset">
            <img src={res} alt="Html Logo" />
            <div className="skilldis">
              <h3>Responsive Design</h3>
              <p>
                Ensuring Seamless User Experience Across Devices with Responsive
                Design.
              </p>
            </div>
          </div>
          <div className="skillset">
            <img src={web} alt="Html Logo" />
            <div className="skilldis">
              <h3>Webdesign</h3>
              <p>Creating Visually Engaging and User-Centric Web Designs.</p>
            </div>
          </div> */}
        </div>
      </div>
    );
}
export default Myskills;