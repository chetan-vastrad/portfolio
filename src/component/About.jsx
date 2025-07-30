import "./About.css";
import chetan from "../assets/chetan.png"
const About = () =>{
    return (
      <div>
        <div className="aboout-section">
          <div className="about-header">
            <h2>🥇 AboutMe</h2>
            <p>
              Academic Milestones & Certifications: Shaping My Expertise in
              Technology and Development
            </p>
          </div>
          <div className="about-inner">
            <div className="about-image">
              <img src={chetan} alt="Chetan Image" srcset="" />
            </div>
            <div className="about-dis">
              <h2>Who I Am & What Drives Me</h2>
              <h4>A Passion for Continuous Learning</h4>
              <p>
                I’ve always had a natural curiosity for technology, which led me
                to pursue a degree in Computer Science. My career has been a
                journey of continuous learning—whether it’s mastering new
                frameworks, experimenting with emerging tools, or solving
                complex problems in innovative ways.
              </p>
              <h4>My Approach to Problem-Solving</h4>
              <p>
                I approach every challenge with a growth mindset. I thrive in
                environments that encourage collaboration and creative thinking,
                where I can contribute my technical expertise while learning
                from others.
              </p>
              <div className="project-completion">
                <div>
                  <h3>80+</h3>
                  <span>Project Complete</span>
                </div>
                <div className="centerbar"></div>
                <div>
                  <h3>1.8+</h3>
                  <span>Year Experiance</span>
                </div>
              </div>
               <button className="hiremebtn">Hire me</button>
            </div>
          </div>
        </div>
      </div>
    );
}
export default About;