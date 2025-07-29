import "./Connectform.css";
import "./Topheading.css"
const Connectform = ({onClose}) => {
return(
<div>
    <div className="overlay">
        <div className="overlay" onClick={onClose}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Contact Form</h2>
            <form>
              <input type="text" placeholder="Your name" />
              <input type="tel" placeholder="phone" />
              <input type="email" placeholder="Your email" />
              <textarea placeholder="Your message" rows={4}></textarea>
              <button type="submit" className="connectmebtn">Submit</button>
            </form>
            <button className="close-button" onClick={onClose}>&times;</button>
          </div>
        </div>
    </div>
</div>
)
}
export default Connectform;