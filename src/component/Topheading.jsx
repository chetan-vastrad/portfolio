import { useState } from "react";
import mainlogo from "../assets/mainlogo.jpg"
import "./TopHeading.css";
import Connectform from "./Connectform";
const TopHeading = () =>{
  const [showForm, setShowForm] =useState(false);
  const connectFormHandler = () =>{
    setShowForm(true);
  }
    return (
      <div>
        <div className="mainlogo">
         <div>
         <img src={mainlogo} alt="Main Logo" srcset="" />
         <h1 className="maintext">Front End Web Devloper </h1>
         <p> UI/UX</p>
         <button className="connectmebtn" onClick={connectFormHandler}>Connect Me</button>
         </div>
        </div>
        {showForm && <Connectform onClose={() => setShowForm(false)} />}
      </div>
    );
}
export default TopHeading;